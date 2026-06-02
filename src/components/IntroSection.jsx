import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

/**
 * イントロダクションセクション
 * 高砂市の概要をカウントアップ数字と共に紹介
 */
export default function IntroSection() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3 });
  const [descRef, descVisible] = useScrollAnimation({ threshold: 0.2 });

  // カウントアップの数値
  const years = useCountUp(1000, 2500, statsVisible);
  const shrines = useCountUp(50, 2000, statsVisible);
  const events = useCountUp(30, 1800, statsVisible);

  const stats = [
    { value: years, suffix: '年+', label: '歴史の深さ', color: 'from-history to-history-dark' },
    { value: shrines, suffix: '以上', label: '神社・寺院', color: 'from-culture to-culture-dark' },
    { value: events, suffix: '以上', label: '年間行事', color: 'from-festival to-festival-dark' },
  ];



  return (
    <section id="intro" className="relative py-32 md:py-44 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '12%',
          paddingRight: '12%',
        }}
        className="flex flex-col items-center w-full"
      >
        {/* セクションタイトル */}
        <div ref={titleRef} className="flex flex-col items-center text-center w-full mb-20">
          <p
            className={`text-accent text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            About Takasago
          </p>
          <h2
            className={`intro-center-text font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            知る、高砂。
          </h2>
        </div>

        {/* 説明テキスト */}
        <div
          ref={descRef}
          className={`intro-center-text w-full mb-32 transition-all duration-1000 delay-300 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block text-center w-full">
            <p className="text-text-secondary text-lg md:text-xl leading-[3] font-light">
              歴史と文化が息づく海運のまち、高砂。<br />
              秋には<span className="text-text-primary font-normal">曽根天満宮</span>がまちを熱気で包みます。<br />
              千年の物語が紡がれるこの地で、特別な体験を。
            </p>
          </div>
        </div>

        {/* 統計数字 */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative text-center p-10 rounded-3xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-700 ${statsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* グロー効果 */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 blur-xl`} />

              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-text-primary mb-3 font-sans tabular-nums">
                  {stat.value}
                  <span className="text-2xl md:text-3xl text-text-secondary font-light ml-1">{stat.suffix}</span>
                </div>
                <div className="text-text-muted text-sm tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
