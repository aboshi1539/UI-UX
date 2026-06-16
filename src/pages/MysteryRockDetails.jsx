import { Link, useNavigate } from 'react-router-dom';
import rockImg from '../assets/rock.jpg';
import ousikoImg from '../assets/ousiko.jpg';
import amanosakahokoImg from '../assets/amanosakahoko.jpg';
import siogamaImg from '../assets/siogama.jpeg';

/**
 * 日本三奇の詳細ページ
 * ─ 歴史カラー（青系 #457b9d）でデザイン統一
 * ─ 石の宝殿を中心に、日本三奇の3つの不思議を紹介
 */

/* ── 日本三奇データ ── */
const mysteries = [
  {
    id: 'ishi-no-hoden',
    title: '石の宝殿',
    subtitle: '兵庫県高砂市・生石神社',
    description:
      '高さ約5.7m、幅約6.5m、奥行約7m、重さ約500トンの巨大な石造物。水面に浮かぶように見えることから「浮石」とも呼ばれます。誰が、何のために、どうやって造ったのか——今もなお謎に包まれた圧巻の遺跡です。',
    highlights: [],
    color: '#457b9d',
    colorLight: '#6aafd6',
    isLocal: true,
    prefecture: '兵庫県',
    image: rockImg,
  },
  {
    id: 'ama-no-sakahoko',
    title: '天逆鉾',
    subtitle: '宮崎県高千穂峰・山頂',
    description:
      '霧島連山の高千穂峰（標高1,574m）の山頂に突き立つ青銅製の鉾。天孫降臨の神話にまつわる神器とされ、坂本龍馬が新婚旅行で引き抜いたという逸話でも知られています。',
    highlights: [],
    color: '#5a8f6e',
    colorLight: '#7cb893',
    prefecture: '宮崎県',
    image: amanosakahokoImg,
  },
  {
    id: 'shiogama',
    title: '塩竈',
    subtitle: '宮城県塩竈市・鹽竈神社',
    description:
      '鹽竈神社に伝わる四口の神竈（かまど）。古来より絶えることなく塩が焚かれ、その炎の色で吉凶を占う「藻塩焼神事」が毎年7月に行われます。製塩の神としての信仰が息づいています。',
    highlights: [],
    color: '#9b6d4c',
    colorLight: '#c49a6c',
    prefecture: '宮城県',
    image: siogamaImg,
  },
];

export default function MysteryRockDetails() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ paddingTop: '0' }}>

      {/* ═══════════════════════════════════════
          ページ最上部：カテゴリアイデンティティバー
          ═══════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(135deg, #060f18 0%, #0c1e2e 40%, #0a0a0f 100%)',
          borderBottom: '1px solid #457b9d30',
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
            background: 'radial-gradient(circle, #457b9d18 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, #457b9d10 0%, transparent 70%)',
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
              backgroundColor: '#457b9d18',
              color: '#457b9d',
              border: '1px solid #457b9d40',
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
                color: '#457b9d',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '4px 12px',
                border: '1px solid #457b9d50',
                borderRadius: '4px',
                backgroundColor: '#457b9d10',
              }}
            >
              MYSTERY
            </span>
            {/* アクセントライン */}
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, #457b9d, transparent)' }} />
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#f8f9fa',
              lineHeight: '1.2',
              textShadow: '0 0 40px #457b9d30',
            }}
          >
            日本<span style={{ color: '#457b9d' }}>三奇</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#6aafd6',
            fontWeight: '300',
            marginTop: '8px',
            letterSpacing: '0.05em',
          }}>
            古来より伝わる三つの不思議
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
            background: 'linear-gradient(to right, #457b9d, #6aafd6)',
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
            「日本三奇」とは、古来より日本に伝わる三つの不思議な遺構・遺物を指す総称です。
            その一つが高砂市にある<span style={{ color: '#6aafd6', fontWeight: '500' }}>石の宝殿</span>。
            宮崎県の<span style={{ color: '#7cb893', fontWeight: '500' }}>天逆鉾</span>、
            宮城県の<span style={{ color: '#c49a6c', fontWeight: '500' }}>塩竈</span>と並び、
            今なお人々を魅了し続ける日本有数のミステリースポットです。
          </p>
        </div>


        {/* ═══════════════════════════════════════
            日本三奇の比較カード
            ═══════════════════════════════════════ */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #457b9d, #6aafd6)',
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
              日本<span style={{ color: '#457b9d' }}>三奇</span>：概要
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}>
            {mysteries.map((m, i) => (
              <div
                key={m.id}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: `1px solid ${m.color}30`,
                  background: `linear-gradient(160deg, ${m.color}08 0%, #0a0a0f 100%)`,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                }}
                className="flex flex-col md:flex-row items-stretch"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `${m.color}60`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${m.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${m.color}30`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 左側のカラーアクセント線（縦長） */}
                <div style={{
                  width: '4px',
                  background: `linear-gradient(to bottom, ${m.color}, ${m.colorLight})`,
                }} className="hidden md:block" />

                {/* 上端カラーバー（モバイル用） */}
                <div style={{
                  height: '3px',
                  background: `linear-gradient(to right, ${m.color}, ${m.colorLight})`,
                }} className="block md:hidden" />

                {/* 画像エリア（左） */}
                {m.image && (
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '260px',
                    }}
                    className="w-full md:w-2/5 flex-shrink-0"
                  >
                    <img
                      src={m.image}
                      alt={m.title}
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
                      backgroundColor: `${m.color}18`,
                      border: `1px solid ${m.color}40`,
                      fontSize: '12px',
                      fontWeight: '700',
                      color: m.colorLight,
                      whiteSpace: 'nowrap',
                    }}>
                      {['日本三奇 其の壱', '日本三奇 其の弐', '日本三奇 其の参'][i]}
                    </span>
                    {m.prefecture && (
                      <span style={{
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: `${m.color}10`,
                        color: m.colorLight,
                        border: `1px solid ${m.color}25`,
                      }}>
                        {m.prefecture}
                      </span>
                    )}

                  </div>

                  {/* タイトル */}
                  <h3 className="font-serif" style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#f8f9fa',
                    marginBottom: '4px',
                  }}>
                    {m.title}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: m.colorLight,
                    marginBottom: '16px',
                    letterSpacing: '0.05em',
                  }}>
                    {m.subtitle}
                  </p>

                  {/* 説明文 */}
                  <p style={{
                    color: '#adb5bd',
                    fontSize: '0.95rem',
                    lineHeight: '1.9',
                    fontWeight: '300',
                    marginBottom: '20px',
                  }}>
                    {m.description}
                  </p>

                  {/* ハイライトタグ */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {m.highlights.map(h => (
                      <span key={h} style={{
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: `${m.color}10`,
                        color: m.colorLight,
                        border: `1px solid ${m.color}25`,
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
            アクセス・地図セクション
            ═══════════════════════════════════════ */}
        <div style={{ marginBottom: '80px' }}>
          {/* セクションヘッダー */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #457b9d, #6aafd6)',
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
              アクセス・<span style={{ color: '#457b9d' }}>地図</span>
            </h2>
          </div>

          {/* 地図カード */}
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #457b9d25',
              boxShadow: '0 20px 60px #457b9d10',
              background: 'linear-gradient(135deg, #060f18 0%, #0a0a0f 100%)',
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #457b9d, #6aafd6)' }} />

            {/* 地図情報バー */}
            <div
              style={{
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid #457b9d15',
              }}
            >
              {/* 場所アイコン */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#457b9d18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#457b9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#f8f9fa' }}>
                  生石神社（石の宝殿）
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888', marginTop: '2px' }}>
                  〒676-0823 兵庫県高砂市阿弥陀町生石171
                </p>
              </div>
            </div>

            {/* Google Map 埋め込み */}
            <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '38%', minHeight: '240px' }}>
              <iframe
                title="石の宝殿の地図"
                src="https://maps.google.com/maps?q=%E7%94%9F%E7%9F%B3%E7%A5%9E%E7%A4%BE%20%E7%9F%B3%E3%81%AE%E5%AE%9D%E6%AE%BF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  filter: 'invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(1.1)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* ダークオーバーレイで色味を調整 */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, #457b9d08, transparent 20%, transparent 80%, #060f1808)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* 下部 情報バー */}
            <div
              style={{
                padding: '16px 24px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'center',
                borderTop: '1px solid #457b9d15',
              }}
            >
              {/* 最寄駅 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6aafd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="16" rx="2" />
                  <path d="M4 11h16" />
                  <path d="M8 19l-2 3" />
                  <path d="M16 19l2 3" />
                  <circle cx="9" cy="15" r="1" fill="#6aafd6" />
                  <circle cx="15" cy="15" r="1" fill="#6aafd6" />
                </svg>
                <span style={{ fontSize: '13px', color: '#aaa' }}>
                  最寄駅：<span style={{ color: '#6aafd6', fontWeight: '500' }}>JR神戸線 宝殿駅</span> 徒歩約25分 / タクシー約5分
                </span>
              </div>
              {/* Googleマップリンク */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=生石神社+石の宝殿"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  color: '#457b9d',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid #457b9d40',
                  backgroundColor: '#457b9d10',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#457b9d25';
                  e.currentTarget.style.borderColor = '#457b9d80';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#457b9d10';
                  e.currentTarget.style.borderColor = '#457b9d40';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Google Mapで開く
              </a>
            </div>
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
              background: 'linear-gradient(135deg, #060f18 0%, #0a0a0f 100%)',
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
                <p style={{ fontSize: '13px', color: '#6a8fa0', marginTop: '4px' }}>石の宝殿と高砂の歴史</p>
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

          {/* 祭りカード */}
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
              e.currentTarget.style.borderColor = '#e6394960';
              e.currentTarget.style.boxShadow = '0 12px 40px #e6394920';
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
                <p style={{ fontSize: '22px', fontWeight: '700', color: '#f8f9fa', marginTop: '6px' }}>祭り</p>
                <p style={{ fontSize: '13px', color: '#aa6670', marginTop: '4px' }}>播州最大級の熱気</p>
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
        </div>
      </div>
    </div>
  );
}
