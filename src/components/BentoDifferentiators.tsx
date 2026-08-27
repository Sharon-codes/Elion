"use client";

import React, { useState } from "react";
import {
  Cpu,
  Activity,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Atom,
  HardDrive,
  Network,
  ExternalLink,
} from "lucide-react";

export const BentoDifferentiators: React.FC = () => {
  const [selectedGpu, setSelectedGpu] = useState<"4090" | "A100" | "H100" | "M3Max">("4090");
  const [perturbationLevel, setPerturbationLevel] = useState(25);
  const [chirality, setChirality] = useState<"L-Peptide" | "D-Peptide">("D-Peptide");

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

  return (
    <section id="architecture" className="py-16 sm:py-24 relative bg-[#F8F9FA] dark:bg-[#090D16] overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 teal-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 lavender-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Physics Core</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            Architected for Molecular Precision.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            No synthetic black boxes. Every candidate undergoes rigorous biophysical gate checks
            running at full native speed on your local silicon.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BOX 1: Client GPU Dispatch */}
          <div className="lg:col-span-12 rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/60 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>CORE DIFFERENTIATOR 01</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Client GPU Dispatch
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  <strong className="text-slate-900 dark:text-white">Stop paying for cloud compute.</strong> Our
                  daemon routes 100ns GROMACS MD trajectories directly to your lab&apos;s RTX 4090/A100.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 dark:text-white block">Zero Compute Fees</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        100% of trajectory compute executes on idle lab silicon.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 dark:text-white block">CUDA &amp; Metal Native</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        Hand-tuned GROMACS &amp; AutoDock kernels for 99% GPU saturation.
                      </span>
                    </div>
                  </div>
                </div>

                {/* GPU Selector */}
                <div className="pt-2">
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 block mb-2">
                    SELECT HARDWARE BENCHMARK:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(["4090", "A100", "H100", "M3Max"] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedGpu(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                          selectedGpu === key
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                            : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {key === "4090"
                          ? "RTX 4090"
                          : key === "A100"
                          ? "A100 80GB"
                          : key === "H100"
                          ? "H100 SXM"
                          : "Apple Silicon"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Box - Styled Clean for BOTH Light and Dark Theme */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-lg font-mono text-xs relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold pl-2">
                        elion-daemon --stream --device cuda:0
                      </span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      ● LIVE
                    </span>
                  </div>

                  <div className="space-y-2 text-slate-600 dark:text-slate-300">
                    <div>
                      [INFO] Target: <span className="text-blue-700 dark:text-cyan-300 font-semibold">PDB_7K43 (KRAS-G12D)</span>
                    </div>
                    <div>
                      [INFO] Hardware:{" "}
                      <span className="text-amber-700 dark:text-amber-300 font-bold">
                        {gpuProfiles[selectedGpu].name}
                      </span>
                    </div>
                    <div>
                      [INFO] Memory Bandwidth:{" "}
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                        {gpuProfiles[selectedGpu].bandwidth}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-500 dark:text-slate-400">
                          100ns Explicit Solvent MD (Amber ff14SB)
                        </span>
                        <span className="text-blue-700 dark:text-blue-400 font-bold">
                          {gpuProfiles[selectedGpu].speed}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: "76%" }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 dark:text-slate-400 block font-semibold">
                          Elion Local Run Cost
                        </span>
                        <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                          {gpuProfiles[selectedGpu].costPerTrajectory}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-slate-400 dark:text-slate-400 block font-semibold">
                          AWS / GCP Cloud Rate
                        </span>
                        <span className="text-xs text-rose-600 dark:text-rose-400 line-through font-semibold">
                          {gpuProfiles[selectedGpu].cloudEquivalent}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 2: Security & IP - Local-First Architecture */}
          <div className="lg:col-span-12 rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>ZERO-TRUST SECURITY &amp; IP</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Local-First Architecture (Zero Data Retention)
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  We don&apos;t want your IP, and our architecture guarantees we can&apos;t see it.
                  The Elion daemon executes molecular dynamics and docking locally on your GPU. Your
                  target PDBs, SMILES strings, and proprietary omics data are never transmitted,
                  stored, or logged on our servers.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700">
                    HIPAA / GDPR Zero-Retention
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700">
                    Airgap-Ready Execution
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium border border-emerald-200 dark:border-emerald-800">
                    100% IP Ownership
                  </span>
                </div>
              </div>

              {/* Technical Reality Architecture Callouts */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white block">Orchestrator Separation</span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    Cloud only sends execution DAGs &amp; .mdp files. No molecular payloads.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white block">No Payload Logging</span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    SMILES/PDB passed via encrypted local socket and flushed immediately.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white block">Local Storage Only</span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    Trajectories (.xtc/.trr) and .pdbqt dockings stay strictly on local disk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 3: CHARA Module */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 teal-glow rounded-full blur-2xl pointer-events-none" />

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

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                CHARA Module
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-slate-900 dark:text-white">OOD Transcriptomic Robustness.</strong> Validate
                mechanism-of-action generalization via thermodynamic graph Laplacian survival
                analysis.
              </p>

              {/* Interactive Graph Laplacian Perturbation Visualizer */}
              <div className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm mb-6">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-200">
                    Spectral Laplacian: L = D - A
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-bold">
                    λ₁ = {(0.94 - perturbationLevel * 0.002).toFixed(3)}
                  </span>
                </div>

                {/* Graph Spectrum Curves */}
                <div className="h-28 w-full relative flex items-end justify-between gap-1 pt-4 px-2 bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  {[45, 62, 78, 92, 85, 94, 76, 88, 64, 52, 40, 30].map((val, idx) => {
                    const heightPercent = Math.max(
                      15,
                      Math.min(95, val - perturbationLevel * (idx % 2 === 0 ? 0.3 : 0.1))
                    );
                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center justify-end h-full"
                      >
                        <div
                          className="w-full rounded-t-md transition-all duration-300"
                          style={{
                            height: `${heightPercent}%`,
                            background:
                              idx > 3 && idx < 8
                                ? "linear-gradient(to top, #2563EB, #38BDF8)"
                                : "linear-gradient(to top, #CBD5E1, #94A3B8)",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono">Cellular Perturbation:</span>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={perturbationLevel}
                    onChange={(e) => setPerturbationLevel(Number(e.target.value))}
                    className="w-36 accent-blue-600 cursor-pointer"
                  />
                  <span className="font-mono font-bold text-slate-800 dark:text-white w-10 text-right">
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
              <span className="font-mono font-bold text-teal-700 dark:text-teal-300 text-sm">
                {(99.2 - perturbationLevel * 0.08).toFixed(1)}% (PASS)
              </span>
            </div>
          </div>

          {/* BOX 4: MSDD Module */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden group hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 lavender-glow rounded-full blur-2xl pointer-events-none" />

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

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                MSDD Module
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-slate-900 dark:text-white">Native D-Peptide Design.</strong> Automated
                phantom target inversion for mirror-image docking and MM-GBSA validation.
              </p>

              {/* Chirality Widget */}
              <div className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm mb-6">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-200">
                    Chiral Inversion: (x, y, z) → (-x, -y, -z)
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
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">
                      Protease Half-Life
                    </span>
                    <span
                      className={`text-sm font-bold block mt-1 ${
                        chirality === "D-Peptide" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                      }`}
                    >
                      {chirality === "D-Peptide" ? "> 72.0 Hours" : "4.2 Minutes"}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      {chirality === "D-Peptide"
                        ? "Serum resistant"
                        : "Rapidly degraded by trypsin"}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">
                      MM-GBSA Binding Energy
                    </span>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-400 block mt-1">
                      {chirality === "D-Peptide" ? "-12.4 kcal/mol" : "-7.1 kcal/mol"}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Sub-nanomolar affinity</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800 text-xs">
              <span className="text-indigo-900 dark:text-indigo-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Phantom Target Alignment
              </span>
              <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 text-sm">
                0.32 Å RMSD (Validated)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
