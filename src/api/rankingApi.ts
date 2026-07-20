import type {
    HomeShoppingResponse,
    LiveBroadcastResponse,
    RankingItemViewModel,
    RankingTab,
} from "../types/ranking";

const API_URL =
    "https://live.ecomm-data.com/api/assignment/list";

const LIVE_PLATFORM_NAMES: Record<string, string> = {
    naver: "네이버쇼핑LIVE",
    gongyoung: "공영쇼핑",
};

function normalizeHomeShoppingItem(
    item: HomeShoppingResponse["list"][number],
): RankingItemViewModel {
    return {
        id: item.hsshow_id,
        platformName: item.platform_name,
        title: item.hsshow_title,
        dateTime: item.hsshow_datetime_start,
        visitCount: item.visit_cnt,
        salesCount: item.sales_cnt,
        salesAmount: item.sales_amt,
        productCount: item.item_cnt,
    };
}

function normalizeLiveBroadcastItem(
    item: LiveBroadcastResponse["list"][number],
): RankingItemViewModel {
    return {
        id: item.objectID,
        platformName:
            LIVE_PLATFORM_NAMES[item.platform_id] ?? item.platform_id,
        title: item.title,
        dateTime: item.datetime_start,
        visitCount: item.visit_cnt,
        salesCount: item.sales_cnt,
        salesAmount: item.sales_amt,
        productCount: item.product_cnt,
    };
}

export async function getRankingList(
    type: RankingTab,
    signal?: AbortSignal,
): Promise<RankingItemViewModel[]> {
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

    if (type === "live") {
        const data =
            (await response.json()) as LiveBroadcastResponse;

        return data.list.map(normalizeLiveBroadcastItem);
    }

    const data =
        (await response.json()) as HomeShoppingResponse;

    return data.list.map(normalizeHomeShoppingItem);
}