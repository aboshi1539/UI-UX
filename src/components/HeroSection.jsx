import { useEffect, useState, useRef } from 'react';
import { useParallax } from '../hooks/useScrollAnimation';
import heroImg from '../assets/bnr_takasago_monument.jpg';

/**
 * ヒーローセクション
 * Apple製品ページのような全画面パララックスヒーロー
 * テキストのフェードイン＋スケールアニメーション
 */
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxRef, parallaxOffset] = useParallax(0.4);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // 初期ロードアニメーション（少し遅延させて印象を与える）
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // スクロール量に応じた透明度とスケール
  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0003;
  const textY = scrollY * 0.4;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-[120vh] min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* 背景画像 + パララックス */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: `scale(${scale}) translateY(${parallaxOffset * 0.3}px)` }}
      >
        <img
          src={heroImg}
          alt="高砂市の美しい風景"
          className={`w-full h-full object-cover transition-all duration-[2s] ease-out ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
      </div>

      {/* グラデーションオーバーレイ（視認性を高めるため濃度を調整） */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/50 to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 via-[#0a0a0f]/20 to-[#0a0a0f]/50" />

      {/* メインコンテンツ */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, transform: `translateY(${textY}px)` }}
      >
        {/* サブテキスト */}
        <p
          className={`text-accent font-medium text-sm md:text-base tracking-[0.4em] uppercase mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          兵庫県 高砂市
        </p>

        {/* メインタイトル */}
        <h1
          className={`font-serif font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.1] mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 4px 32px rgba(0,0,0,0.4)' }}
        >
          <span className="block">高砂の</span>
          <span className="block mt-2 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            魅力
          </span>
        </h1>

        {/* 説明テキスト */}
        <p
          className={`text-[#e0e0e0] text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7), 0 2px 20px rgba(0,0,0,0.4)' }}
        >
          祭り、歴史、文化 ——<br className="hidden md:block" />
          千年の物語が息づくまちへ
        </p>

        {/* スクロールインジケーター */}
        <div
          className={`transition-all duration-1000 delay-[1.4s] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() =>
              document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex flex-col items-center gap-3 cursor-pointer"
            aria-label="下にスクロール"
          >
            <span className="text-[#b0b0b0] text-xs tracking-[0.3em] uppercase group-hover:text-accent transition-colors duration-300"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
            >
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent/60 to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-4 bg-accent animate-scroll-line" />
            </div>
          </button>
        </div>
      </div>

      {/* 底部フェードアウト */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
