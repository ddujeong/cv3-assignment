export type RankingTab = "live" | "hs";

export interface RankingCategory {
    cat_name?: string;
}

export interface RankingItemData {
    hsshow_id?: number | string;
    hsshow_title: string;
    platform_name: string;
    hsshow_datetime_start: string;
    hsshow_datetime_end?: string;

    cat?: RankingCategory;

    visit_cnt: number | null;
    sales_cnt: number | null;
    sales_amt: number | null;
    item_cnt: number | null;

    hsshow_url_live?: string;
}

export interface RankingResponse {
    list: RankingItemData[];
    mask?: boolean;
}