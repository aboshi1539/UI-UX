import { Link, useNavigate } from 'react-router-dom';
import soneRedImg from '../assets/sone-tenmangu-shrine-red.jpg';
import soneBlueImg from '../assets/sone-tenmangu-shrine-blue.jpg';
import soneWhiteImg from '../assets/sone-tenmangu-shrine-white.jpg';
import umeiMikosiImg from '../assets/umei_mikosi.jpeg';

/**
 * お神輿・布団屋台（ヤッサ）の種類を紹介する詳細ページ
 * ─ 祭りカラー（赤系 #e63946）を基調としたプレミアムデザイン
 * ─ 反り布団屋台、平布団屋台、神輿の違いや、彫刻・幕などの伝統工芸ディテールを解説
 */

/* ── ヤッサ・お神輿データ ── */
const yassaTypes = [
  {
    id: 'sone-red',
    title: '曽根天満宮の「赤布団屋台」',
    subtitle: '播州秋祭りの魂を宿す、伝統的な朱赤の布団',
    description:
      '屋台の最上部に鮮やかな朱色の布団を5枚重ねた、播州地方で最も標準的かつ格式高い布団屋台です。この「赤」は太陽や炎、命の躍動を意味し、魔除けの力があると信じられています。宮入りや激しい練り合わせの際、氏子たちの熱気と一体になって圧倒的なダイナミズムを生み出します。',
    highlights: [],
    color: '#e63946',
    colorLight: '#ff6b7a',
    image: soneRedImg,
  },
  {
    id: 'sone-blue',
    title: '曽根天満宮の「青布団屋台」',
    subtitle: '深みのある青色が個性を放つ、格式と気品',
    description:
      '赤い布団が主流の播州地域において、ひときわ目を引く美しい青（または緑）の布団を重ねた屋台です。空や海の安全、平穏を祈願する青色は、華麗な金糸の刺繍幕や装飾金具とのコントラストが極めて美しく、お祭りの群衆の中で高貴な存在感を漂わせます。',
    highlights: [],
    color: '#457b9d',
    colorLight: '#6aafd6',
    image: soneBlueImg,
  },
  {
    id: 'sone-white',
    title: '曽根天満宮の「白布団屋台」',
    subtitle: '純白の布団が象徴する、神聖さと新たな息吹',
    description:
      '極めて珍しく、清浄無垢をあらわす純白の布団を重ねた屋台です。新調された屋台の美しい白木（しらき）の質感と純白の布団が完璧に調和した姿は、お祭りの中でも一際神聖な光を放ちます。見る者を圧倒する厳かさと、凛とした美しさを持っています。',
    highlights: [],
    color: '#f8f9fa',
    colorLight: '#ffffff',
    image: soneWhiteImg,
  },
  {
    id: 'umei-mikoshi',
    title: '梅井地区の「電飾布団屋台」',
    subtitle: '夜の宮入りを彩る、幻想的な光の芸術と伝統の緑',
    description:
      '曽根天満宮秋祭りのハイライトの一つである「夜の宮入り」で本領を発揮する布団屋台です。梅井地区は格式高い「緑（若葉色）」の布団を重ねた屋台であり、夕闇の訪れとともに数百個の提灯や美しく輝く電飾に彩られます。夜空に浮かび上がる光の城のように神社の境内を激しく躍動する姿は、まさに幻想的な光の芸術です。',
    highlights: [],
    color: '#2d6a4f',
    colorLight: '#52b788',
    image: umeiMikosiImg,
  },
];


export default function YassaDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ paddingTop: '0' }}>

      {/* ═══════════════════════════════════════
          ページ最上部：カテゴリアイデンティティバー
          ═══════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a0608 0%, #2a0c0f 40%, #0a0a0f 100%)',
          borderBottom: '1px solid #e6394630',
          paddingTop: '56px',
          paddingBottom: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 背景装飾グロー */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #e6394618 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, #e6394610 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1060px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '10%',
            paddingRight: '10%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* 戻るボタン */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 group"
            style={{
              backgroundColor: '#e6394618',
              color: '#e63946',
              border: '1px solid #e6394640',
              marginTop: '20px',
              marginBottom: '40px',
              display: 'inline-flex',
              cursor: 'pointer',
            }}
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            一つ前に戻る
          </button>

          {/* カテゴリラベル＋タイトル */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#e63946',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '4px 12px',
                border: '1px solid #e6394650',
                borderRadius: '4px',
                backgroundColor: '#e6394610',
              }}
            >
              FESTIVAL DETAIL
            </span>
            {/* アクセントライン */}
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, #e63946, transparent)' }} />
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#f8f9fa',
              lineHeight: '1.2',
              textShadow: '0 0 40px #e6394630',
            }}
          >
            布団屋台（ヤッサ）と<span style={{ color: '#e63946' }}>神輿の種類</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#e67885',
            fontWeight: '300',
            marginTop: '8px',
            letterSpacing: '0.05em',
          }}>
            播州秋祭りを彩る、豪華絢爛な伝統の意匠
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          メインコンテンツ
          ═══════════════════════════════════════ */}
      <div
        style={{
          maxWidth: '1060px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '10%',
          paddingRight: '10%',
          paddingTop: '64px',
          paddingBottom: '64px',
        }}
      >

        {/* ── イントロダクション ── */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            width: '40px', height: '3px',
            background: 'linear-gradient(to right, #e63946, #ff6b7a)',
            borderRadius: '2px',
            marginBottom: '24px',
          }} />
          <p style={{
            color: '#adb5bd',
            fontSize: '1.1rem',
            lineHeight: '2.2',
            fontWeight: '300',
            maxWidth: '720px',
          }}>
            高砂の秋祭りを彩る主役、それが「布団屋台（ヤッサ）」と「神輿」です。
            特に、赤い布団を重ねた布団屋台は播州秋祭りの代名詞とも言われ、その重さは<span style={{ color: '#ffda7b' }}><u>２トン</u></span>を超えます。
            ここでは、高砂神社に集う布団屋台の造形美と、
            布団の色や装飾の特徴について神輿を抜粋してご紹介します。
          </p>
        </div>

        {/* ── 種類一覧 ── */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #e63946, #ff6b7a)',
              borderRadius: '2px',
            }} />
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: '700',
                color: '#f8f9fa',
                margin: 0,
              }}
            >
              <span style={{ color: '#e63946' }}>伝統の屋台</span>の紹介
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}>
            {yassaTypes.map((y, i) => (
              <div
                key={y.id}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: `1px solid ${y.color}30`,
                  background: `linear-gradient(160deg, ${y.color}08 0%, #0a0a0f 100%)`,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                }}
                className="flex flex-col md:flex-row items-stretch"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `${y.color}60`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${y.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${y.color}30`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 左側のカラーアクセント線（縦長） */}
                <div style={{
                  width: '4px',
                  background: `linear-gradient(to bottom, ${y.color}, ${y.colorLight})`,
                }} className="hidden md:block" />

                {/* 上端カラーバー（モバイル用） */}
                <div style={{
                  height: '3px',
                  background: `linear-gradient(to right, ${y.color}, ${y.colorLight})`,
                }} className="block md:hidden" />

                {/* 画像エリア（左） */}
                {y.image && (
                  <div 
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '260px',
                    }}
                    className="w-full md:w-2/5 flex-shrink-0"
                  >
                    <img
                      src={y.image}
                      alt={y.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        inset: 0,
                        transition: 'transform 0.6s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 10, 15, 0.7) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }} />
                  </div>
                )}

                {/* 説明文エリア（右） */}
                <div 
                  style={{ 
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  className="w-full md:w-3/5"
                >
                  {/* ナンバーバッジ */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      backgroundColor: `${y.color}18`,
                      border: `1px solid ${y.color}40`,
                      fontSize: '12px',
                      fontWeight: '700',
                      color: y.colorLight,
                      whiteSpace: 'nowrap',
                    }}>
                      {['曽根東ノ丁', '伊保西部', '北之町', '梅井'][i]}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h3 className="font-serif" style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#f8f9fa',
                    marginBottom: '4px',
                  }}>
                    {y.title}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: y.colorLight,
                    marginBottom: '16px',
                    letterSpacing: '0.05em',
                  }}>
                    {y.subtitle}
                  </p>

                  {/* 説明文 */}
                  <p style={{
                    color: '#adb5bd',
                    fontSize: '0.95rem',
                    lineHeight: '1.9',
                    fontWeight: '300',
                    marginBottom: '20px',
                  }}>
                    {y.description}
                  </p>

                  {/* ハイライトタグ */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {y.highlights.map(h => (
                      <span key={h} style={{
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: `${y.color}10`,
                        color: y.colorLight,
                        border: `1px solid ${y.color}25`,
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ═══════════════════════════════════════
            セクション区切り
            ═══════════════════════════════════════ */}
        <div
          style={{
            margin: '80px 0 60px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #ffffff15)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#555', textTransform: 'uppercase' }}>
            他のページを見る
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #ffffff15)' }} />
        </div>

        {/* ナビゲーションカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>

          {/* 曽根天満宮秋祭りカード */}
          <Link
            to="/festival"
            className="group"
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e6394930',
              background: 'linear-gradient(135deg, #1a0608 0%, #120407 100%)',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#e6394660';
              e.currentTarget.style.boxShadow = '0 12px 40px #e6394620';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e6394930';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #e63946, #ff6b7a)' }} />
            <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#e63946', fontWeight: '600' }}>FESTIVAL</span>
                <p style={{ fontSize: '22px', fontWeight: '700', color: '#f8f9fa', marginTop: '6px' }}>秋祭り</p>
                <p style={{ fontSize: '13px', color: '#e67885', marginTop: '4px' }}>曽根天満宮秋祭りの詳細</p>
              </div>
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e63946"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>

          {/* 歴史カード */}
          <Link
            to="/history"
            className="group"
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #457b9d30',
              background: 'linear-gradient(135deg, #0d1d2a 0%, #0a1520 100%)',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#457b9d60';
              e.currentTarget.style.boxShadow = '0 12px 40px #457b9d20';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#457b9d30';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #457b9d, #6aafd6)' }} />
            <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#457b9d', fontWeight: '600' }}>HISTORY</span>
                <p style={{ fontSize: '22px', fontWeight: '700', color: '#f8f9fa', marginTop: '6px' }}>歴史</p>
                <p style={{ fontSize: '13px', color: '#6c8fa3', marginTop: '4px' }}>千年の時を超える歩み</p>
              </div>
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#457b9d"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
