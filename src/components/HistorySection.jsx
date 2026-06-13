import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

/**
 * 歴史セクション（History）
 * ─ 青系アイデンティティ / 画像が右側（reversed）
 */
export default function HistorySection({ imageSrc }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.15 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.15 });
  const [parallaxRef, parallaxOffset] = useParallax(0.15);

  return (
    /* ── 外枠：エッジ to エッジ の背景 ── */
    <section
      id="history"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #060f18 50%, #0a0a0f 100%)',
        borderTop: '1px solid #457b9d15',
        borderBottom: '1px solid #457b9d15',
        padding: '80px 0 100px',
      }}
    >
      {/* ── 背景グロー（右上 / 左下） ── */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, #457b9d12 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, #457b9d08 0%, transparent 70%)',
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
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* カテゴリバッジ */}
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#457b9d',
            border: '1px solid #457b9d40',
            backgroundColor: '#457b9d10',
            borderRadius: '4px',
            padding: '5px 16px',
            marginBottom: '20px',
          }}>
            History — 弐
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
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            歴<span style={{ color: '#457b9d' }}>史</span>
          </h2>
        </div>

        {/* 画像 ＋ テキスト（reversed：テキスト左・画像右） */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          gap: '60px',
          alignItems: 'center',
        }}>

          {/* テキストエリア（左） */}
          <div
            ref={textRef}
            style={{
              flex: '1 1 360px',
              transition: 'all 0.8s ease',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(28px)',
            }}
          >
            {/* アクセントライン */}
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #457b9d, #6aafd6)',
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
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              石の宝殿<br />
              <span style={{ color: '#6aafd6', fontSize: '0.85em' }}>高砂のストーンヘンジ</span>
            </h3>

            <p style={{
              color: '#adb5bd',
              fontSize: '1.05rem',
              lineHeight: '2',
              fontWeight: '300',
              marginBottom: '16px',
              transition: 'all 0.7s ease 0.15s',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              生石神社（おうしこじんじゃ）のご神体として祀られている巨大な石。日本でも特に有名な“謎の巨石遺跡”として知られています。
              高さ約5.7m、横幅は約6.5m、奥行約7m、重さはなんと約500トンもある巨大な遺跡の迫力が伝わってきます。
            </p>

            {/* キーワードタグ */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '24px 0 32px' }}>
              {[].map(tag => (
                <span key={tag} style={{
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  backgroundColor: '#457b9d12',
                  color: '#6aafd6',
                  border: '1px solid #457b9d30',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 詳細リンクボタン */}
            <div style={{
              transition: 'all 0.7s ease 0.3s',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}>
              <Link
                to="/history"
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#457b9d',
                  backgroundColor: '#457b9d15',
                  border: '1px solid #457b9d35',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#457b9d25';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#457b9d15';
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

          {/* 画像エリア（右） */}
          <div
            ref={imageRef}
            style={{
              flex: '1 1 480px',
              transition: 'all 1.2s ease',
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
            }}
          >
            <div ref={parallaxRef} style={{ position: 'relative' }}>
              {/* メイン画像 */}
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #457b9d20, 0 30px 80px #457b9d18',
                position: 'relative',
              }}>
                <img
                  src={imageSrc}
                  alt="高砂の歴史"
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
                  background: 'linear-gradient(135deg, #457b9d20 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #060f1880, transparent)',
                  pointerEvents: 'none',
                }} />
                {/* バッジ */}
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  backgroundColor: '#457b9d',
                  color: '#fff',
                  fontSize: '12px', fontWeight: '700',
                  letterSpacing: '0.12em',
                  padding: '7px 16px',
                  borderRadius: '6px',
                }}>
                  日本三奇
                </div>
              </div>
              {/* 装飾ブロック */}
              <div style={{
                position: 'absolute', bottom: '-16px', left: '-16px',
                width: '80px', height: '80px',
                borderRadius: '16px',
                backgroundColor: '#457b9d',
                opacity: 0.12, filter: 'blur(4px)',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
