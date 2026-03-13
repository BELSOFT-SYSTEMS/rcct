"use client";
import { useEffect, useRef } from "react";
import { company, policies, businessAreas } from "@/data/content";
import { Shield, Eye, Target } from "lucide-react";

const policyIcons = [Shield, Eye, Target];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
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
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="about" ref={ref} className="sp relative overflow-hidden bg-[#090909]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px]
                      bg-[#cc0000]/[0.04] blur-[120px] rounded-full pointer-events-none"/>

      <div className="cw">

        {/* ── Header ── */}
        <div className="mb-24">
          <div className="eyebrow rv">
            <span className="eyebrow-line bg-[#cc0000]"/>
            <span className="eyebrow-text text-[#cc0000]">Who We Are</span>
          </div>
          <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92] tracking-tight"
              style={{fontFamily:"var(--font-display)"}}>
            ABOUT <span className="text-[#cc0000]">RTCC</span>
          </h2>
        </div>

        {/* ── Two-column body ── */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-28">

          {/* Left — text */}
          <div className="space-y-8">
            <p className="rv text-[#888] text-lg leading-[2]">{company.about}</p>
            <p className="rv d1 text-[#555] text-base leading-[2]">{company.aboutExtended}</p>

            <div className="rv d2 pt-4">
              <p className="text-[#333] text-[0.6rem] tracking-[0.3em] uppercase mb-5">Business Areas</p>
              <div className="flex flex-wrap gap-2.5">
                {businessAreas.map(area => (
                  <span key={area}
                    className="px-4 py-2 border border-[#cc0000]/25 text-[#cc0000]
                               text-[0.6rem] tracking-[0.18em] uppercase font-medium
                               hover:bg-[#cc0000]/08 transition-colors cursor-default">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Vision / Mission / Tagline */}
          <div className="space-y-5">
            <div className="rv card p-10">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 flex items-center justify-center
                                bg-[#cc0000]/10 border border-[#cc0000]/20 flex-shrink-0">
                  <Eye size={18} className="text-[#cc0000]"/>
                </div>
                <div>
                  <p className="text-[#cc0000] text-[0.6rem] tracking-[0.3em] uppercase font-bold mb-4">Vision</p>
                  <p className="text-[#666] text-[0.95rem] leading-[1.95]">{company.vision}</p>
                </div>
              </div>
            </div>

            <div className="rv d1 card p-10">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 flex items-center justify-center
                                bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex-shrink-0">
                  <Target size={18} className="text-[#c9a84c]"/>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-[0.6rem] tracking-[0.3em] uppercase font-bold mb-4">Mission</p>
                  <p className="text-[#666] text-[0.95rem] leading-[1.95]">{company.mission}</p>
                </div>
              </div>
            </div>

            <div className="rv d2 bg-[#cc0000] px-10 py-8">
              <p className="text-white/90 text-[0.85rem] font-semibold tracking-[0.12em] italic leading-[1.8] text-center">
                &ldquo;{company.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── Policies ── */}
        <div className="rule mb-24"/>

        <div className="mb-16">
          <div className="eyebrow rv">
            <span className="eyebrow-line bg-[#c9a84c]"/>
            <span className="eyebrow-text text-[#c9a84c]">Our Commitments</span>
          </div>
          <h3 className="rv d1 text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white leading-[0.92]"
              style={{fontFamily:"var(--font-display)"}}>
            POLICIES &amp; STANDARDS
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.05]">
          {policies.map((p, i) => {
            const Icon = policyIcons[i];
            return (
              <div key={p.title} className="rv bg-[#090909] p-12 group hover:bg-[#101010] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center
                                bg-[#101010] border border-white/[0.06]
                                group-hover:border-[#cc0000]/30 transition-colors mb-8">
                  <Icon size={20} className="text-[#cc0000]"/>
                </div>
                <h4 className="text-white font-bold text-[0.8rem] tracking-[0.12em] uppercase mb-5">
                  {p.title}
                </h4>
                <p className="text-[#464646] text-[0.9rem] leading-[1.95]">{p.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
