"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // scroll down - hide
        } else {
          setIsVisible(true); // scroll up - show
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true); // at top - always show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-transparent" : "bg-[var(--color-bg-main)]"}`}
    >
      <Container>
        <nav className="h-[67px] flex items-center justify-between">
          {/* Logo */}
          <span className="text-[38px] tracking-tight">
            Lilac Template
          </span>

          {/* Links */}
          <div className="flex items-center gap-10 text-[20px] font-light">
            <a href="#faq" className="hover:opacity-70 transition">
              FAQ
            </a>
            <a href="#contact" className="hover:opacity-70 transition">
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
