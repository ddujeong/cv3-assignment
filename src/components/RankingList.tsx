import { useEffect, useState } from "react";
import { getRankingList } from "../api/rankingApi";
import type {
    RankingItemViewModel,
    RankingTab,
} from "../types/ranking";
import { RankingItem } from "./RankingItem";

interface RankingListProps {
    type: RankingTab;
}
function formatDate(
    dateTime: string,
    type: RankingTab,
): string {
    if (type === "live") {
        if (!/^\d{10}$/.test(dateTime)) {
            return "-";
        }
        const month = dateTime.slice(2, 4);
        const day = dateTime.slice(4, 6);
        return `${month}.${day}`;
    }
    if (!/^\d{12}$/.test(dateTime)) {
        return "-";
    }
    const month = dateTime.slice(4, 6);
    const day = dateTime.slice(6, 8);
    return `${month}.${day}`;
}
export function RankingList({ type }: RankingListProps) {
    const [items, setItems] = useState<RankingItemViewModel[]>(
        [],
    );
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        async function loadRanking() {
            setIsLoading(true);
            setErrorMessage("");
            try {
                const data = await getRankingList(
                    type,
                    controller.signal,
                );
                setItems(data.slice(0, 10));
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === "AbortError"
                ) {
                    return;
                }
                setItems([]);
                setErrorMessage(
                    error instanceof Error
                        ? error.message
                        : "알 수 없는 오류가 발생했습니다.",
                );
            } finally {
                setIsLoading(false);
            }
        }
        void loadRanking();
        return () => controller.abort();
    }, [type]);
    if (isLoading) {
        return (
            <div className="ranking-state">
                방송 정보를 불러오는 중입니다.
            </div>
        );
    }
    if (errorMessage) {
        return (
            <div className="ranking-state ranking-state--error">
                {errorMessage}
            </div>
        );
    }
    if (items.length === 0) {
        return (
            <div className="ranking-state">
                표시할 방송이 없습니다.
            </div>
        );
    }
    return (
        <div className="ranking-list">
            {items.map((item, index) => (
                <RankingItem
                    key={item.id}
                    rank={index + 1}
                    type={type}
                    platformName={item.platformName}
                    title={item.title}
                    date={formatDate(item.dateTime, type)}
                    visitCount={item.visitCount}
                    salesCount={item.salesCount}
                    salesAmount={item.salesAmount}
                    productCount={item.productCount}
                />
            ))}
        </div>
    );
}