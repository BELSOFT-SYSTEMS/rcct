"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background number */}
      <div
        className="absolute -right-12 top-1/2 -translate-y-1/2 text-[30vw] font-black select-none pointer-events-none opacity-[0.015]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        08
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4 will-animate">
              <div className="h-px w-8 bg-[#cc0000]" />
              <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">
                What We Do
              </span>
            </div>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR <span className="text-[#cc0000]">SERVICES</span>
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed will-animate">
            Eight core service areas delivering integrated engineering and commercial solutions across West Africa.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="will-animate group relative bg-[#0d0d0d] p-8 hover:bg-[#141414] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Number */}
              <span
                className="absolute top-4 right-4 text-5xl font-black opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Top accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mb-8"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon */}
              <div className="text-3xl mb-5">{service.icon}</div>

              {/* Title */}
              <h3
                className="text-white font-bold text-sm tracking-[0.05em] uppercase mb-3 group-hover:text-[#cc0000] transition-colors"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#555] text-xs leading-relaxed group-hover:text-[#777] transition-colors">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-[#cc0000]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
