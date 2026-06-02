import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * カテゴリ間のセパレーター
 * Apple製品ページのような大きなテキスト表示
 */
export default function SectionDivider({ text, color }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* 横線 */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8">
          <div
            className={`flex-1 h-[1px] transition-all duration-[1.5s] ease-out origin-left ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{ backgroundColor: `${color}20` }}
          />
          <span
            className={`font-serif text-lg md:text-xl tracking-[0.2em] transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ color }}
          >
            {text}
          </span>
          <div
            className={`flex-1 h-[1px] transition-all duration-[1.5s] ease-out origin-right ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{ backgroundColor: `${color}20` }}
          />
        </div>
      </div>
    </div>
  );
}
