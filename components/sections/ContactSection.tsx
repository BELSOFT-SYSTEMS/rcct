"use client";

import { useEffect, useRef } from "react";
import { company } from "@/data/content";
import { MapPin, Phone, Building, Clock, ChevronRight } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-28 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cc0000]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cc0000]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 will-animate">
            <div className="h-px w-8 bg-[#cc0000]" />
            <span className="text-[#cc0000] text-xs tracking-[0.3em] uppercase font-semibold">
              Reach Us
            </span>
          </div>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.95] will-animate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GET IN <span className="text-[#cc0000]">TOUCH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-[#666] text-base leading-relaxed mb-10 will-animate">
              We&apos;re ready to discuss your project needs, provide technical advice, or explore partnership opportunities. Reach out to our Abuja office today.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <div className="will-animate border border-white/5 p-6 hover:border-[#cc0000]/30 transition-colors group">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#cc0000]/10 border border-[#cc0000]/20 flex-shrink-0">
                    <Building size={18} className="text-[#cc0000]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-1.5">Head Office</p>
                    <p className="text-white text-sm font-semibold">RTCC Concepts Ltd</p>
                    <p className="text-[#666] text-sm mt-1 leading-relaxed">{company.address}</p>
                  </div>
                </div>
              </div>

              <div className="will-animate border border-white/5 p-6 hover:border-[#cc0000]/30 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#cc0000]/10 border border-[#cc0000]/20 flex-shrink-0">
                    <Phone size={18} className="text-[#cc0000]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-3">Phone Numbers</p>
                    <div className="space-y-2">
                      {company.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="flex items-center gap-2 text-white hover:text-[#cc0000] transition-colors group"
                        >
                          <ChevronRight size={12} className="text-[#cc0000] group-hover:translate-x-1 transition-transform" />
                          <span className="font-mono text-sm tracking-wider">{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="will-animate border border-white/5 p-6 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex-shrink-0">
                    <MapPin size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-1.5">Registration</p>
                    <p className="text-white text-sm">RC Number: <span className="text-[#c9a84c] font-mono">{company.rc}</span></p>
                    <p className="text-[#666] text-sm mt-1">Incorporated: {company.incorporated} · CAC Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="will-animate border border-white/5 p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0">
                    <Clock size={18} className="text-[#888]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-[10px] tracking-[0.2em] uppercase mb-1.5">Operations</p>
                    <p className="text-white text-sm">Nigeria & Niger Republic</p>
                    <p className="text-[#666] text-sm mt-1">Since {company.established} · 17+ years delivering excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTA panel */}
          <div className="will-animate">
            <div className="bg-[#141414] border border-white/5 p-10 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Background text */}
              <div
                className="absolute -bottom-8 -right-4 text-[8rem] font-black opacity-5 select-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                RTCC
              </div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#cc0000] mb-8" />
                <h3
                  className="text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  READY TO START YOUR PROJECT?
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mb-8">
                  From civil engineering to telecom infrastructure, our experienced team is ready to bring your project to life — on time and within budget.
                </p>

                <div className="space-y-3">
                  {[
                    "Civil & Structural Engineering",
                    "Telecom Infrastructure",
                    "Estate & Property Development",
                    "Oil & Gas Services",
                    "Procurement & Logistics",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#cc0000] flex-shrink-0" />
                      <span className="text-[#888] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-10">
                <a
                  href={`tel:${company.phones[0]}`}
                  className="block w-full text-center bg-[#cc0000] hover:bg-[#ee0000] text-white font-bold text-sm tracking-[0.2em] uppercase py-4 transition-colors duration-200"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
