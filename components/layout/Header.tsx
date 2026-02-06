"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          bg-[var(--color-bg-main)]
          transition-transform duration-500 ease-in-out
          ${isAtTop || isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <Container>
          <nav className="h-[80px] flex items-center justify-between">

            {/* Left Side */}
            <div className="flex items-center">

              {/* Desktop Logo */}
              <span className="hidden lg:block text-[32px]  font-medium tracking-tight text-[var(--color-primary)]">
                Dr. Maya Reynolds, PsyD
              </span>

              {/* Mobile Burger */}
              <button
                onClick={() => setIsOpen(true)}
                className={`lg:hidden flex flex-col gap-[6px] transition-opacity duration-300 ${
                  isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="w-6 h-[2px] bg-[var(--color-primary)]" />
                <span className="w-6 h-[2px] bg-[var(--color-primary)]" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center">

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-10 text-[18px] font-light text-[var(--color-secondary)]">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      hover:text-[var(--color-primary)]
                      transition duration-300
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Logo */}
              <span className="lg:hidden text-[20px] font-medium text-[var(--color-primary)]">
                Dr. Maya Reynolds
              </span>
            </div>
          </nav>
        </Container>
      </header>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-[var(--color-bg-main)]
          flex items-center justify-center
          transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            isOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 left-8 text-[var(--color-secondary)] text-3xl"
        >
          ✕
        </button>

        <div
          className={`
            flex flex-col gap-10 text-[32px]
            font-medium text-center text-[var(--color-secondary)]
            transition-all duration-500 delay-100
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[var(--color-primary)] transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
