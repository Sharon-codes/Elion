"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TallyButton } from "./TallyButton";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme check
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Comparison", href: "#comparison" },
    { name: "Architecture", href: "#architecture" },
    { name: "35-Test Pipeline", href: "#pipeline" },
    { name: "Open Source", href: "#opensource" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800 shadow-sm py-4"
          : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200/30 dark:border-slate-800/40 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200"
          >
            <span className="text-2xl font-black tracking-tight text-slate-950 dark:text-white font-sans hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              ELION
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <TallyButton
              formId="kdBxYM"
              variant="primary"
              size="md"
              emojiText="🔬"
              emojiAnimation="wave"
            >
              Join Waitlist
            </TallyButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <TallyButton
              formId="kdBxYM"
              variant="primary"
              size="sm"
              showIcon={false}
            >
              Join Waitlist
            </TallyButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200/70 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <TallyButton
              formId="kdBxYM"
              variant="primary"
              size="md"
              className="w-full"
            >
              Join Waitlist
            </TallyButton>
          </div>
        </div>
      )}
    </header>
  );
};
