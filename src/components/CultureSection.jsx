import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

/**
 * 文化セクション（Culture）
 * ─ 紫系アイデンティティ / 画像が左側
 */
export default function CultureSection({ imageSrc }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible]   = useScrollAnimation({ threshold: 0.15 });
  const [textRef, textVisible]     = useScrollAnimation({ threshold: 0.15 });
  const [parallaxRef, parallaxOffset] = useParallax(0.15);

  return (
    /* ── 外枠：エッジ to エッジ の背景 ── */
    <section
      id="culture"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #100a18 50%, #0a0a0f 100%)',
        borderTop:    '1px solid #6b4c8a15',
        borderBottom: '1px solid #6b4c8a15',
        padding: '80px 0 100px',
      }}
    >
      {/* ── 背景グロー（左上 / 右下） ── */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, #6b4c8a12 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, #6b4c8a08 0%, transparent 70%)',
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
            opacity:   headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* カテゴリバッジ */}
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#9b6dca',
            border: '1px solid #6b4c8a40',
            backgroundColor: '#6b4c8a10',
            borderRadius: '4px',
            padding: '5px 16px',
            marginBottom: '20px',
          }}>
            Culture — 参
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
            文<span style={{ color: '#9b6dca' }}>化</span>
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
                boxShadow: '0 0 0 1px #6b4c8a20, 0 30px 80px #6b4c8a18',
                position: 'relative',
              }}>
                <img
                  src={imageSrc}
                  alt="高砂の文化"
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
                  background: 'linear-gradient(135deg, #6b4c8a20 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #100a1880, transparent)',
                  pointerEvents: 'none',
                }} />
                {/* バッジ */}
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  backgroundColor: '#6b4c8a',
                  color: '#fff',
                  fontSize: '12px', fontWeight: '700',
                  letterSpacing: '0.12em',
                  padding: '7px 16px',
                  borderRadius: '6px',
                }}>
                  謡曲の里
                </div>
              </div>
              {/* 装飾ブロック */}
              <div style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                width: '80px', height: '80px',
                borderRadius: '16px',
                backgroundColor: '#6b4c8a',
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
              background: 'linear-gradient(to right, #6b4c8a, #9b6dca)',
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
              暮らしに息づく<br />
              <span style={{ color: '#b08ada', fontSize: '0.85em' }}>豊かな伝統芸能</span>
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
              「謡曲の里」として知られる高砂。能や狂言をはじめとする日本の伝統芸能が市民の暮らしに根付き、
              茶道や書道など、豊かな和の文化が今も脈々と受け継がれています。
            </p>

            {/* キーワードタグ */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '24px 0 32px' }}>
              {[].map(tag => (
                <span key={tag} style={{
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  backgroundColor: '#6b4c8a12',
                  color: '#b08ada',
                  border: '1px solid #6b4c8a30',
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
                to="/culture"
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#9b6dca',
                  backgroundColor: '#6b4c8a15',
                  border: '1px solid #6b4c8a35',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#6b4c8a25';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#6b4c8a15';
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
