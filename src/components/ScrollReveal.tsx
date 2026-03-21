"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = "",
  style,
  animation = "reveal",
  delay = 0,
  threshold = 0.12,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";
  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={`${animation} ${delayClass} ${className}`} style={style}>
      {children}
    </Comp>
  );
}
