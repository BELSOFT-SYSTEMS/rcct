"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { company, stats } from "@/data/content";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at var(--mx, 20%) var(--my, 50%), rgba(204,0,0,0.12) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 15%, rgba(201,168,76,0.06) 0%, transparent 40%),
          #0a0a0a
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#cc0000] to-transparent opacity-60" />

      {/* Large background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
        }}
      >
        RTCC
      </div>

      {/* RC badge */}
      <div className="absolute top-28 right-6 lg:right-12">
        <div className="border border-white/10 px-3 py-1.5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#cc0000] animate-pulse" />
          <span className="text-[#444] text-[10px] font-mono tracking-widest">{company.rc}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8 animate-fadeInLeft">
          <div className="h-px w-12 bg-[#cc0000]" />
          <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">
            Est. {company.established} · Abuja, Nigeria
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-tight mb-6 will-animate animate-fadeInUp"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-white">ENGINEERING</span>
          <span className="block text-[#cc0000]">EXCELLENCE</span>
          <span className="block text-white/20">IN NIGERIA</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-[#666] text-base lg:text-lg max-w-xl leading-relaxed mb-12 will-animate animate-fadeInUp delay-200"
        >
          Civil engineering, telecommunications, oil & gas, procurement and
          construction — delivering quality across West Africa since 2008.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 will-animate animate-fadeInUp delay-300">
          <a
            href="#services"
            className="group flex items-center gap-3 px-8 py-4 bg-[#cc0000] text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#ee0000] transition-all duration-200"
          >
            Our Services
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experience"
            className="flex items-center gap-3 px-8 py-4 border border-white/15 text-[#888] text-sm tracking-[0.15em] uppercase font-bold hover:border-[#cc0000]/50 hover:text-white transition-all duration-200"
          >
            Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 will-animate animate-fadeInUp delay-400">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] px-6 py-6 hover:bg-[#141414] transition-colors"
            >
              <p
                className="text-4xl font-black text-white leading-none mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-[#555] text-xs tracking-[0.1em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={18} className="text-[#333]" />
        <span className="text-[#333] text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
