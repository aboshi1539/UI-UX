import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * スクロール位置に応じてアニメーションを発火するカスタムフック
 * IntersectionObserverを使用し、要素がビューポートに入ったらisVisibleをtrueにする
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * スクロール進捗（0〜1）を返すカスタムフック
 * Appleのようなスクロール連動アニメーションに使用
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const start = windowHeight;
    const end = -rect.height;
    const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [ref, progress];
}

/**
 * パララックス効果用のカスタムフック
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    setOffset((elementCenter - viewportCenter) * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [ref, offset];
}

/**
 * カウントアップアニメーション用フック
 */
export function useCountUp(end, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // イージング関数（easeOutExpo）
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
}
