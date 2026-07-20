import type { RankingType } from "../App";

interface RankingTabsProps {
    selectedType: RankingType;
    onChange: (type: RankingType) => void;
}

export function RankingTabs({
    selectedType,
    onChange,
}: RankingTabsProps) {
    return (
        <div className="ranking-tabs">
            <button
                type="button"
                className={`ranking-tabs__button ${selectedType === "live"
                        ? "ranking-tabs__button--active"
                        : ""
                    }`}
                onClick={() => onChange("live")}
            >
                라방
            </button>

            <button
                type="button"
                className={`ranking-tabs__button ${selectedType === "hs"
                        ? "ranking-tabs__button--active"
                        : ""
                    }`}
                onClick={() => onChange("hs")}
            >
                홈쇼핑
            </button>
        </div>
    );
}