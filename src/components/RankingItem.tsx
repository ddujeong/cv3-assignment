import type { RankingTab } from "../types/ranking";

interface RankingItemProps {
    rank: number;
    type: RankingTab;
    platformName: string;
    title: string;
    date: string;
    visitCount: number | null;
    salesCount: number | null;
    salesAmount: number | null;
}
export function RankingItem({
    rank,
    type,
    platformName,
    title,
    date,
    visitCount,
    salesCount,
    salesAmount,
}: RankingItemProps) {
    function formatMetric(value: number | null): string {
        return value === null
            ? "🔒"
            : value.toLocaleString("ko-KR");
    }
    function formatVisitMetric(): string {
        if (type === "hs") {
            return "🚧";
        }
        return formatMetric(visitCount);
    }
    return (
        <article className="ranking-item">
            <div className="ranking-item__rank">{rank}</div>
            <div className="ranking-item__content">
                <div className="ranking-item__heading">
                    <span className="ranking-item__platform">
                        {platformName}
                    </span>
                    <strong className="ranking-item__title">
                        {title}
                    </strong>
                </div>
                <div className="ranking-item__metrics">
                    <span>{date}</span>
                    <span>
                        {type === "hs" ? "시청률" : "조회수"}:{" "}
                        {formatVisitMetric()}
                    </span>
                    <span>
                        판매 {formatMetric(salesCount)}
                    </span>

                    <span>
                        매출 {formatMetric(salesAmount)}
                    </span>
                </div>
            </div>
        </article>

    );

}
