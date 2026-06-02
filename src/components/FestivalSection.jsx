import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

/**
 * 祭りセクション（Festival）
 * ─ 赤系アイデンティティ / 画像が左側
 */
export default function FestivalSection({ imageSrc }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible]   = useScrollAnimation({ threshold: 0.15 });
  const [textRef, textVisible]     = useScrollAnimation({ threshold: 0.15 });
  const [parallaxRef, parallaxOffset] = useParallax(0.15);

  return (
    /* ── 外枠：エッジ to エッジ の背景 ── */
    <section
      id="festival"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #130608 50%, #0a0a0f 100%)',
        borderTop:    '1px solid #e6394915',
        borderBottom: '1px solid #e6394915',
        padding: '80px 0 100px',
      }}
    >
      {/* ── 背景グロー（左上 / 右下） ── */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, #e6394612 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, #e6394608 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── 内部コンテンツ：左右余白付きの最大幅コンテナ ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 12%' }}>

        {/* セクションヘッダー */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
            transition: 'all 0.7s ease',
            opacity:    headerVisible ? 1 : 0,
            transform:  headerVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* カテゴリバッジ */}
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#e63946',
            border: '1px solid #e6394940',
            backgroundColor: '#e6394910',
            borderRadius: '4px',
            padding: '5px 16px',
            marginBottom: '20px',
          }}>
            Festival — 壱
          </span>

          {/* メインタイトル */}
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '700',
              color: '#f8f9fa',
              lineHeight: '1',
              margin: 0,
              transition: 'all 1s ease 0.2s',
              opacity:   headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            祭<span style={{ color: '#e63946' }}>り</span>
          </h2>
        </div>

        {/* 画像 ＋ テキスト */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '60px',
          alignItems: 'center',
        }}>

          {/* 画像エリア（左） */}
          <div
            ref={imageRef}
            style={{
              flex: '1 1 480px',
              transition: 'all 1.2s ease',
              opacity:   imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
            }}
          >
            <div ref={parallaxRef} style={{ position: 'relative' }}>
              {/* メイン画像 */}
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #e6394920, 0 30px 80px #e6394918',
                position: 'relative',
              }}>
                <img
                  src={imageSrc}
                  alt="曽根天満宮秋祭り"
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    display: 'block',
                    transform: `translateY(${parallaxOffset * 0.2}px)`,
                    transition: 'transform 1.5s ease',
                  }}
                  loading="lazy"
                />
                {/* グラデーションオーバーレイ */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, #e6394420 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #13060880, transparent)',
                  pointerEvents: 'none',
                }} />
                {/* 日付バッジ */}
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  fontSize: '12px', fontWeight: '700',
                  letterSpacing: '0.12em',
                  padding: '7px 16px',
                  borderRadius: '6px',
                }}>
                  毎年10月13日・14日開催
                </div>
              </div>
              {/* 装飾ブロック */}
              <div style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                width: '80px', height: '80px',
                borderRadius: '16px',
                backgroundColor: '#e63946',
                opacity: 0.12, filter: 'blur(4px)',
              }} />
            </div>
          </div>

          {/* テキストエリア（右） */}
          <div
            ref={textRef}
            style={{
              flex: '1 1 360px',
              transition: 'all 0.8s ease',
              opacity:   textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(28px)',
            }}
          >
            {/* アクセントライン */}
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #e63946, #ff6b7a)',
              borderRadius: '2px',
              marginBottom: '24px',
            }} />

            <h3 className="font-serif" style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: '600',
              color: '#f8f9fa',
              lineHeight: '1.5',
              marginBottom: '20px',
              transition: 'all 0.7s ease',
              opacity:   textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              曽根天満宮秋祭り<br />
              <span style={{ color: '#e67885', fontSize: '0.85em' }}>布団屋台発祥の地</span>
            </h3>

            <p style={{
              color: '#adb5bd',
              fontSize: '1.05rem',
              lineHeight: '2',
              fontWeight: '300',
              marginBottom: '16px',
              transition: 'all 0.7s ease 0.15s',
              opacity:   textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              毎年10月の曽根天満宮秋祭りは、11台の巨大な「布団屋台」が激しく練り合わされる圧巻の祭礼です。
              2トンを超える屋台が躍動する、播州最大級の熱気を体感してください。
            </p>

            {/* キーワードタグ */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '24px 0 32px' }}>
              {['布団屋台', '竹割り', '一ツ物神事', '播州最大級'].map(tag => (
                <span key={tag} style={{
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  backgroundColor: '#e6394912',
                  color: '#e67885',
                  border: '1px solid #e6394930',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 詳細リンクボタン */}
            <div style={{
              transition: 'all 0.7s ease 0.3s',
              opacity:   textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              <Link
                to="/festival"
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#e63946',
                  backgroundColor: '#e6394615',
                  border: '1px solid #e6394935',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#e6394925';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#e6394615';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                詳細はこちら
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
