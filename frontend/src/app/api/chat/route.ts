import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import * as limits from "@/lib/chatLimits";

export const runtime = "nodejs";

const BASE_SYSTEM_PROMPT = `You are speaking as Abhinav Rana's AI, embedded in his personal portfolio at levelscorner.com.
Your job is to help visitors — recruiters, engineers, collaborators — genuinely understand who Abhinav is and what he's built.

TONE:
- Sound like a thoughtful colleague who knows Abhinav well, not a resume reader
- Explain the WHY behind things: why Go after C++, why robotics, what problems he actually solved
- Be specific — reference real projects, real challenges, real decisions
- 2-4 sentences or a short focused paragraph is ideal; use bullets only when listing genuinely enumerable things
- Never open with "Certainly!", "Great question!", or any filler phrase — just answer directly
- Do not copy-paste facts — interpret and explain them

CONTACT & LINKS (use naturally when relevant — don't force it):
- Email: rabhinavcs@gmail.com
- LinkedIn: linkedin.com/in/abhinavrl4f/
- Contact page: levelscorner.com/contact (send a message, links to email + LinkedIn)
- About page: levelscorner.com/about (full background, timeline, skills — good if someone wants the whole picture)

WHEN TO MENTION LINKS:
- Contact info/page → when someone asks how to reach Abhinav, wants to hire him, connect, or send a message
- About page → when someone asks about his full background, story, or career arc and your answer only scratches the surface
- Mention them naturally in-sentence — no need for a separate section

BOUNDARIES:
- ONLY discuss Abhinav's professional background: career, skills, projects, work experience, how to reach him
- NEVER discuss Project 44, personal wealth, salary, income, or anything private/financial
- If asked anything outside Abhinav's professional profile — general coding help, current events, other people — respond with exactly:

"I'm focused on Abhinav's story. Here are things I can actually help with:

• How did he go from C++ systems to Go microservices?
• What did he build at MachaniRobotics?
• What is he working on right now?
• Is he open to new opportunities?
• How can I get in touch?"

USAGE LIMITS (be transparent if asked):
- Visitors get up to 5 off-topic questions before chat is disabled
- Returning visitors (new session after 2+ hours) are redirected to the About and Contact pages
- If a visitor asks why chat is disabled, explain this kindly and point them to levelscorner.com/about or levelscorner.com/contact

Stay in character. You are not a general assistant.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    // Check rate limits first
    const { blocked, reason } = limits.check(ip);
    if (blocked) {
        return Response.json({ blocked: true, reason }, { status: 403 });
    }

    let body: { messages: ChatMessage[]; context?: string };
    try {
        body = await req.json();
    } catch {
        return Response.json({ error: "invalid request body" }, { status: 400 });
    }

    const { messages, context } = body;

    if (!messages?.length || messages[0].role !== "user") {
        return Response.json({ error: "messages must start with a user message" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return Response.json({ error: "Anthropic API key is not configured" }, { status: 500 });
    }

    // Build Anthropic message list, skipping empty-content placeholders
    const anthropicMessages: Anthropic.MessageParam[] = messages
        .filter((m) => m.content !== "")
        .map((m) => ({ role: m.role, content: m.content }));

    // Priming exchange on the first user message — gives the AI in-character context
    if (anthropicMessages.length === 1) {
        const actual = anthropicMessages[0];
        anthropicMessages.splice(0, 1,
            { role: "user", content: "I just landed on Abhinav's portfolio. Give me a quick sense of who he is." },
            { role: "assistant", content: "Abhinav is a backend engineer with 8 years of experience — he started in systems programming in C++ at Oracle, moved into robotics where he built the software stack for a humanoid robot at MachaniRobotics, and is now leading Go microservices at Persistent Systems. The through-line is a deep comfort with complex systems, whether that's 3G signaling protocols, gRPC gateways, or OTT subscription infrastructure. What do you want to know?" },
            actual,
        );
    }

    const systemPrompt = context
        ? `${BASE_SYSTEM_PROMPT}\n\nLATEST FRONTEND RESUME CONTEXT (JSON):\n${context}`
        : BASE_SYSTEM_PROMPT;

    const client = new Anthropic({ apiKey });

    const encoder = new TextEncoder();
    let accumulatedText = "";

    const stream = new ReadableStream({
        async start(controller) {
            try {
                const anthropicStream = await client.messages.stream({
                    model: "claude-haiku-4-5-20251001",
                    system: systemPrompt,
                    messages: anthropicMessages,
                    max_tokens: 1024,
                });

                for await (const chunk of anthropicStream) {
                    if (
                        chunk.type === "content_block_delta" &&
                        chunk.delta.type === "text_delta"
                    ) {
                        const text = chunk.delta.text;
                        accumulatedText += text;
                        controller.enqueue(encoder.encode(`data: ${text}\n\n`));
                    }
                }

                // Record message and check for off-topic
                limits.recordMessage(ip);

                let offTopicCount = limits.check(ip).offTopicCount;
                let nowBlocked = false;

                if (limits.isOffTopicResponse(accumulatedText)) {
                    offTopicCount = limits.recordOffTopic(ip);
                    if (offTopicCount >= limits.OFF_TOPIC_LIMIT) {
                        nowBlocked = true;
                    }
                }

                const status = JSON.stringify({ off_topic_count: offTopicCount, blocked: nowBlocked });
                controller.enqueue(encoder.encode(`data: [STATUS:${status}]\n\n`));
                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            } catch (err) {
                console.error("chat stream error:", err);
                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            } finally {
                controller.close();
            }
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
        },
    });
}
