import type { RankingTab } from "../types/ranking";

interface RankingItemProps {
    rank: number;
    type: RankingTab;
    platformName: string;
    title: string;
    date: string;
}

export function RankingItem({
    rank,
    type,
    platformName,
    title,
    date,
}: RankingItemProps) {
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
                    <span>{type === "hs" ? "시청률" : "조회수"} 🔒</span>
                    <span>판매 🔒</span>
                    <span>매출 🔒</span>
                </div>
            </div>
        </article>
    );
}