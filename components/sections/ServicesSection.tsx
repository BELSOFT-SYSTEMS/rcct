"use client";
import { useEffect, useRef } from "react";
import { services } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".rv").forEach(el => el.classList.add("show"));
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <section id="services" ref={ref} className="sp bg-[#0b0b0b] relative overflow-hidden">
      {/* Ghost number */}
      <div className="absolute right-[-3vw] top-1/2 -translate-y-1/2 text-[28vw] font-black
                      select-none pointer-events-none opacity-[0.012]"
           style={{fontFamily:"var(--font-display)"}}>08</div>

      <div className="cw">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <div>
            <div className="eyebrow rv">
              <span className="eyebrow-line bg-[#cc0000]"/>
              <span className="eyebrow-text text-[#cc0000]">What We Do</span>
            </div>
            <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92]"
                style={{fontFamily:"var(--font-display)"}}>
              OUR <span className="text-[#cc0000]">SERVICES</span>
            </h2>
          </div>
          <p className="rv d2 text-[#444] text-[0.95rem] max-w-[280px] leading-[1.9]">
            Eight core service areas delivering integrated engineering and commercial
            solutions across West Africa.
          </p>
        </div>

        {/* Grid — 2 cols on md, 4 on lg, generous padding inside each card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {services.map((s, i) => (
            <div key={s.id}
                 className="rv group relative bg-[#0b0b0b] p-10 hover:bg-[#121212]
                            transition-all duration-300 cursor-default overflow-hidden">
              {/* Number watermark */}
              <span className="absolute top-6 right-6 text-[3.5rem] font-black
                               opacity-[0.04] group-hover:opacity-[0.08] transition-opacity leading-none"
                    style={{fontFamily:"var(--font-display)"}}>
                {String(i+1).padStart(2,"0")}
              </span>

              {/* Top accent — animates in on hover */}
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 mb-10"
                   style={{backgroundColor:s.color}}/>

              <div className="text-[2rem] mb-7">{s.icon}</div>

              <h3 className="text-white font-bold text-[0.78rem] tracking-[0.08em] uppercase
                             mb-4 group-hover:text-[#cc0000] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#444] text-[0.85rem] leading-[1.9]">{s.description}</p>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={15} className="text-[#cc0000]"/>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
