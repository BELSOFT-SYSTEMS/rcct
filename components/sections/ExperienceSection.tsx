"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/content";
import { MapPin, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

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

  const cat = projects[active];

  return (
    <section id="experience" ref={ref} className="sp relative overflow-hidden bg-[#090909]">
      <div className="cw">

        {/* Header */}
        <div className="mb-24">
          <div className="eyebrow rv">
            <span className="eyebrow-line bg-[#cc0000]"/>
            <span className="eyebrow-text text-[#cc0000]">Track Record</span>
          </div>
          <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92]"
              style={{fontFamily:"var(--font-display)"}}>
            OUR <span className="text-[#cc0000]">EXPERIENCE</span>
          </h2>
          <p className="rv d2 text-[#444] text-[0.95rem] mt-6 max-w-lg leading-[1.9]">
            Proven delivery across civil construction, water infrastructure,
            telecommunications, and manufacturing sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-16 lg:gap-20">

          {/* Sidebar tabs */}
          <div className="rv space-y-1.5">
            <p className="text-[#282828] text-[0.58rem] tracking-[0.3em] uppercase mb-6">Categories</p>
            {projects.map((c, i) => (
              <button key={c.category} onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-4 flex items-center justify-between
                             transition-all duration-200
                             ${active===i
                               ? "bg-[#cc0000] text-white"
                               : "bg-[#111] text-[#555] hover:text-[#aaa] hover:bg-[#181818]"}`}>
                <span className="text-[0.82rem] font-semibold">{c.category}</span>
                <div className="flex items-center gap-2.5">
                  <span className={`text-[0.68rem] font-mono px-1.5 py-0.5
                                    ${active===i ? "bg-white/20 text-white" : "bg-white/[0.04] text-[#383838]"}`}>
                    {c.items.length}
                  </span>
                  <ChevronRight size={13} className={`transition-transform ${active===i ? "rotate-90":""}`}/>
                </div>
              </button>
            ))}

            {/* Total */}
            <div className="mt-8 border border-white/[0.05] p-6">
              <p className="text-[#282828] text-[0.58rem] tracking-[0.25em] uppercase mb-3">Total Projects</p>
              <p className="text-[3.5rem] font-black text-[#cc0000] leading-none"
                 style={{fontFamily:"var(--font-display)"}}>
                {projects.reduce((s,c)=>s+c.items.length,0)}+
              </p>
            </div>
          </div>

          {/* Project list */}
          <div className="rv d1">
            <div className="pb-6 mb-8 border-b border-white/[0.05]">
              <h3 className="text-[1.8rem] font-black text-white"
                  style={{fontFamily:"var(--font-display)"}}>{cat.category.toUpperCase()}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05]">
              {cat.items.map((item, i) => (
                <div key={`${item.title}-${i}`}
                     className="bg-[#090909] p-7 group hover:bg-[#111] transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-white text-[0.88rem] font-semibold mb-3
                                     group-hover:text-[#cc0000] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={11} className="text-[#cc0000] flex-shrink-0"/>
                        <span className="text-[#444] text-[0.72rem] tracking-wide">{item.location}</span>
                      </div>
                    </div>
                    <span className="text-[#1c1c1c] text-[1.6rem] font-black flex-shrink-0
                                     group-hover:text-[#222] transition-colors"
                          style={{fontFamily:"var(--font-display)"}}>
                      {String(i+1).padStart(2,"0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
