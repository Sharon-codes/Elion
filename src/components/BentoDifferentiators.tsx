"use client";

import React, { useState } from "react";
import {
  Cpu,
  Activity,
  Sparkles,
  Zap,
  CheckCircle2,
  Atom,
  ExternalLink,
  Users,
  Filter,
  Dna,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

export const BentoDifferentiators: React.FC = () => {
  const [selectedGpu, setSelectedGpu] = useState<"4090" | "A100" | "H100" | "M3Max">("4090");
  const [perturbationLevel, setPerturbationLevel] = useState(25);
  const [chirality, setChirality] = useState<"L-Peptide" | "D-Peptide">("D-Peptide");
  const [selectedCohort, setSelectedCohort] = useState<"CRC" | "NSCLC" | "PDAC">("CRC");

  const gpuProfiles = {
    "4090": {
      name: "GeForce RTX 4090 (24GB)",
      speed: "142.6 ns/day",
      bandwidth: "1,008 GB/s",
      costPerTrajectory: "$0.00",
      cloudEquivalent: "$420 / run",
    },
    A100: {
      name: "NVIDIA A100 (80GB SXM4)",
      speed: "218.4 ns/day",
      bandwidth: "2,039 GB/s",
      costPerTrajectory: "$0.00",
      cloudEquivalent: "$890 / run",
    },
    H100: {
      name: "NVIDIA H100 (80GB NVLink)",
      speed: "410.2 ns/day",
      bandwidth: "3,350 GB/s",
      costPerTrajectory: "$0.00",
      cloudEquivalent: "$1,450 / run",
    },
    M3Max: {
      name: "Apple M3/M4 Max Metal (128GB)",
      speed: "48.2 ns/day",
      bandwidth: "400 GB/s",
      costPerTrajectory: "$0.00",
      cloudEquivalent: "$210 / run",
    },
  };

  const cohortData = {
    CRC: {
      name: "Colorectal Adenocarcinoma",
      rawResponse: "38.2%",
      stratifiedResponse: "94.6%",
      delta: "+56.4%",
      biomarkers: [
        { gene: "CYP2D6 *4/*5", status: "Poor Metabolizer", action: "EXCLUDED", color: "rose" },
        { gene: "TP53 Inactivating", status: "Loss of Apoptosis", action: "EXCLUDED", color: "rose" },
        { gene: "MSI-High Signature", status: "Immune Reactive", action: "ENRICHED", color: "emerald" },
      ],
    },
    NSCLC: {
      name: "Non-Small Cell Lung Cancer",
      rawResponse: "32.0%",
      stratifiedResponse: "89.4%",
      delta: "+57.4%",
      biomarkers: [
        { gene: "EGFR T790M", status: "Kinase Resistance", action: "EXCLUDED", color: "rose" },
        { gene: "KRAS-G12D High", status: "Downstream Signaling", action: "EXCLUDED", color: "rose" },
        { gene: "PD-L1 TPS > 50%", status: "Checkpoint Primed", action: "ENRICHED", color: "emerald" },
      ],
    },
    PDAC: {
      name: "Pancreatic Ductal Adenocarcinoma",
      rawResponse: "24.5%",
      stratifiedResponse: "82.1%",
      delta: "+57.6%",
      biomarkers: [
        { gene: "SMAD4 Deletion", status: "TGF-β Resistance", action: "EXCLUDED", color: "rose" },
        { gene: "hERG Channel QSAR", status: "Pre-screened Safe", action: "CLEARED", color: "emerald" },
        { gene: "BRCA1/2 Deficient", status: "HRD Synthetic Lethal", action: "ENRICHED", color: "emerald" },
      ],
    },
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 relative bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 teal-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 lavender-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Biophysical &amp; Translational Core</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            Architected for Molecular &amp; Clinical Precision.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            No synthetic black boxes. Every candidate undergoes rigorous biophysical gate checks on your
            local silicon and automated stratification to de-risk clinical trials before Phase I.
          </p>
        </div>

        {/* 2x2 Bento Grid (Collapses to 1-column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* ============================================================ */}
          {/* BOX 1 (Top Left): Client GPU Dispatch */}
          {/* ============================================================ */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/60 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>CORE DIFFERENTIATOR 01</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  $0.00 Compute Fees
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Client GPU Dispatch
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                <strong className="text-slate-900 dark:text-white">Stop paying for cloud compute.</strong> Our daemon routes 100ns GROMACS MD trajectories directly to your lab&apos;s RTX workstation.
              </p>

              {/* Hardware Selector Buttons */}
              <div className="mb-4">
                <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 block mb-2">
                  LOCAL HARDWARE BENCHMARK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(["4090", "A100", "H100", "M3Max"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedGpu(key)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                        selectedGpu === key
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                      }`}
                    >
                      {key === "4090"
                        ? "RTX 4090"
                        : key === "A100"
                        ? "A100 80GB"
                        : key === "H100"
                        ? "H100 SXM"
                        : "Apple Metal"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Telemetry Box */}
              <div className="bg-slate-50 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-700 shadow-sm font-mono text-xs mb-5">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    elion-daemon --device cuda:0
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">● LIVE</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Target Structure:</span>
                    <span className="text-blue-700 dark:text-cyan-300 font-semibold">PDB_7K43 (KRAS-G12D)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Simulation Speed:</span>
                    <span className="text-blue-700 dark:text-blue-400 font-bold">{gpuProfiles[selectedGpu].speed}</span>
                  </div>

                  <div className="pt-1.5 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-700/60">
                    <div>
                      <span className="text-[9px] uppercase text-slate-400 block font-semibold">Local Run Cost</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">$0.00</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase text-slate-400 block font-semibold">Cloud AWS Rate</span>
                      <span className="text-xs text-rose-600 dark:text-rose-400 line-through font-semibold">
                        {gpuProfiles[selectedGpu].cloudEquivalent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800 text-xs">
              <span className="text-blue-900 dark:text-blue-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Airgap Local Storage
              </span>
              <span className="font-mono font-bold text-blue-700 dark:text-blue-300 text-xs">
                Zero Cloud Egress
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOX 2 (Top Right): CHARA Module */}
          {/* ============================================================ */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-mono font-bold">
                  <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>CORE DIFFERENTIATOR 02</span>
                </div>
                <a
                  href="https://pypi.org/project/chara-survival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 bg-teal-50/80 dark:bg-teal-900/40 px-2.5 py-1 rounded-lg border border-teal-200/60 dark:border-teal-700/60 transition-colors"
                >
                  <span>PyPI Package</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                CHARA Module
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                <strong className="text-slate-900 dark:text-white">OOD Transcriptomic Robustness.</strong> Validate mechanism-of-action generalization via thermodynamic graph Laplacian survival analysis.
              </p>

              {/* Spectral Graph Laplacian Visualizer */}
              <div className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm mb-5">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-200">
                    Spectral Laplacian: L = D - A
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold">
                    λ₁ = {(0.94 - perturbationLevel * 0.002).toFixed(3)}
                  </span>
                </div>

                <div className="h-20 w-full relative flex items-end justify-between gap-1 pt-2 px-2 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  {[45, 62, 78, 92, 85, 94, 76, 88, 64, 52, 40, 30].map((val, idx) => {
                    const heightPercent = Math.max(
                      15,
                      Math.min(95, val - perturbationLevel * (idx % 2 === 0 ? 0.3 : 0.1))
                    );
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                        <div
                          className="w-full rounded-t-md transition-all duration-300"
                          style={{
                            height: `${heightPercent}%`,
                            background:
                              idx > 3 && idx < 8
                                ? "linear-gradient(to top, #0D9488, #38BDF8)"
                                : "linear-gradient(to top, #CBD5E1, #94A3B8)",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-2.5 flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Cellular Noise:</span>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={perturbationLevel}
                    onChange={(e) => setPerturbationLevel(Number(e.target.value))}
                    className="w-32 accent-teal-600 cursor-pointer"
                  />
                  <span className="font-mono font-bold text-slate-800 dark:text-white w-10 text-right text-[11px]">
                    +{perturbationLevel}%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/50 border border-teal-200/60 dark:border-teal-800 text-xs">
              <span className="text-teal-900 dark:text-teal-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                MoA Survival Probability
              </span>
              <span className="font-mono font-bold text-teal-700 dark:text-teal-300 text-xs">
                {(99.2 - perturbationLevel * 0.08).toFixed(1)}% (PASS)
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOX 3 (Bottom Left): MSDD Module */}
          {/* ============================================================ */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-mono font-bold">
                  <Atom className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>CORE DIFFERENTIATOR 03</span>
                </div>
                <a
                  href="https://pypi.org/project/msdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 bg-indigo-50/80 dark:bg-indigo-900/40 px-2.5 py-1 rounded-lg border border-indigo-200/60 dark:border-indigo-700/60 transition-colors"
                >
                  <span>PyPI Package</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                MSDD Module
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                <strong className="text-slate-900 dark:text-white">Native D-Peptide Design.</strong> Automated phantom target inversion for mirror-image docking and MM-GBSA validation.
              </p>

              {/* Chirality Widget */}
              <div className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm mb-5">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-200">
                    Chiral: (x,y,z) → (-x,-y,-z)
                  </span>
                  <div className="flex gap-1 bg-slate-200 dark:bg-slate-700 p-0.5 rounded-lg">
                    <button
                      onClick={() => setChirality("L-Peptide")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        chirality === "L-Peptide"
                          ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold shadow-xs"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-800"
                      }`}
                    >
                      L-Form
                    </button>
                    <button
                      onClick={() => setChirality("D-Peptide")}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        chirality === "D-Peptide"
                          ? "bg-blue-600 text-white font-bold shadow-xs"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-800"
                      }`}
                    >
                      D-Form (Mirror)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase font-semibold">
                      Protease Half-Life
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold block mt-0.5 ${
                        chirality === "D-Peptide" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                      }`}
                    >
                      {chirality === "D-Peptide" ? "> 72.0 Hours" : "4.2 Minutes"}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase font-semibold">
                      MM-GBSA Binding
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 block mt-0.5">
                      {chirality === "D-Peptide" ? "-12.4 kcal/mol" : "-7.1 kcal/mol"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800 text-xs">
              <span className="text-indigo-900 dark:text-indigo-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Phantom Alignment
              </span>
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 text-xs">
                0.32 Å RMSD (PASS)
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOX 4 (Bottom Right) [NEW]: Clinical Stratification Engine */}
          {/* ============================================================ */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold">
                  <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>CORE DIFFERENTIATOR 04</span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50/80 dark:bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-200/60 dark:border-cyan-800">
                  Translational Trial De-risking
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Clinical Stratification Engine
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                <strong className="text-slate-900 dark:text-white">Design trials that don&apos;t fail.</strong> Generate automated negative predictive biomarkers and transcriptomic exclusion criteria to filter out non-responders before Phase I.
              </p>

              {/* Patient Stratification & Exclusion Widget */}
              <div className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm mb-5">
                {/* Cohort Selector */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    Trial Cohort Exclusion:
                  </span>
                  <div className="flex gap-1 bg-slate-200 dark:bg-slate-700 p-0.5 rounded-lg">
                    {(["CRC", "NSCLC", "PDAC"] as const).map((cohort) => (
                      <button
                        key={cohort}
                        onClick={() => setSelectedCohort(cohort)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                          selectedCohort === cohort
                            ? "bg-cyan-600 text-white font-bold shadow-xs"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                        }`}
                      >
                        {cohort}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Biomarker Exclusion Panel */}
                <div className="space-y-1.5 mb-3 font-mono text-[11px]">
                  {cohortData[selectedCohort].biomarkers.map((bm, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Dna className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-bold text-slate-900 dark:text-white">{bm.gene}</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                          ({bm.status})
                        </span>
                      </div>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          bm.action === "EXCLUDED"
                            ? "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800"
                            : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800"
                        }`}
                      >
                        {bm.action}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Response Rate Bar */}
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 dark:text-slate-400">
                    Phase I/II Response Rate:
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="text-slate-400 line-through">
                      {cohortData[selectedCohort].rawResponse}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs">
                      ➔ {cohortData[selectedCohort].stratifiedResponse}
                    </span>
                    <span className="text-[10px] text-cyan-600 dark:text-cyan-400">
                      ({cohortData[selectedCohort].delta})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/50 border border-cyan-200/60 dark:border-cyan-800 text-xs">
              <span className="text-cyan-900 dark:text-cyan-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Negative Predictive Biomarkers
              </span>
              <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300 text-xs">
                Protocol Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
