import { useState } from "react";
import { Header } from "./components/Header";
import { RankingList } from "./components/RankingList";
import { RankingTabs } from "./components/RankingTabs";
import type { RankingTab } from "./types/ranking";


function App() {
  const [rankingType, setRankingType] = useState<RankingTab>("live");

  return (
    <>
      <Header />

      <main className="page">
        <section className="ranking">
          <h2 className="ranking__title">
            <span className="ranking__title-icon">◔</span>
            라방 · 홈쇼핑 랭킹 (채용 과제)
          </h2>

          <div className="ranking__title-line" />

          <RankingTabs
            selectedType={rankingType}
            onChange={setRankingType}
          />

          <RankingList type={rankingType} />
        </section>
      </main>
    </>
  );
}

export default App;