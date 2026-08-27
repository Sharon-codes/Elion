"use client";

import React from "react";
import { MolecularCanvas } from "./MolecularCanvas";
import { TallyButton } from "./TallyButton";
import { ChevronRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center pt-28 sm:pt-44 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#FCFCFC] to-[#F1F5F9]/50 dark:from-[#090D16] dark:via-[#0E1322] dark:to-[#090D16]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[480px] clinical-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] lavender-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] teal-glow rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Interactive 3D Molecular Canvas */}
      <MolecularCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full glass-panel-elevated text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/80 dark:border-slate-700/80 mb-6 sm:mb-8 animate-fade-in hover:border-blue-400/60 transition-all cursor-default">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-slate-700 dark:text-slate-200 font-semibold truncate">Zero-Trust Local Execution</span>
          <span className="text-slate-300 dark:text-slate-600 shrink-0">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono text-[10px] sm:text-[11px] shrink-0">35 GATES</span>
        </div>

        {/* Massive Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4 sm:mb-6 max-w-4xl font-sans text-balance">
          End-to-End AI Drug Discovery.{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent underline decoration-blue-200/50 dark:decoration-blue-700/50 decoration-wavy decoration-2">
            Running on Your Local GPU.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-normal mb-8 sm:mb-10 text-balance">
          A 35-test computational screening pipeline featuring native{" "}
          <span className="text-slate-900 dark:text-white font-semibold">D-Peptide inversion</span> and{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            OOD transcriptomic robustness
          </span>
          . Zero-trust local execution ensures your proprietary structures never leave your
          hardware. Academic pricing, zero cloud compute fees.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <TallyButton
            formId="kdBxYM"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-xl shadow-blue-500/25 justify-center text-sm sm:text-base py-3 sm:py-3.5"
            emojiText="🔬"
            emojiAnimation="wave"
          >
            Join Waitlist
          </TallyButton>

          <a
            href="#pipeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700 shadow-sm hover:shadow hover:border-slate-400 transition-all"
          >
            <span>Explore 35-Test Pipeline</span>
            <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
