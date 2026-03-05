import { NextRequest } from "next/server";
import * as limits from "@/lib/chatLimits";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const { blocked, reason, offTopicCount } = limits.check(ip);

    return Response.json({
        blocked,
        reason,
        off_topic_count: offTopicCount,
        off_topic_limit: limits.OFF_TOPIC_LIMIT,
    });
}
