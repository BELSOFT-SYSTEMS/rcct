"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { company, stats } from "@/data/content";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const fn = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX-r.left)/r.width)*100}%`);
      el.style.setProperty("--my", `${((e.clientY-r.top)/r.height)*100}%`);
    };
    el.addEventListener("mousemove", fn);
    return () => el.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section ref={ref} id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{background:`
        radial-gradient(ellipse at var(--mx,25%) var(--my,50%),rgba(204,0,0,.09) 0%,transparent 50%),
        radial-gradient(ellipse at 85% 10%,rgba(201,168,76,.05) 0%,transparent 40%),
        #090909`}}>

      {/* Faint grid */}
      <div className="absolute inset-0 opacity-[0.022]" style={{
        backgroundImage:`linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),
                         linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
        backgroundSize:"110px 110px"}}/>

      {/* Left red sliver */}
      <div className="absolute left-0 inset-y-0 w-[3px]
                      bg-gradient-to-b from-transparent via-[#cc0000]/60 to-transparent"/>

      {/* Ghost wordmark */}
      <div className="absolute right-[-1vw] top-1/2 -translate-y-1/2
                      text-[20vw] font-black leading-none select-none pointer-events-none"
           style={{fontFamily:"var(--font-display)",color:"transparent",
                   WebkitTextStroke:"1px rgba(255,255,255,0.03)"}}>
        RTCC
      </div>

      {/* RC badge */}
      <div className="absolute top-[104px] right-0 cw flex justify-end">
        <div className="flex items-center gap-2 border border-white/[0.07] px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] animate-pulse block"/>
          <span className="text-[#333] font-mono text-[0.58rem] tracking-[0.3em]">{company.rc}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="cw relative z-10 w-full pt-36 pb-24">

        {/* Eyebrow */}
        <div className="eyebrow f1">
          <span className="eyebrow-line bg-[#cc0000]"/>
          <span className="eyebrow-text text-[#cc0000]">Est. {company.established} &nbsp;·&nbsp; Abuja, Nigeria</span>
        </div>

        {/* Headline + body — side by side on lg */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-20 lg:gap-28 items-end mb-24">
          <h1 className="f2 text-[clamp(4.5rem,11vw,9rem)] font-black leading-[0.87] tracking-tight"
              style={{fontFamily:"var(--font-display)"}}>
            <span className="block text-white">ENGINEERING</span>
            <span className="block text-[#cc0000]">EXCELLENCE</span>
            <span className="block text-white/[0.12]">IN NIGERIA</span>
          </h1>

          <div className="f3 flex flex-col gap-8 pb-1">
            <p className="text-[#4e4e4e] text-[1.05rem] leading-[1.95]">
              Civil engineering, telecommunications, oil&nbsp;&amp;&nbsp;gas and
              procurement — delivering quality across Nigeria and beyond since&nbsp;2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#services"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4
                            bg-[#cc0000] hover:bg-[#e00] text-white
                            text-[0.65rem] font-bold tracking-[0.22em] uppercase transition-colors group">
                Our Services
                <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform"/>
              </a>
              <a href="#experience"
                 className="inline-flex items-center justify-center px-8 py-4
                            border border-white/[0.09] text-[#4a4a4a] hover:border-white/20
                            hover:text-[#999] text-[0.65rem] font-bold tracking-[0.22em]
                            uppercase transition-all">
                Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Stats — open, no border box */}
        <div className="f4 rule mb-0"/>
        <div className="f5 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}
                 className={`py-10 ${i > 0 ? "pl-10 border-l border-white/[0.06]" : ""}`}>
              <p className="text-[clamp(2.8rem,5vw,4rem)] font-black text-white leading-none mb-3"
                 style={{fontFamily:"var(--font-display)"}}>{s.value}</p>
              <p className="text-[#323232] text-[0.62rem] tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2
                      flex flex-col items-center gap-2.5 opacity-[0.18] animate-bounce">
        <ArrowDown size={14} className="text-white"/>
        <span className="text-white text-[0.52rem] tracking-[0.45em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
