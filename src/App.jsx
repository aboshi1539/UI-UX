import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FestivalSection from './components/FestivalSection';
import HistorySection from './components/HistorySection';
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';
import FestivalDetails from './pages/FestivalDetails';
import HistoryDetails from './pages/HistoryDetails';
import CultureDetails from './pages/CultureDetails';
import MysteryRockDetails from './pages/MysteryRockDetails';
import YassaDetails from './pages/YassaDetails';


// 画像アセット
import festivalImg from './assets/mikosi.jpeg';
import historyImg from './assets/ousiko.jpg';
import cultureImg from './assets/nou.jpg';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />

      {/* イントロダクション */}
      <IntroSection />

      {/* ===== 祭りセクション（赤系・独立デザイン） ===== */}
      <FestivalSection imageSrc={festivalImg} />

      {/* ===== 歴史セクション（青系・独立デザイン） ===== */}
      <HistorySection imageSrc={historyImg} />

      {/* ===== 文化セクション（紫系・独立デザイン） ===== */}
      <CultureSection imageSrc={cultureImg} />
    </>
  );
}

/**
 * メインアプリケーション
 * 高砂市の魅力を祭り・歴史・文化の3カテゴリで紹介する
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <ScrollToTop />
      {/* ナビゲーション */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<FestivalDetails />} />
        <Route path="/history" element={<HistoryDetails />} />
        <Route path="/culture" element={<CultureDetails />} />
        <Route path="/mystery-rock" element={<MysteryRockDetails />} />
        <Route path="/yassa" element={<YassaDetails />} />

      </Routes>

      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;
