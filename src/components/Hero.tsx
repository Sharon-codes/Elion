"use client";

import React, { useState, useEffect } from "react";
import { MolecularCanvas } from "./MolecularCanvas";
import { TallyButton } from "./TallyButton";
import {
  Cpu,
  Activity,
  ChevronRight,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [trajectoryStep, setTrajectoryStep] = useState(482000);
  const [nsPerDay, setNsPerDay] = useState(128.4);
  const [vramUsage, setVramUsage] = useState(19.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrajectoryStep((prev) => (prev >= 1000000 ? 10000 : prev + 4500));
      setNsPerDay((prev) => +(128 + Math.sin(Date.now() / 3000) * 4.5).toFixed(1));
      setVramUsage((prev) => +(19.2 + Math.cos(Date.now() / 4000) * 0.4).toFixed(1));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 sm:pt-44 pb-20 overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#FCFCFC] to-[#F1F5F9]/50 dark:from-[#090D16] dark:via-[#0E1322] dark:to-[#090D16]">
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-elevated text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/80 dark:border-slate-700/80 mb-8 animate-fade-in hover:border-blue-400/60 transition-all cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-slate-700 dark:text-slate-200 font-semibold">Zero-Trust Local Execution</span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono text-[11px]">35 BIOPHYSICAL GATES</span>
        </div>

        {/* Massive Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 max-w-4xl font-sans">
          End-to-End AI Drug Discovery.{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent underline decoration-blue-200/50 dark:decoration-blue-700/50 decoration-wavy decoration-2">
            Running on Your Local GPU.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-normal mb-10 text-balance">
          A 35-test computational screening pipeline featuring native{" "}
          <span className="text-slate-900 dark:text-white font-semibold">D-Peptide inversion</span> and{" "}
          <span className="text-slate-900 dark:text-white font-semibold">
            OOD transcriptomic robustness
          </span>
          . Zero-trust local execution ensures your proprietary structures never leave your
          hardware. Academic pricing, zero cloud compute fees.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-14">
          <TallyButton
            formId="kdBxYM"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-xl shadow-blue-500/25"
            emojiText="🔬"
            emojiAnimation="wave"
          >
            Join Waitlist
          </TallyButton>

          <a
            href="#pipeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700 shadow-sm hover:shadow hover:border-slate-400 transition-all"
          >
            <span>Explore 35-Test Pipeline</span>
            <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </a>
        </div>

        {/* Live Local Compute Telemetry Card */}
        <div className="w-full max-w-3xl glass-panel-elevated rounded-2xl p-4 sm:p-6 text-left border border-slate-200/80 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
              <span>Target: PDB_7K43 (KRAS-G12D)</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Local GPU (RTX 4090)
              </span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                {nsPerDay} ns/day
              </span>
            </div>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-medium">
                GROMACS Explicit MD
              </span>
              <span className="text-sm font-mono font-bold text-slate-900 dark:text-white block mt-0.5">
                {trajectoryStep.toLocaleString()} / 1M
              </span>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">
                {((trajectoryStep / 1000000) * 100).toFixed(1)}% complete
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-medium">
                VRAM Allocation
              </span>
              <span className="text-sm font-mono font-bold text-slate-900 dark:text-white block mt-0.5">
                {vramUsage} / 24.0 GB
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium font-mono">
                Tensor Cores 97%
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-medium">
                Boltz-2 Free Energy (ΔG)
              </span>
              <span className="text-sm font-mono font-bold text-blue-700 dark:text-blue-400 block mt-0.5">
                -12.4 kcal/mol
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                FEP Confidence 99.4%
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-medium">
                Cloud Egress Cost
              </span>
              <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                $0.00 / run
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 line-through">
                AWS EC2 $14.8k/mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
