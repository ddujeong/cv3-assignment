import type { RankingType } from "../App";
import { RankingItem } from "./RankingItem";

interface RankingListProps {
    type: RankingType;
}

const mockItems = [
    {
        id: 1,
        platformName: "네이버쇼핑LIVE",
        title: "[베스트어워즈] 7월 킨도 베스트어워즈 앵콜 라이브💕",
        date: "07.20",
    },
    {
        id: 2,
        platformName: "네이버쇼핑LIVE",
        title: "혜택 가득한 갤럭시탭 라이브🧡",
        date: "07.20",
    },
    {
        id: 3,
        platformName: "네이버쇼핑LIVE",
        title: "오늘 단 하루! 최대 26% 할인쿠폰+포인트 적립!",
        date: "07.20",
    },
    {
        id: 4,
        platformName: "네이버쇼핑LIVE",
        title: "갤럭시 S26 시리즈 자급제 할인 LIVE",
        date: "07.20",
    },
    {
        id: 5,
        platformName: "네이버쇼핑LIVE",
        title: "삼성 에어컨 냉장고 Live 사은품",
        date: "07.20",
    },
];

export function RankingList({ type }: RankingListProps) {
    return (
        <div className="ranking-list">
            {mockItems.map((item, index) => (
                <RankingItem
                    key={`${type}-${item.id}`}
                    rank={index + 1}
                    platformName={
                        type === "hs" ? "홈쇼핑 방송" : item.platformName
                    }
                    title={item.title}
                    date={item.date}
                />
            ))}
        </div>
    );
}