"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/content";
import { MapPin, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".will-animate").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.07}s`;
              el.classList.add("animate-fadeInUp");
              el.classList.remove("will-animate");
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeProjects = projects[activeCategory];

  return (
    <section id="experience" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Left accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-[#cc0000]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 will-animate">
            <div className="h-px w-8 bg-[#cc0000]" />
            <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">
              Track Record
            </span>
          </div>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR <span className="text-[#cc0000]">EXPERIENCE</span>
          </h2>
          <p className="text-[#555] text-sm mt-4 max-w-lg will-animate">
            Proven delivery across civil construction, water infrastructure, telecommunications, and manufacturing sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Category tabs */}
          <div className="will-animate">
            <p className="text-[#333] text-[10px] tracking-[0.25em] uppercase mb-4">Categories</p>
            <div className="space-y-1">
              {projects.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between group transition-all duration-200 ${
                    activeCategory === i
                      ? "bg-[#cc0000] text-white"
                      : "bg-[#141414] text-[#666] hover:text-[#aaa] hover:bg-[#1e1e1e]"
                  }`}
                >
                  <span className="text-sm font-semibold tracking-wide">{cat.category}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-1.5 py-0.5 ${
                        activeCategory === i
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-[#444]"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${activeCategory === i ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Total count */}
            <div className="mt-6 border border-white/5 p-4">
              <p className="text-[#333] text-[10px] tracking-[0.2em] uppercase mb-1">Total Projects</p>
              <p
                className="text-4xl font-black text-[#cc0000]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {projects.reduce((sum, cat) => sum + cat.items.length, 0)}+
              </p>
            </div>
          </div>

          {/* Projects list */}
          <div>
            <div className="mb-6 pb-4 border-b border-white/5">
              <h3
                className="text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {activeProjects.category.toUpperCase()}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {activeProjects.items.map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="bg-[#0a0a0a] p-5 group hover:bg-[#141414] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2 group-hover:text-[#cc0000] transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={11} className="text-[#cc0000] flex-shrink-0" />
                        <span className="text-[#555] text-xs tracking-wide">{item.location}</span>
                      </div>
                    </div>
                    <span
                      className="text-[#1e1e1e] text-2xl font-black group-hover:text-[#2a2a2a] transition-colors flex-shrink-0"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
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
