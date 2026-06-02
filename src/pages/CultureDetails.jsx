import { Link } from 'react-router-dom';
import nouImg from '../assets/nou.jpg';
import youkyokuImg from '../assets/youkyoku.jpg';

export default function CultureDetails() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ paddingTop: '0' }}>

      {/* ═══════════════════════════════════════
          ページ最上部：カテゴリアイデンティティバー
          ─ 文化カラー (6b4c8a) で独立感を表現
          ═══════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(135deg, #100a18 0%, #1c1028 40%, #0a0a0f 100%)',
          borderBottom: '1px solid #6b4c8a30',
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
            background: 'radial-gradient(circle, #6b4c8a18 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, #6b4c8a10 0%, transparent 70%)',
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 group"
            style={{
              backgroundColor: '#6b4c8a18',
              color: '#9b6dca',
              border: '1px solid #6b4c8a40',
              marginTop: '20px',
              marginBottom: '40px',
              display: 'inline-flex',
            }}
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>

          {/* カテゴリラベル＋タイトル */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#9b6dca',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '4px 12px',
                border: '1px solid #6b4c8a50',
                borderRadius: '4px',
                backgroundColor: '#6b4c8a10',
              }}
            >
              CULTURE
            </span>
            {/* アクセントライン */}
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, #6b4c8a, transparent)' }} />
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#f8f9fa',
              lineHeight: '1.2',
              textShadow: '0 0 40px #6b4c8a30',
            }}
          >
            暮らしに息づく<span style={{ color: '#9b6dca' }}>和の文化</span>
          </h1>
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

        {/* 写真と説明文のコンテナ */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

          {/* 写真エリア */}
          <div className="w-full md:w-1/2">
            {/* 1つ目の画像（nou.jpg） */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #6b4c8a25, 0 20px 60px #6b4c8a15',
                position: 'relative',
              }}
            >
              <img
                src={nouImg}
                alt="能舞台"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0a0a0f80, transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* 2つ目の画像（youkyoku.jpg） */}
            <div
              style={{
                marginTop: '32px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #6b4c8a25, 0 20px 60px #6b4c8a15',
                position: 'relative',
              }}
            >
              <img
                src={youkyokuImg}
                alt="謡曲の里"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0a0a0f80, transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* 説明文エリア */}
          <div className="w-full md:w-1/2">
            {/* セクション内装飾ライン */}
            <div
              style={{
                width: '40px',
                height: '3px',
                background: 'linear-gradient(to right, #6b4c8a, #9b6dca)',
                borderRadius: '2px',
                marginBottom: '24px',
              }}
            />

            <div className="detail-description">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                「謡曲の里」として広く知られる高砂では、能や狂言をはじめとする
                日本の伝統芸能が、一部の愛好家だけでなく市民の暮らしのなかに
                深く根付いています。
              </p>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                街の至る所から三味線や謡の稽古の声が聞こえ、茶道や華道、書道など、
                豊かな和の文化が世代を超えて脈々と受け継がれており、
                文化の香り高い洗練された日常を垣間見ることができます。
              </p>
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
            他のカテゴリを見る
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #ffffff15)' }} />
        </div>

        {/* ナビゲーションカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>

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
