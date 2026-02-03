"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { label: "Blog", href: "#blog" },
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
          transition-transform duration-500 ease-in-out
          ${isAtTop || isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <Container>
          <nav className="h-[80px] flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center">
              {/* Desktop Logo */}
              <span className="hidden lg:block text-[39px] text-[#2f3e2f]">
                Lilac Template
              </span>

              {/* Mobile Burger */}
              <button
                onClick={() => setIsOpen(true)}
                className={`lg:hidden flex flex-col gap-[6px] transition-opacity duration-300 ${
                  isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="w-6 h-[2px] bg-[#2f3e2f]" />
                <span className="w-6 h-[2px] bg-[#2f3e2f]" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center">
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-12 text-[20px] font-light text-[#2f3e2f]">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover:opacity-70 transition duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Logo */}
              <span className="lg:hidden text-[28px] text-[#2f3e2f]">
                Lilac Template
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
          className="absolute top-8 left-8 text-[#2f3e2f] text-3xl"
        >
          ✕
        </button>

        <div
          className={`
            flex flex-col gap-12 text-[40px] text-[#2f3e2f]
            font-medium text-center
            transition-all duration-500 delay-100
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:opacity-70 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
