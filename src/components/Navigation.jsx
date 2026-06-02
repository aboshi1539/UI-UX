import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * グラスモーフィズムを採用したスティッキーナビゲーション
 * スクロールに応じて表示/非表示が切り替わる
 */
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 詳細ページかどうかを判定
  const isDetailsPage = ['/festival', '/history', '/culture'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // トップページにいる場合のみセクションのスクロール位置を検知
      if (!isDetailsPage) {
        const sections = ['festival', 'history', 'culture'];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom > 200) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailsPage]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navItems = [
    { id: 'festival', label: '祭り', desc: '熱気と伝統の布団屋台', color: 'text-festival' },
    { id: 'history', label: '歴史', desc: '謎の巨石・石の宝殿', color: 'text-history' },
    { id: 'culture', label: '文化', desc: '暮らしに息づく和の心', color: 'text-culture' },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'py-4 bg-[#0a0a0f]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* ロゴ */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer bg-transparent border-none text-left"
          >
            <div className={`transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c9a96e" />
                    <stop offset="100%" stopColor="#dfc59b" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5"
                  className="group-hover:stroke-accent-light transition-colors duration-300" />
                <text x="20" y="26" textAnchor="middle" fill="url(#logoGrad)"
                  fontSize="16" fontFamily="'Noto Serif JP', serif" fontWeight="600"
                  className="group-hover:fill-accent-light transition-colors duration-300">
                  高
                </text>
              </svg>
            </div>
            <span className={`font-serif font-semibold text-accent tracking-widest transition-all duration-500 group-hover:text-accent-light ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>
              高砂市
            </span>
          </button>

          {/* デスクトップナビ */}
          {!isDetailsPage && (
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-6 py-3.5 text-base font-semibold tracking-wider transition-all duration-300 rounded-full cursor-pointer flex items-center gap-2 group/btn ${
                    activeSection === item.id
                      ? `${item.color} bg-white/5`
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {/* 左横の説明テキスト */}
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 'normal',
                      letterSpacing: '0.05em',
                      opacity: 0.5,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="hidden lg:inline group-hover/btn:opacity-90"
                  >
                    {item.desc}
                  </span>
                  {/* 中央のドット装飾（説明とラベルの区切り） */}
                  <span className="hidden lg:inline text-white/20 text-xs">•</span>
                  
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* モバイルメニューボタン */}
          {!isDetailsPage && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-transparent border-none"
              aria-label="メニュー切替"
            >
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`} />
            </button>
          )}
        </div>

        {/* モバイルメニュー */}
        {!isDetailsPage && (
          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-3 text-left text-base font-medium tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? `${item.color} bg-white/5`
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 画面右下に常時表示される「高」ロゴ型トップに戻るフローティングボタン */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #100a18 0%, #0a0a0f 100%)',
            border: '1.5px solid #c9a96e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(201, 169, 110, 0.25)',
            cursor: 'pointer',
            zIndex: 999,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            padding: 0,
          }}
          className="hover:scale-110 group"
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#dfc59b';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.8), 0 0 30px rgba(201, 169, 110, 0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#c9a96e';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(201, 169, 110, 0.25)';
          }}
          aria-label="ページトップに戻る"
        >
          <svg viewBox="0 0 40 40" className="w-8 h-8" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="logoGradFloating" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9a96e" />
                <stop offset="100%" stopColor="#dfc59b" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradFloating)" strokeWidth="1.5" />
            <text
              x="20"
              y="27"
              textAnchor="middle"
              fill="url(#logoGradFloating)"
              fontSize="20"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              ↑
            </text>
          </svg>
        </button>
      )}
    </>
  );
}
