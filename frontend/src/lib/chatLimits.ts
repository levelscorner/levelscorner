const OFF_TOPIC_LIMIT = 5;
const SESSION_GAP_MS = 2 * 60 * 60 * 1000; // 2 hours

interface IPState {
    offTopicCount: number;
    totalMessages: number;
    lastSeen: number; // Date.now()
}

// Module-level singleton — persists for the lifetime of the Node.js process.
const state = new Map<string, IPState>();

function getOrCreate(ip: string): IPState {
    let s = state.get(ip);
    if (!s) {
        s = { offTopicCount: 0, totalMessages: 0, lastSeen: 0 };
        state.set(ip, s);
    }
    return s;
}

export function check(ip: string): { blocked: boolean; reason: string; offTopicCount: number } {
    const s = state.get(ip);
    if (!s) return { blocked: false, reason: "", offTopicCount: 0 };

    if (s.offTopicCount >= OFF_TOPIC_LIMIT) {
        return { blocked: true, reason: "off_topic_limit", offTopicCount: s.offTopicCount };
    }

    if (s.totalMessages > 0 && Date.now() - s.lastSeen > SESSION_GAP_MS) {
        return { blocked: true, reason: "returning_visitor", offTopicCount: s.offTopicCount };
    }

    return { blocked: false, reason: "", offTopicCount: s.offTopicCount };
}

export function recordMessage(ip: string): void {
    const s = getOrCreate(ip);
    s.totalMessages++;
    s.lastSeen = Date.now();
}

export function recordOffTopic(ip: string): number {
    const s = getOrCreate(ip);
    s.offTopicCount++;
    return s.offTopicCount;
}

export function isOffTopicResponse(text: string): boolean {
    return text.trimStart().startsWith("I'm focused on Abhinav's story");
}

export { OFF_TOPIC_LIMIT };
