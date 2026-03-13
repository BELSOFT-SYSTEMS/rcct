"use client";
import { useEffect, useRef } from "react";
import { partners, banks } from "@/data/content";

const typeColor: Record<string, string> = {
  telecom:"#cc0000", government:"#c9a84c", technology:"#4a9eff",
  engineering:"#777", power:"#f5a623", finance:"#50e3c2", "oil-gas":"#777",
};

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".rv").forEach(el => el.classList.add("show"));
      });
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <section id="partners" ref={ref} className="sp bg-[#090909] relative overflow-hidden">
      <div className="cw">

        {/* Header — centred */}
        <div className="text-center mb-24">
          <div className="eyebrow rv justify-center">
            <span className="eyebrow-line bg-[#cc0000]"/>
            <span className="eyebrow-text text-[#cc0000]">Trusted By</span>
            <span className="eyebrow-line bg-[#cc0000]"/>
          </div>
          <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92]"
              style={{fontFamily:"var(--font-display)"}}>
            OUR <span className="text-[#cc0000]">PARTNERS</span>
          </h2>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.05] mb-24">
          {partners.map(p => (
            <div key={p.name}
                 className="rv group bg-[#090909] hover:bg-[#111] transition-all
                             duration-300 p-9 flex flex-col gap-4">
              <div className="w-2 h-2 rounded-full flex-shrink-0"
                   style={{backgroundColor:typeColor[p.type]||"#444"}}/>
              <h3 className="text-white text-[0.88rem] font-semibold
                             group-hover:text-[#cc0000] transition-colors leading-snug">
                {p.name}
              </h3>
              <span className="text-[0.6rem] tracking-[0.18em] uppercase"
                    style={{color:typeColor[p.type]||"#444"}}>
                {p.type.replace("-"," ")}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="rule mb-24"/>

        {/* Banking partners */}
        <div>
          <div className="eyebrow rv mb-16">
            <span className="eyebrow-line bg-[#c9a84c]"/>
            <span className="eyebrow-text text-[#c9a84c]">Banking Relationships</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
            {banks.map(b => (
              <div key={b.name}
                   className="rv group bg-[#090909] hover:bg-[#111] transition-all
                               duration-300 p-10 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h3 className="text-white font-black text-[1.6rem] leading-tight mb-2
                                 group-hover:text-[#c9a84c] transition-colors"
                      style={{fontFamily:"var(--font-display)"}}>
                    {b.name.toUpperCase()}
                  </h3>
                  <p className="text-[#333] text-[0.72rem] tracking-wide italic">{b.tagline}</p>
                </div>
                <div className="h-[2px] w-0 group-hover:w-10 transition-all duration-400
                                bg-[#c9a84c] mt-6"/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
