"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#cc0000] transform rotate-45 group-hover:rotate-[54deg] transition-transform duration-300" />
            <span className="relative text-white font-black text-sm tracking-widest z-10">R</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-white font-black tracking-[0.2em] text-lg leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              RTCC
            </span>
            <span className="text-[#888] text-[10px] tracking-[0.15em] uppercase leading-none">
              Concepts Ltd
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-[#888] hover:text-white text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+2348022200927"
            className="flex items-center gap-2 text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors"
          >
            <Phone size={14} />
            <span className="font-mono text-xs tracking-wider">+234 802 220 0927</span>
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-[#cc0000] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#ee0000] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#141414] border-t border-white/5`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#888] hover:text-white text-sm tracking-[0.15em] uppercase font-medium py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-[#cc0000] text-white text-sm font-semibold tracking-widest uppercase"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
