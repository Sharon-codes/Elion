"use client";

import React from "react";
import { TallyButton } from "./TallyButton";
import { Sparkles, Cpu, ShieldCheck, ArrowRight, Zap, CheckCircle2, Lock } from "lucide-react";

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-[#FCFCFC] to-[#F1F5F9] dark:from-[#090D16] dark:to-[#050811] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] clinical-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 glass-panel-elevated border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden text-center bg-gradient-to-b from-white via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20">
          {/* Top accent shine */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

          {/* Sub-badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THE CLOSED RESEARCH ALPHA</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans max-w-2xl mx-auto mb-5">
            Ready to Run 35-Gate MD on Your Local GPU?
          </h2>

          {/* Copy */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Eliminate cloud compute bills, protect proprietary molecular structures with zero data
            retention, and validate native D-peptides with atomic precision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
            <TallyButton
              formId="kdBxYM"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-xl shadow-blue-600/25"
              emojiText="🔬"
              emojiAnimation="wave"
            >
              Join Waitlist
            </TallyButton>

            <a
              href="#comparison"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 shadow-sm hover:shadow transition-all"
            >
              <span>Compare Capabilities</span>
              <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </a>
          </div>

          {/* 3 Pillar Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/70 dark:border-slate-800 text-left">
            <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">Zero Data Retention</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Target structures stay 100% local on your drive.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">Zero Cloud GPU Markups</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Dispatch GROMACS directly to lab RTX 4090/A100.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-xs block">35-Gate Biophysical Stack</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">From cryptic pockets to retrosynthesis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
