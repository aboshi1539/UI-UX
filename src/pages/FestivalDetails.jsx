import { Link } from 'react-router-dom';
import festivalImg from '../assets/mikosi.jpeg';
import umeiMikosiImg from '../assets/yorunomikosi.jpeg';

export default function FestivalDetails() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]" style={{ paddingTop: '0' }}>

      {/* ═══════════════════════════════════════
          ページ最上部：カテゴリアイデンティティバー
          ─ 祭りカラー (e63946) で独立感を表現
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 group"
            style={{
              backgroundColor: '#e6394618',
              color: '#e63946',
              border: '1px solid #e6394640',
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
                color: '#e63946',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '4px 12px',
                border: '1px solid #e6394650',
                borderRadius: '4px',
                backgroundColor: '#e6394610',
              }}
            >
              FESTIVAL
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
            曽根天満宮<span style={{ color: '#e63946' }}>秋祭り</span>
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
            {/* メイン画像（mikosi.jpeg） */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #e6394625, 0 20px 60px #e6394615',
                position: 'relative',
              }}
            >
              <img
                src={festivalImg}
                alt="曽根天満宮秋祭り"
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

            {/* 2つ目の画像（yorunomikosi.jpeg） */}
            <div
              style={{
                marginTop: '32px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px #e6394625, 0 20px 60px #e6394615',
                position: 'relative',
              }}
            >
              <img
                src={umeiMikosiImg}
                alt="曽根天満宮秋祭り夜の部"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                }}
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
                background: 'linear-gradient(to right, #e63946, #ff6b7a)',
                borderRadius: '2px',
                marginBottom: '24px',
              }}
            />

            <div className="detail-description">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                毎年<span style={{ color: '#ffda7b', fontWeight: '600' }}>10月13日</span>と
                <span style={{ color: '#ffda7b', fontWeight: '600' }}>10月14日</span>の二日間にわたって開催される曽根天満宮秋祭りは、
                11台の巨大な「布団屋台」が激しく練り合わされる圧巻です。
                約2トンを超える屋台が躍動する様は、播州最大級の熱気を誇ります。
              </p>

              <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px', marginTop: '8px' }}>
                ※雨天時は10月15日に延期開催されます。
              </p>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                色鮮やかな布団屋台だけでなく、青竹を地面に叩きつけて割る「竹割り」や、
                馬に乗った稚児が宮入りする「一ツ物神事」など、
                古くから伝わる伝統的な神事も数多く行われ、歴史の深さを感じさせます。
              </p>
            </div>

            {/* 布団屋台・神輿リンク */}
            <div style={{ marginTop: '36px' }}>
              <Link
                to="/yassa"
                className="group"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: '1px solid #e6394630',
                  background: 'linear-gradient(135deg, #130608 0%, #220b0e 60%, #0a0a0f 100%)',
                  textDecoration: 'none',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#e6394660';
                  e.currentTarget.style.boxShadow = '0 12px 40px #e6394618';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e6394630';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <span style={{
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: '#e67885',
                    fontWeight: '600',
                  }}>
                    FESTIVAL
                  </span>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#f8f9fa',
                    margin: '4px 0 0',
                  }}>
                    布団屋台・神輿の種類<span style={{ color: '#e67885', fontSize: '0.85em', marginLeft: '6px', fontWeight: '400' }}>を見る →</span>
                  </p>
                </div>
                <svg
                  className="group-hover:translate-x-1 transition-transform"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#e63946"
                  style={{ flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            アクセス・地図セクション
            ═══════════════════════════════════════ */}
        <div style={{ marginTop: '80px' }}>
          {/* セクションヘッダー */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div
              style={{
                width: '40px',
                height: '3px',
                background: 'linear-gradient(to right, #e63946, #ff6b7a)',
                borderRadius: '2px',
              }}
            />
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: '700',
                color: '#f8f9fa',
                margin: 0,
              }}
            >
              アクセス・<span style={{ color: '#e63946' }}>地図</span>
            </h2>
          </div>

          {/* 地図カード */}
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #e6394625',
              boxShadow: '0 20px 60px #e6394610',
              background: 'linear-gradient(135deg, #1a0608 0%, #12060a 100%)',
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #e63946, #ff6b7a)' }} />

            {/* 地図情報バー */}
            <div
              style={{
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid #e6394615',
              }}
            >
              {/* 場所アイコン */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#e6394618',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#f8f9fa' }}>
                  曽根天満宮
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888', marginTop: '2px' }}>
                  〒676-0082 兵庫県高砂市曽根町2286-1
                </p>
              </div>
            </div>

            {/* Google Map 埋め込み */}
            <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '38%', minHeight: '240px' }}>
              <iframe
                title="曽根天満宮の地図"
                src="https://maps.google.com/maps?q=%E6%9B%BD%E6%A0%B9%E5%A4%A9%E6%BA%80%E5%AE%AE&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                  background: 'linear-gradient(to bottom, #e6394608, transparent 20%, transparent 80%, #1a060808)',
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
                borderTop: '1px solid #e6394615',
              }}
            >
              {/* 最寄駅 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e67885" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="16" rx="2" />
                  <path d="M4 11h16" />
                  <path d="M8 19l-2 3" />
                  <path d="M16 19l2 3" />
                  <circle cx="9" cy="15" r="1" fill="#e67885" />
                  <circle cx="15" cy="15" r="1" fill="#e67885" />
                </svg>
                <span style={{ fontSize: '13px', color: '#aaa' }}>
                  最寄駅：<span style={{ color: '#e67885', fontWeight: '500' }}>山陽電鉄 曽根駅</span> 徒歩約5分
                </span>
              </div>
              {/* Googleマップリンク */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=曽根天満宮"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  color: '#e63946',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid #e6394640',
                  backgroundColor: '#e6394610',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#e6394625';
                  e.currentTarget.style.borderColor = '#e6394680';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#e6394610';
                  e.currentTarget.style.borderColor = '#e6394640';
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
            他のカテゴリを見る
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

          {/* 文化カード */}
          <Link
            to="/culture"
            className="group"
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #6b4c8a30',
              background: 'linear-gradient(135deg, #170e22 0%, #100c1a 100%)',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#6b4c8a60';
              e.currentTarget.style.boxShadow = '0 12px 40px #6b4c8a20';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#6b4c8a30';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #6b4c8a, #9b6dca)' }} />
            <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#9b6dca', fontWeight: '600' }}>CULTURE</span>
                <p style={{ fontSize: '22px', fontWeight: '700', color: '#f8f9fa', marginTop: '6px' }}>文化</p>
                <p style={{ fontSize: '13px', color: '#8a6faa', marginTop: '4px' }}>暮らしに息づく和の心</p>
              </div>
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9b6dca"
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
