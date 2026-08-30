"use client";

import React from "react";
import { TallyButton } from "./TallyButton";
import { ChevronRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-32 sm:pt-44 pb-20 sm:pb-28 overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] clinical-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[380px] lavender-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[380px] teal-glow rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 rounded-full glass-panel-elevated text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/80 dark:border-slate-700/80 mb-8 sm:mb-10 animate-fade-in hover:border-blue-400/60 transition-all cursor-default">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-slate-700 dark:text-slate-200 font-semibold tracking-wide">Zero-Trust Local Execution</span>
          <span className="text-slate-300 dark:text-slate-600 shrink-0">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold font-mono text-[11px] sm:text-xs shrink-0 tracking-wider">35 BIOPHYSICAL GATES</span>
        </div>

        {/* Expansive, Spread-Out 2-Line Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-8 w-full max-w-6xl font-sans">
          <span className="block mb-2 sm:mb-3">End-to-End AI Drug Discovery.</span>
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
            Running on Your Local GPU.
          </span>
        </h1>

        {/* Sub-headline with Clinical Stratification */}
        <p className="text-base sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed font-normal mb-10 sm:mb-14">
          A 35-test computational screening pipeline featuring native{" "}
          <span className="text-slate-900 dark:text-white font-semibold">D-Peptide inversion</span>,{" "}
          <span className="text-slate-900 dark:text-white font-semibold">local GPU dispatch</span>, and{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            automated clinical trial stratification
          </span>
          . Zero-trust local execution ensures your proprietary structures never leave your hardware.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <TallyButton
            formId="kdBxYM"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-xl shadow-blue-500/25 justify-center text-sm sm:text-base px-8 py-3.5 sm:py-4"
            emojiText="🔬"
            emojiAnimation="wave"
          >
            Join Waitlist
          </TallyButton>

          <a
            href="#pipeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700 shadow-sm hover:shadow hover:border-slate-400 transition-all"
          >
            <span>Explore 35-Test Pipeline</span>
            <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
