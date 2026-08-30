"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white/70 dark:bg-[#070B14]/80 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 py-12 text-slate-600 dark:text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-200/60 dark:border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-slate-950 dark:text-white font-sans hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
            >
              ELION
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Physics-grounded 35-test computational drug screening pipeline running directly on local GPUs.
            </p>
          </div>

          {/* Direct Email Contact Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:sharonmelhi365@gmail.com"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-blue-50/80 dark:bg-slate-900/90 border border-blue-200/80 dark:border-slate-700/80 hover:border-blue-400 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-semibold">
                  Questions &amp; Research Doubts
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1">
                  sharonmelhi365@gmail.com
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Clean Quick Links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#comparison" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Comparison
            </Link>
            <Link href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Architecture
            </Link>
            <Link href="#pipeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              35-Test Pipeline
            </Link>
            <Link href="#opensource" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Open Source
            </Link>
            <Link href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/waitlist" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Join Waitlist
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()} Elion Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
