"use client";

import { useEffect, useRef } from "react";
import { partners, banks } from "@/data/content";

const partnerTypeColors: Record<string, string> = {
  telecom: "#cc0000",
  government: "#c9a84c",
  technology: "#4a9eff",
  engineering: "#888",
  power: "#f5a623",
  finance: "#50e3c2",
  "oil-gas": "#888",
};

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".will-animate").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.06}s`;
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
    <section id="partners" ref={sectionRef} className="py-28 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#cc0000]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 will-animate">
            <div className="h-px w-8 bg-[#cc0000]" />
            <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">
              Trusted By
            </span>
            <div className="h-px w-8 bg-[#cc0000]" />
          </div>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR <span className="text-[#cc0000]">PARTNERS</span>
          </h2>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 mb-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="will-animate group bg-[#0d0d0d] hover:bg-[#141414] transition-all duration-300 p-6 flex flex-col gap-3"
            >
              {/* Color dot indicator */}
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: partnerTypeColors[partner.type] || "#555" }}
              />
              <h3 className="text-white text-sm font-semibold group-hover:text-[#cc0000] transition-colors leading-snug">
                {partner.name}
              </h3>
              <span
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: partnerTypeColors[partner.type] || "#555" }}
              >
                {partner.type.replace("-", " ")}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Banking partners */}
        <div>
          <div className="flex items-center gap-3 mb-12 will-animate">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">
              Banking Relationships
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {banks.map((bank) => (
              <div
                key={bank.name}
                className="will-animate group bg-[#0d0d0d] hover:bg-[#141414] transition-all duration-300 p-8 flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <h3
                    className="text-white font-black text-xl leading-tight mb-2 group-hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {bank.name.toUpperCase()}
                  </h3>
                  <p className="text-[#444] text-xs tracking-wide italic">{bank.tagline}</p>
                </div>
                <div className="h-0.5 w-0 group-hover:w-12 transition-all duration-300 bg-[#c9a84c] mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
