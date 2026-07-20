export type RankingTab = "live" | "hs";

export interface HomeShoppingItem {
    hsshow_id: string;
    platform_id: string;
    platform_name: string;
    hsshow_title: string;
    hsshow_datetime_start: string;
    visit_cnt: number | null;
    sales_cnt: number | null;
    sales_amt: number | null;
    item_cnt: number | null;
}

export interface LiveBroadcastItem {
    objectID: string;
    platform_id: string;
    title: string;
    datetime_start: string;
    product_cnt: number | null;
    visit_cnt: number | null;
    sales_cnt: number | null;
    sales_amt: number | null;
    cid?: number;
}

export interface RankingItemViewModel {
    id: string;
    platformName: string;
    title: string;
    dateTime: string;
    visitCount: number | null;
    salesCount: number | null;
    salesAmount: number | null;
    productCount: number | null;
}

export interface HomeShoppingResponse {
    list: HomeShoppingItem[];
    mask: boolean;
}

export interface LiveBroadcastResponse {
    list: LiveBroadcastItem[];
    mask: boolean;
}