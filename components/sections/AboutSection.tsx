"use client";

import { useEffect, useRef } from "react";
import { company, policies, businessAreas } from "@/data/content";
import { Shield, Eye, Target } from "lucide-react";

const policyIcons = [Shield, Eye, Target];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".will-animate").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
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
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cc0000]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 will-animate">
            <div className="h-px w-8 bg-[#cc0000]" />
            <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">Who We Are</span>
          </div>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ABOUT <span className="text-[#cc0000]">RTCC</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Left */}
          <div>
            <p className="text-[#aaa] text-base lg:text-lg leading-relaxed mb-6 will-animate">
              {company.about}
            </p>
            <p className="text-[#666] text-base leading-relaxed will-animate">
              {company.aboutExtended}
            </p>

            {/* Business areas */}
            <div className="mt-10 will-animate">
              <p className="text-[#555] text-xs tracking-[0.2em] uppercase mb-4">Business Areas</p>
              <div className="flex flex-wrap gap-2">
                {businessAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 border border-[#cc0000]/30 text-[#cc0000] text-xs tracking-wider uppercase font-medium hover:bg-[#cc0000]/10 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Vision & Mission cards */}
          <div className="space-y-4">
            <div className="will-animate glow-red border border-white/5 p-8 bg-[#141414] hover:border-[#cc0000]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#cc0000]/10 border border-[#cc0000]/20 flex-shrink-0">
                  <Eye size={18} className="text-[#cc0000]" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-[0.1em] uppercase text-sm mb-3">
                    Our Vision
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">{company.vision}</p>
                </div>
              </div>
            </div>

            <div className="will-animate glow-red border border-white/5 p-8 bg-[#141414] hover:border-[#c9a84c]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex-shrink-0">
                  <Target size={18} className="text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-[0.1em] uppercase text-sm mb-3">
                    Our Mission
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">{company.mission}</p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="will-animate bg-[#cc0000] p-6">
              <p className="text-white font-bold text-sm tracking-[0.15em] italic text-center">
                &ldquo;{company.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="section-divider mb-20" />
        <div className="mb-10 will-animate">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">
              Our Commitments
            </span>
          </div>
          <h3
            className="text-3xl lg:text-4xl font-black text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            POLICIES & STANDARDS
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {policies.map((policy, i) => {
            const Icon = policyIcons[i];
            return (
              <div
                key={policy.title}
                className="will-animate card-hover bg-[#0a0a0a] p-8 group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#141414] border border-white/5 group-hover:border-[#cc0000]/30 transition-colors mb-4">
                    <Icon size={20} className="text-[#cc0000]" />
                  </div>
                  <h4 className="text-white font-bold text-sm tracking-[0.1em] uppercase mb-3">
                    {policy.title}
                  </h4>
                </div>
                <p className="text-[#555] text-sm leading-relaxed">{policy.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
