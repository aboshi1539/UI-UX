import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * フッターセクション
 * ミニマルでエレガントなデザイン
 */
export default function Footer() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer 
      ref={ref} 
      className="relative py-24 md:py-32 border-t border-white/[0.04]"
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      {/* 背景グロー */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full" style={{ padding: '0 80px', width: '100%' }}>
        {/* CTAセクション */}
        <div
          style={{ textAlign: 'center', marginBottom: '80px' }}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2
            className="font-serif font-bold text-text-primary"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', marginBottom: '20px', lineHeight: '1.2' }}
          >
            高砂で、<br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              感動の旅
            </span>
            を。
          </h2>
          {/* 中央揃えを明示的に指定 */}
          <p
            style={{
              color: '#adb5bd',
              fontSize: '1.1rem',
              fontWeight: '300',
              textAlign: 'center',
              maxWidth: '480px',
              margin: '0 auto 40px',
              lineHeight: '1.9',
            }}
          >
            歴史と文化が紡ぐ、唯一無二の体験があなたを待っています。
          </p>
          <a
            href="https://www.city.takasago.lg.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-primary font-semibold text-sm tracking-wider rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            高砂市公式サイトへ
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* 区切り線 */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* フッター情報 */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ textAlign: 'center', width: '100%' }}
        >
          {/* ロゴ */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
                <text x="20" y="26" textAnchor="middle" fill="#c9a96e"
                  fontSize="16" fontFamily="'Noto Serif JP', serif" fontWeight="600">
                  高
                </text>
              </svg>
            </div>
            <span className="font-serif text-sm text-text-secondary tracking-widest">高砂市の魅力</span>
          </div>

          {/* コピーライト */}
          <p className="text-text-muted text-xs tracking-wider">
            © 2026 Takasago City Showcase. All rights reserved.
          </p>

          {/* ページトップへ戻る */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-text-muted text-xs tracking-wider hover:text-accent transition-colors duration-300 cursor-pointer"
          >
            トップへ戻る
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
