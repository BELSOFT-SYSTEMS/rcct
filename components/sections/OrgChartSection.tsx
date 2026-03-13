"use client";
import { useEffect, useRef } from "react";
import { orgChart } from "@/data/content";

export default function OrgChartSection() {
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
    <section ref={ref} className="sp bg-[#0b0b0b] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]
                      bg-[#c9a84c]/[0.04] blur-[130px] rounded-full pointer-events-none"/>
      <div className="cw">

        {/* Header */}
        <div className="mb-24">
          <div className="eyebrow rv">
            <span className="eyebrow-line bg-[#c9a84c]"/>
            <span className="eyebrow-text text-[#c9a84c]">Organizational Structure</span>
          </div>
          <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92]"
              style={{fontFamily:"var(--font-display)"}}>
            OUR <span className="text-[#cc0000]">TEAM</span>
          </h2>
          <p className="rv d2 text-[#444] text-[0.95rem] mt-6 max-w-xl leading-[1.9]">
            RTCC maintains a seasoned project management and technical team with
            deep expertise across engineering, finance, and operations.
          </p>
        </div>

        {/* Chart — centred, scrollable on mobile */}
        <div className="rv overflow-x-auto pb-4">
          <div className="flex flex-col items-center min-w-[700px]">

            {/* Director */}
            <div className="bg-[#cc0000] px-10 py-5 text-white font-bold text-[0.78rem]
                             tracking-[0.15em] uppercase text-center min-w-[260px]">
              {orgChart.top}
            </div>
            <div className="w-px h-10 bg-[#cc0000]/40"/>

            {/* BDM */}
            <div className="border border-[#cc0000]/30 bg-[#141414] px-10 py-5
                             text-white font-semibold text-[0.78rem] tracking-[0.1em]
                             uppercase text-center min-w-[300px]">
              {orgChart.mid}
            </div>
            <div className="w-px h-10 bg-white/[0.07]"/>

            {/* Horizontal connector */}
            <div className="relative w-full max-w-[1000px]">
              <div className="h-px bg-white/[0.07] absolute top-0 left-[calc(100%/12)] right-[calc(100%/12)]"/>
            </div>

            {/* Departments */}
            <div className="w-full max-w-[1000px] grid grid-cols-6 gap-px bg-white/[0.05] mt-0">
              {orgChart.departments.map(dept => (
                <div key={dept.name} className="bg-[#0b0b0b] flex flex-col">
                  <div className="bg-[#181818] px-4 py-4 text-center border-t-2 border-[#c9a84c]/40">
                    <p className="text-white text-[0.72rem] font-bold tracking-wide leading-snug">
                      {dept.name}
                    </p>
                  </div>
                  {dept.sub.length > 0 && (
                    <div className="flex-1 divide-y divide-white/[0.04]">
                      {dept.sub.map(s => (
                        <div key={s} className="px-4 py-3.5">
                          <p className="text-[#383838] text-[0.65rem] leading-snug tracking-wide">{s}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
