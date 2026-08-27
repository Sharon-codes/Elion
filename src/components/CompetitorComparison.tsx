"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Cpu,
  Activity,
  Layers,
  RotateCcw,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const CompetitorComparison: React.FC = () => {
  const [activeMoat, setActiveMoat] = useState(0);

  const comparisonData = [
    {
      feature: "Target Audience",
      schrodinger: "Enterprise Pharma ($5M budget)",
      insilico: "Enterprise Pharma / Internal",
      assistants: "General Researchers",
      elion: "Academic Labs & Small Biotech",
    },
    {
      feature: "Pricing Model",
      schrodinger: "$500k–$5M/yr ($7.5k+ academic)",
      insilico: "Nine-figure deals / Closed",
      assistants: "$20–$200/mo (No compute)",
      elion: "$159–$960/mo (Transparent)",
    },
    {
      feature: "Compute Engine",
      schrodinger: "Expensive Cloud / HPC Server",
      insilico: "Closed Cloud Infrastructure",
      assistants: "No Physics Engine",
      elion: "Client GPU Dispatch (Local RTX 4090)",
    },
    {
      feature: "Transcriptomic Validation",
      schrodinger: "No",
      insilico: "Proprietary Omics",
      assistants: "None",
      elion: "CHARA (OOD Graph Laplacian)",
    },
    {
      feature: "Native D-Peptide Design",
      schrodinger: "No",
      insilico: "No",
      assistants: "No",
      elion: "MSDD (Phantom Target Inversion)",
    },
    {
      feature: "Failure Analysis",
      schrodinger: "Manual / Static Data",
      insilico: "Proprietary AI",
      assistants: "Chat-based (No Physics)",
      elion: "Closed-Loop AI DMTA Agent",
    },
    {
      feature: "Resistance Pre-Screening",
      schrodinger: "Expensive Add-on License",
      insilico: "Custom Internal Service",
      assistants: "No Structure Docking",
      elion: "Built-in (EGFR T790M, BCL-2 G101V)",
    },
  ];

  const moats = [
    {
      id: "01",
      title: "Client GPU Dispatch",
      subtitle: "Zero Cloud Compute Fees",
      tag: "COMPUTE ARCHITECTURE",
      metric: "0.00 $ Cloud Egress",
      description:
        "Heavy Molecular Dynamics (GROMACS/OpenMM) runs on the researcher’s idle workstation GPU via a lightweight desktop daemon. Compute costs drop to near zero while structures remain strictly on your local NVMe disk.",
      icon: Cpu,
      stats: [
        { label: "Execution Target", value: "Local NVIDIA CUDA / Apple Metal" },
        { label: "Cost Per Run", value: "$0.00 (Lab Workstation)" },
        { label: "Data Egress", value: "Zero (Airgap Compliant)" },
      ],
    },
    {
      id: "02",
      title: "CHARA Module",
      subtitle: "OOD Genomic Validation",
      tag: "TRANSCRIPTOMICS",
      metric: "λ₁ > 0.90 MoA Survival",
      description:
        "Evaluates if a drug candidate’s mechanism-of-action transcriptomic signature generalizes across out-of-distribution (OOD) patient cohorts and disease subtypes using thermodynamic graph Laplacians.",
      icon: Activity,
      stats: [
        { label: "Mathematical Core", value: "Thermodynamic Graph Laplacian (L = D - A)" },
        { label: "Validation Metric", value: "Spectral Eigenvalue Stability λ₁" },
        { label: "Biological Noise Tolerance", value: "+60% Perturbation Survival" },
      ],
    },
    {
      id: "03",
      title: "Native MSDD",
      subtitle: "Phantom Target Inversion",
      tag: "D-PEPTIDE THERAPEUTICS",
      metric: "72h+ Serum Stability",
      description:
        "Built specifically for D-amino acid / mirror-image peptide design, providing a systematic computational approach for proteolytically stable therapeutics with automated chiral coordinate reflection.",
      icon: Layers,
      stats: [
        { label: "Inversion Matrix", value: "(x, y, z) → (-x, -y, -z)" },
        { label: "Protease Half-Life", value: "> 72 Hours (Trypsin Resistant)" },
        { label: "Binding Energy (ΔG)", value: "-12.4 kcal/mol (Sub-nanomolar)" },
      ],
    },
    {
      id: "04",
      title: "Closed-Loop AI DMTA Agent",
      subtitle: "Automated Failure Redesign",
      tag: "AUTONOMOUS OPTIMIZATION",
      metric: "Zero-Human Loop Redesign",
      description:
        "When a compound fails (e.g. high hERG cardiotoxicity or low solubility), the autonomous DMTA agent identifies the responsible chemical substructure, prompts generative scaffold morphing, and auto-reruns the pipeline.",
      icon: RotateCcw,
      stats: [
        { label: "Feedback Cycle", value: "Design → Make → Test → Analyze (DMTA)" },
        { label: "Toxicophore Isolation", value: "Substructure Neural Graph Attribution" },
        { label: "Auto-Retest", value: "Automated Secondary 35-Gate Dispatch" },
      ],
    },
    {
      id: "05",
      title: "Resistance Pre-Screening",
      subtitle: "Out-of-the-Box Clinical Mutants",
      tag: "CLINICAL ONCOLOGY",
      metric: "Pre-Screened Gatekeeper Mutants",
      description:
        "Automatically docks and scores candidates against common clinical resistance mutations (e.g., EGFR T790M/C797S, BCL-2 G101V, KRAS G12C/D) out of the box before committing wet-lab budget.",
      icon: ShieldCheck,
      stats: [
        { label: "Standard Panel", value: "EGFR T790M, BCL-2 G101V, KRAS G12D" },
        { label: "Affinity Retention", value: "ΔΔG < +0.8 kcal/mol Required" },
        { label: "Database Sync", value: "Automated COSMIC & cBioPortal Ingestion" },
      ],
    },
  ];

  return (
    <section id="comparison" className="py-24 relative bg-[#FCFCFC] dark:bg-[#0B101E] border-b border-slate-200/60 dark:border-slate-800">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] clinical-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Differentiation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            How Elion Compares
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Legacy platforms lock academic researchers out with six-figure contracts, while generic AI
            assistants lack rigorous physics engines. Elion unifies enterprise-grade physics with
            workstation-level local access.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel-elevated rounded-3xl p-4 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg mb-20 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200/80 dark:border-slate-800 text-xs font-mono">
                <th className="py-4 px-4 text-slate-500 dark:text-slate-400 uppercase">Capability / Dimension</th>
                <th className="py-4 px-4 text-slate-500 dark:text-slate-400 uppercase">Schrödinger</th>
                <th className="py-4 px-4 text-slate-500 dark:text-slate-400 uppercase">Insilico / Isomorphic</th>
                <th className="py-4 px-4 text-slate-500 dark:text-slate-400 uppercase">Claude / GPT</th>
                <th className="py-4 px-4 text-blue-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 rounded-t-2xl font-bold uppercase">
                  Elion Platform
                </th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-100 dark:divide-slate-800">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 font-mono text-[11px]">{row.schrodinger}</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 font-mono text-[11px]">{row.insilico}</td>
                  <td className="py-4 px-4 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{row.assistants}</td>
                  <td className="py-4 px-4 font-bold text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                      <span>{row.elion}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ============================================================ */}
        {/* THE 5 CORE MOATS - HIGH-END INTERACTIVE SPOTLIGHT LAYOUT */}
        {/* ============================================================ */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-3">
              The 5 Core Moats
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Proprietary biophysical and genomic algorithms that make Elion mathematically and architecturally unassailable.
            </p>
          </div>

          {/* Interactive Moat Selector & Detailed Spotlight Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Nav List (All 5 Moats) */}
            <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
              {moats.map((moat, idx) => {
                const Icon = moat.icon;
                const isActive = activeMoat === idx;
                return (
                  <button
                    key={moat.id}
                    onClick={() => setActiveMoat(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isActive
                        ? "bg-white dark:bg-slate-800 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                        : "bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 border-slate-200/80 dark:border-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors ${
                          isActive
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            MOAT {moat.id}
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {moat.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans mt-0.5">
                          {moat.title}
                        </h4>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 translate-x-1"
                          : "text-slate-400 opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Spotlight Panel */}
            <div className="lg:col-span-7 glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/70 dark:border-slate-800">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>MOAT {moats[activeMoat].id} DEEP DIVE</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold">
                    {moats[activeMoat].metric}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
                    {moats[activeMoat].title}
                  </h3>
                  <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400 block mt-1">
                    {moats[activeMoat].subtitle}
                  </span>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                    {moats[activeMoat].description}
                  </p>
                </div>

                {/* Quantitative Architectural Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {moats[activeMoat].stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">
                        {stat.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white block mt-1">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Validated across peer-reviewed benchmarks
                </span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  {activeMoat + 1} / 5 MOATS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
