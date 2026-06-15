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

            <div className="detail-description" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                「謡曲の里」として広く知られる高砂では、能や狂言をはじめとする日本の伝統芸能が、一部の愛好家だけでなく市民の暮らしのなかに深く根付いています。その歴史は古く、世阿弥が作したとされる能の代表的演目「高砂」の舞台となったことから、高砂は「謡曲発祥の地」とも呼ばれ、古くから格式高い和の芸能とともに歩んできました。
              </p>

              <p className="text-gray-300 text-lg leading-relaxed font-light">
                特に、演目の中に登場する「相生の松（あいおいのまつ）」は、根が一つで雌雄の幹が左右に分かれた非常に珍しい松であり、「夫婦睦まじく、ともに老いるまで」という長寿と夫婦円満の象徴とされています。この伝説から生まれた謡の一節「高砂や、この浦舟に帆を上げて…」は、古くから日本全国の結婚式などのお祝いの席で欠かせない祝言歌（しゅうげんか）として歌い継がれてきました。これにちなみ、高砂市は「ブライダル都市」としても広く知られています。
              </p>
            </div>
          </div>
        </div>

        {/* 謡曲の視聴セクション */}
        <div style={{ marginTop: '80px' }}>
          {/* セクションヘッダー */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{
              width: '40px', height: '3px',
              background: 'linear-gradient(to right, #6b4c8a, #9b6dca)',
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
              謡曲の<span style={{ color: '#9b6dca' }}>視聴</span>
            </h2>
          </div>

          {/* 動画プレイヤーカード（クリックでYouTubeへ遷移） */}
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #6b4c8a25',
              boxShadow: '0 20px 60px #6b4c8a10',
              background: 'linear-gradient(135deg, #100a18 0%, #0a0a0f 100%)',
            }}
          >
            {/* 上端カラーバー */}
            <div style={{ height: '3px', background: 'linear-gradient(to right, #6b4c8a, #9b6dca)' }} />

            {/* 動画情報バー */}
            <div
              style={{
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid #6b4c8a15',
              }}
            >
              {/* ビデオアイコン */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#6b4c8a18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b6dca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#f8f9fa' }}>
                  能の小謡を謡ってみよう ～高砂・待謡編～
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888', marginTop: '2px' }}>
                  （解説・謡い方のレッスン付きYouTube動画）
                </p>
              </div>
            </div>

            {/* YouTubeサムネイルリンク */}
            <a
              href="https://www.youtube.com/watch?v=kYv9G_lMh8o"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '0',
                paddingBottom: '56.25%',
                backgroundColor: '#000',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* サムネイル画像 */}
              <img
                src="https://img.youtube.com/vi/kYv9G_lMh8o/maxresdefault.jpg"
                alt="能の小謡を謡ってみよう ～高砂・待謡編～"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.75,
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.opacity = '0.85';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '0.75';
                }}
              />

              {/* 再生ボタンとグラデーションオーバーレイ */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(to top, rgba(16, 10, 24, 0.4) 0%, transparent 80%)',
                  pointerEvents: 'none',
                }}
              >
                {/* 再生アイコン */}
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(107, 76, 170, 0.9)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(107, 76, 170, 0.5)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    style={{ marginLeft: '4px' }}
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* ガイドテキスト */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                }}
              >
                クリックするとYouTubeで再生します（外部サイトに移動します）
              </div>
            </a>
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
