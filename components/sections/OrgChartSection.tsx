"use client";

import { useEffect, useRef } from "react";
import { orgChart } from "@/data/content";

export default function OrgChartSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".will-animate").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.08}s`;
              el.classList.add("animate-fadeInUp");
              el.classList.remove("will-animate");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 will-animate">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">
              Organizational Structure
            </span>
          </div>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR <span className="text-[#cc0000]">TEAM</span>
          </h2>
          <p className="text-[#555] text-sm mt-4 max-w-lg will-animate">
            RTCC maintains a standard human resource and project management team with high levels of technical expertise drawn from diverse fields.
          </p>
        </div>

        {/* Org chart */}
        <div className="flex flex-col items-center gap-0 will-animate overflow-x-auto pb-4">
          {/* Director */}
          <div className="bg-[#cc0000] px-8 py-4 text-white font-bold text-sm tracking-[0.1em] uppercase text-center min-w-[220px]">
            {orgChart.top}
          </div>

          {/* Connector */}
          <div className="w-px h-8 bg-[#cc0000]/50" />

          {/* BDM */}
          <div className="border border-[#cc0000]/40 bg-[#141414] px-8 py-4 text-white font-semibold text-sm tracking-[0.08em] uppercase text-center min-w-[260px]">
            {orgChart.mid}
          </div>

          {/* Connector to departments */}
          <div className="w-px h-8 bg-white/10" />

          {/* Horizontal line across departments */}
          <div className="relative w-full max-w-5xl">
            <div className="h-px bg-white/10 absolute top-0 left-[8.33%] right-[8.33%]" />
          </div>

          {/* Departments */}
          <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 mt-0">
            {orgChart.departments.map((dept) => (
              <div key={dept.name} className="bg-[#0a0a0a] flex flex-col">
                <div className="bg-[#1e1e1e] px-3 py-3 text-center border-t-2 border-[#c9a84c]/50">
                  <p className="text-white text-xs font-bold tracking-wide leading-snug">{dept.name}</p>
                </div>
                {dept.sub.length > 0 && (
                  <div className="flex-1 divide-y divide-white/5">
                    {dept.sub.map((sub) => (
                      <div key={sub} className="px-3 py-2.5">
                        <p className="text-[#555] text-[10px] leading-snug tracking-wide">{sub}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
