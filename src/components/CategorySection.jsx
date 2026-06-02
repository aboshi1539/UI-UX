import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

/**
 * 各カテゴリの詳細セクション
 * Apple製品ページのようにスクロールで画像とテキストが段階的にアニメーション
 *
 * @param {string} id - セクションID
 * @param {string} category - カテゴリ名（英語）
 * @param {string} title - メインタイトル
 * @param {string} subtitle - サブタイトル
 * @param {string} description - 詳細説明
 * @param {string} imageSrc - 画像パス
 * @param {string} color - テーマカラークラス名
 * @param {string} gradientFrom - グラデーション開始色
 * @param {boolean} reversed - レイアウト反転
 * @param {Array} features - 特徴リスト
 * @param {string} linkUrl - リンク先URL (任意)
 * @param {string} linkText - リンクテキスト (任意)
 */
export default function CategorySection({
  id,
  category,
  title,
  subtitle,
  description,
  imageSrc,
  color,
  gradientFrom,
  reversed = false,
  features = [],
  linkUrl,
  linkText = "詳細はこちら",
}) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.15 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.15 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.2 });
  const [parallaxRef, parallaxOffset] = useParallax(0.15);

  return (
    <section id={id} className="relative py-28 md:py-40 overflow-hidden">
      {/* 背景グロー効果 */}
      <div
        className={`absolute top-1/3 ${
          reversed ? 'right-0 translate-x-1/3' : 'left-0 -translate-x-1/3'
        } w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none`}
        style={{ backgroundColor: `${gradientFrom}08` }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* セクションヘッダー（中央配置） */}
        <div ref={headerRef} className="text-center mb-20 md:mb-28">
          <span
            className={`inline-block px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase border mb-6 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90'
            }`}
            style={{
              color: gradientFrom,
              borderColor: `${gradientFrom}30`,
              backgroundColor: `${gradientFrom}08`,
            }}
          >
            {category}
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary transition-all duration-1000 delay-200 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {title}
          </h2>
        </div>

        {/* メインコンテンツ（画像 + テキスト） */}
        <div
          className={`flex flex-col ${
            reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } gap-12 lg:gap-20 items-center`}
        >
          {/* 画像 */}
          <div
            ref={imageRef}
            className={`w-full lg:w-[55%] transition-all duration-[1.2s] ease-out ${
              imageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.96]'
            }`}
          >
            <div ref={parallaxRef} className="relative group">
              {/* 画像カード */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
                  loading="lazy"
                />
                {/* 画像上のグラデーションオーバーレイ */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}40 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-transparent" />
              </div>

              {/* 浮遊するアクセント装飾 */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl opacity-20 blur-sm"
                style={{ backgroundColor: gradientFrom }}
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-10 blur-sm"
                style={{ backgroundColor: gradientFrom }}
              />
            </div>
          </div>

          {/* テキストコンテンツ */}
          <div ref={textRef} className="w-full lg:w-[45%]">
            <h3
              className={`font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary leading-snug mb-6 transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {subtitle}
            </h3>
            <p
              className={`text-text-secondary text-base md:text-lg leading-[2] font-light mb-10 transition-all duration-700 delay-200 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {description}
            </p>

            {/* 特徴リスト */}
            <div ref={featuresRef} className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-500 ${
                    featuresVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reversed ? '-translate-x-8' : 'translate-x-8'}`
                  }`}
                  style={{ transitionDelay: `${i * 120 + 100}ms` }}
                >
                  {/* アイコン */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${gradientFrom}15` }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {linkUrl && (
              <div
                className={`mt-10 transition-all duration-700 delay-300 ${
                  textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Link
                  to={linkUrl}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group"
                  style={{
                    backgroundColor: `${gradientFrom}15`,
                    color: gradientFrom,
                    border: `1px solid ${gradientFrom}30`,
                  }}
                >
                  {linkText}
                  <svg className="w-8 h-8 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
