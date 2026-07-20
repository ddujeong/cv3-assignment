import type {
    RankingResponse,
    RankingTab,
} from "../types/ranking";

const API_URL =
    "https://live.ecomm-data.com/api/assignment/list";

export async function getRankingList(
    type: RankingTab,
    signal?: AbortSignal,
): Promise<RankingResponse> {
    const requestType = type === "live" ? "lb" : "hs";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            type: requestType,
        }),
        signal,
    });

    if (!response.ok) {
        throw new Error(
            `랭킹 조회에 실패했습니다. (${response.status})`,
        );
    }

    return response.json() as Promise<RankingResponse>;
}