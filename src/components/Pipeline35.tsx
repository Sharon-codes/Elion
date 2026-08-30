"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Atom,
  Info,
  Clock,
  Cpu,
} from "lucide-react";

interface PipelineTest {
  id: number;
  name: string;
  engine: string;
  category: "target" | "docking" | "md" | "admet";
  metric: string;
  threshold: string;
  gpuTime: string;
  description: string;
}

const pipelineTests: PipelineTest[] = [
  // STAGE 1: TARGET & CRYPTIC POCKET DISCOVERY (Tests 01–08)
  {
    id: 1,
    name: "Cryptic Pocket Expansion",
    engine: "PocketMiner + MD",
    category: "target",
    metric: "Pocket Volume Index",
    threshold: "> 450 Å³",
    gpuTime: "12s (RTX 4090)",
    description: "Detects transient allosteric pockets opened via localized backbone conformational breathing.",
  },
  {
    id: 2,
    name: "Hydration Free Energy Site Mapping",
    engine: "3D-RISM / WaterMap",
    category: "target",
    metric: "Unfavorable Water ΔG",
    threshold: "> +2.8 kcal/mol",
    gpuTime: "24s (RTX 4090)",
    description: "Identifies high-energy, displaceable water molecules in the binding pocket to maximize hydrophobic gain.",
  },
  {
    id: 3,
    name: "Phantom Target Inversion (MSDD)",
    engine: "Elion Mirror Engine",
    category: "target",
    metric: "Chiral Inversion RMSD",
    threshold: "< 0.05 Å",
    gpuTime: "2s (Metal / CUDA)",
    description: "Inverts target Cartesian coordinates to enable mirror-image D-peptide screening with zero steric artifact.",
  },
  {
    id: 4,
    name: "AlphaFold / ESMFold Coordinate Refinement",
    engine: "ESMFold v2 + OpenMM",
    category: "target",
    metric: "pLDDT Confidence",
    threshold: "> 88.5",
    gpuTime: "45s (RTX 4090)",
    description: "Generates high-resolution holo-state conformations parameterized for explicit solvent simulation.",
  },
  {
    id: 5,
    name: "Allosteric Network Graph Centrality",
    engine: "Dynamic Cross-Correlation (DCCM)",
    category: "target",
    metric: "Betweenness Centrality",
    threshold: "> 0.72 score",
    gpuTime: "14s (RTX 4090)",
    description: "Maps allosteric communication pathways connecting distant regulatory domains to the primary binding pocket.",
  },
  {
    id: 6,
    name: "Poisson-Boltzmann Electrostatic Potential",
    engine: "APBS / PDB2PQR",
    category: "target",
    metric: "Surface Charge Gradient",
    threshold: "± 5.0 k_B T / e",
    gpuTime: "8s (RTX 4090)",
    description: "Computes continuum dielectric electrostatic surfaces to evaluate polar interaction complementarity.",
  },
  {
    id: 7,
    name: "Induced-Fit Active Site Flexibility",
    engine: "CONCOORD Geometric MD",
    category: "target",
    metric: "Backbone B-Factor Elasticity",
    threshold: "RMSF < 2.1 Å",
    gpuTime: "16s (RTX 4090)",
    description: "Samples receptor conformational plasticity to prevent rigid-body docking false negatives.",
  },
  {
    id: 8,
    name: "Cryptic H-Bond Donor/Acceptor Density",
    engine: "GRID Interaction Field",
    category: "target",
    metric: "Spatial Directional Affinity",
    threshold: "< -6.2 kcal/mol",
    gpuTime: "10s (RTX 4090)",
    description: "Calculates 3D interaction potential maps for amide, carbonyl, and hydroxyl hydrogen-bonding probes.",
  },

  // STAGE 2: HIGH-PRECISION DOCKING & FEP (Tests 09–17)
  {
    id: 9,
    name: "Lamarckian GA Flexible Docking",
    engine: "AutoDock-GPU v1.5",
    category: "docking",
    metric: "Binding Energy",
    threshold: "< -9.5 kcal/mol",
    gpuTime: "4s / pose (RTX 4090)",
    description: "Simulates ligand conformational space using OpenCL/CUDA accelerated Lamarckian Genetic Algorithms.",
  },
  {
    id: 10,
    name: "Boltz-2 FEP-Class Free Energy Perturbation",
    engine: "Boltz-2 Native Core",
    category: "docking",
    metric: "Relative ΔΔG",
    threshold: "< -11.8 kcal/mol",
    gpuTime: "95s (A100)",
    description: "Calculates alchemical free energy transformation with rigorous thermodynamic cycle convergence.",
  },
  {
    id: 11,
    name: "MM-GBSA Continuum Solvation",
    engine: "AmberTools / MMPBSA.py",
    category: "docking",
    metric: "Enthalpic ΔH_bind",
    threshold: "< -35.2 kcal/mol",
    gpuTime: "30s (RTX 4090)",
    description: "Decomposes residue-level electrostatic and van der Waals contributions to the binding interface.",
  },
  {
    id: 12,
    name: "Quantum RESP Charge Parametrization",
    engine: "Antechamber + HF/6-31G*",
    category: "docking",
    metric: "Dipole Moment Precision",
    threshold: "RMSD < 0.02 e",
    gpuTime: "18s (RTX 4090)",
    description: "Derives restrained electrostatic potential charges for non-standard D-amino acids and cyclic scaffolds.",
  },
  {
    id: 13,
    name: "Covalent Warhead Trajectory Mapping",
    engine: "CovalentDock Core",
    category: "docking",
    metric: "Nucleophilic Attack Distance",
    threshold: "d < 3.4 Å, θ = 109.5°",
    gpuTime: "20s (RTX 4090)",
    description: "Simulates Michael addition and electrophilic addition geometry for targeted covalent inhibitors (Cys/Ser/Lys).",
  },
  {
    id: 14,
    name: "Induced-Fit Sidechain Ensemble Re-docking",
    engine: "Rosetta FlexPepDock",
    category: "docking",
    metric: "Interface Energy Score (I_sc)",
    threshold: "I_sc < -8.5 REU",
    gpuTime: "35s (RTX 4090)",
    description: "Optimizes receptor side-chain rotamers simultaneously with ligand backbone degrees of freedom.",
  },
  {
    id: 15,
    name: "Water-Mediated Bridging Contact Persistence",
    engine: "BridgeWater GPU",
    category: "docking",
    metric: "Bridging Free Energy ΔG_w",
    threshold: "< -2.1 kcal/mol",
    gpuTime: "15s (RTX 4090)",
    description: "Evaluates stability of conserved bridging waters participating in structural hydrogen-bond networks.",
  },
  {
    id: 16,
    name: "Pharmacophore Graph Isomorphism Matching",
    engine: "RDKit 3D Pharmacophore",
    category: "docking",
    metric: "3D Tanimoto Combo Score",
    threshold: "> 1.65 / 2.0",
    gpuTime: "3s (RTX 4090)",
    description: "Aligns candidate essential features (aromatic, cationic, hydrophobic) with experimental co-crystal bioactive poses.",
  },
  {
    id: 17,
    name: "Conformational Strain Free Energy (ΔG_strain)",
    engine: "DFT / B3LYP-D3",
    category: "docking",
    metric: "Internal Conformational Penalty",
    threshold: "ΔG_strain < 3.5 kcal/mol",
    gpuTime: "25s (RTX 4090)",
    description: "Quantifies the energetic penalty between bioactive bound conformation and solution ground-state minimum.",
  },

  // STAGE 3: 100ns EXPLICIT SOLVENT MOLECULAR DYNAMICS (Tests 18–25)
  {
    id: 18,
    name: "100ns Explicit Solvent Dynamics",
    engine: "GROMACS 2024 (CUDA)",
    category: "md",
    metric: "Heavy Atom RMSD",
    threshold: "< 1.8 Å @ 100ns",
    gpuTime: "18 min (RTX 4090)",
    description: "Runs full explicit TIP3P water dynamics with PME electrostatics directly on your workstation GPU.",
  },
  {
    id: 19,
    name: "Backbone RMSD / RMSF Thermal Convergence",
    engine: "MDAnalysis CUDA",
    category: "md",
    metric: "Equilibrium Fluctuation",
    threshold: "RMSF plateau < 1.5 Å",
    gpuTime: "6s (RTX 4090)",
    description: "Tracks per-residue root-mean-square fluctuations to verify active-site structural rigidity and pose lock.",
  },
  {
    id: 20,
    name: "Interfacial H-Bond Lifetime & Persistence",
    engine: "MDTraj + Local Daemon",
    category: "md",
    metric: "Occupancy Rate",
    threshold: "> 75% trajectory",
    gpuTime: "8s (Metal / CUDA)",
    description: "Quantifies interfacial hydrogen bond lifetimes and salt-bridge resilience across thermal fluctuations.",
  },
  {
    id: 21,
    name: "Buried Surface Area (SASA)",
    engine: "FreeSASA Native",
    category: "md",
    metric: "Hydrophobic Burial",
    threshold: "> 780 Å²",
    gpuTime: "5s (RTX 4090)",
    description: "Measures desolvation surface burial to ensure tight entropic thermodynamic anchoring in explicit water.",
  },
  {
    id: 22,
    name: "Markov State Metastable Transition Analysis",
    engine: "PyEMMA / MSM Core",
    category: "md",
    metric: "Eigenvalue Gap τ",
    threshold: "τ > 50 ns",
    gpuTime: "40s (RTX 4090)",
    description: "Constructs conformational Markov models to detect rare unbinding transition states and calculate k_off.",
  },
  {
    id: 23,
    name: "Contact Area Desolvation Free Energy",
    engine: "Lie Free Energy (LRA)",
    category: "md",
    metric: "Electrostatic Desolvation",
    threshold: "ΔG_desolv < -14.2 kcal/mol",
    gpuTime: "12s (RTX 4090)",
    description: "Calculates free energy gain from displacing bulk water from hydrophobic receptor cavity surfaces.",
  },
  {
    id: 24,
    name: "Salt-Bridge Electrostatic Resilience",
    engine: "VMD Timeline / GROMACS",
    category: "md",
    metric: "Ionic Distance d_N-O",
    threshold: "d < 3.8 Å (> 90% time)",
    gpuTime: "7s (RTX 4090)",
    description: "Verifies long-term stability of critical charge-charge ionic interactions under 310K physiological simulation.",
  },
  {
    id: 25,
    name: "Radius of Gyration (Rg) Compactness",
    engine: "OpenMM Trajectory Analyzer",
    category: "md",
    metric: "Rg Standard Deviation",
    threshold: "σ(Rg) < 0.35 Å",
    gpuTime: "6s (RTX 4090)",
    description: "Ensures the overall complex retains its globular, compact quaternary fold without breathing-induced degradation.",
  },

  // STAGE 4: ADMET, TRANSCRIPTOMICS, RESISTANCE & SYNTHESIS (Tests 26–35)
  {
    id: 26,
    name: "CHARA OOD Transcriptomic Robustness",
    engine: "CHARA Laplacian Engine",
    category: "admet",
    metric: "MoA Generalization",
    threshold: "λ₁ > 0.90 (PASS)",
    gpuTime: "15s (Metal / CUDA)",
    description: "Evaluates perturbation survival across out-of-distribution cellular RNA-seq knockdowns.",
  },
  {
    id: 27,
    name: "ADMETlab 3.0 Full Toxicity Profile",
    engine: "ADMETlab 3.0 Core",
    category: "admet",
    metric: "hERG / Ames Safety",
    threshold: "Class 0 (Non-toxic)",
    gpuTime: "6s (RTX 4090)",
    description: "Screens for hERG cardiotoxicity, hepatotoxicity, mutagenicity, and CYP450 isoform inhibition.",
  },
  {
    id: 28,
    name: "hERG Cardiotoxicity Potassium Channel",
    engine: "DeepChem + CardioTox QSAR",
    category: "admet",
    metric: "hERG IC50 Affinity",
    threshold: "IC50 > 30 μM (Safe)",
    gpuTime: "4s (RTX 4090)",
    description: "Predicts QT prolongation and fatal arrhythmia risk via deep neural graph classifiers trained on ChEMBL.",
  },
  {
    id: 29,
    name: "Blood-Brain Barrier (BBB) Permeability",
    engine: "DeepChem + LogBB",
    category: "admet",
    metric: "LogBB Permeance",
    threshold: "> 0.3 (Permeable)",
    gpuTime: "4s (RTX 4090)",
    description: "Predicts central nervous system penetration utilizing multi-task neural graph convolutional networks.",
  },
  {
    id: 30,
    name: "Cytochrome P450 Isoform Panel (5 Isoforms)",
    engine: "CYP-Predictor Ensemble",
    category: "admet",
    metric: "CYP3A4/2D6/2C9 Inhibition",
    threshold: "< 25% inhibition @ 10μM",
    gpuTime: "5s (RTX 4090)",
    description: "Assesses drug-drug interaction risk across major human hepatic drug-metabolizing enzymes.",
  },
  {
    id: 31,
    name: "Metabolic Clearance & Plasma Protein Binding",
    engine: "ADMET-AI PPB Classifier",
    category: "admet",
    metric: "Unbound Fraction (f_u)",
    threshold: "f_u > 2.5%, Cl_int < 15 mL/min/kg",
    gpuTime: "5s (RTX 4090)",
    description: "Forecasts in vivo clearance half-life, systemic exposure volume, and human serum albumin binding percentage.",
  },
  {
    id: 32,
    name: "Resistance Mutation Pre-Screening: EGFR",
    engine: "AutoDock-GPU Mutational Grid",
    category: "admet",
    metric: "T790M / C797S ΔG Retention",
    threshold: "ΔΔG < +0.8 kcal/mol",
    gpuTime: "12s (RTX 4090)",
    description: "Cross-screens binding affinity against clinically prevalent tyrosine kinase gatekeeper drug-resistance mutations.",
  },
  {
    id: 33,
    name: "Resistance Mutation Pre-Screening: BCL2/KRAS",
    engine: "Boltz-2 Mutant Profiler",
    category: "admet",
    metric: "G101V / G12D Affinity",
    threshold: "K_d < 15 nM (Active)",
    gpuTime: "16s (RTX 4090)",
    description: "Validates compound efficacy against BCL-2 G101V venetoclax-resistant and KRAS oncogenic driver variants.",
  },
  {
    id: 34,
    name: "Closed-Loop AI DMTA Failure Redesign",
    engine: "Elion DMTA Agent",
    category: "admet",
    metric: "Substructure Toxicophore Fix",
    threshold: "Automated Loop (PASS)",
    gpuTime: "28s (RTX 4090)",
    description: "Identifies failing chemical fragments (e.g. nitroaromatic tox), prompts generative redesign, and auto-reruns tests.",
  },
  {
    id: 35,
    name: "Retrosynthetic Accessibility & Cost (AiZynthFinder)",
    engine: "AiZynthFinder (MCTS)",
    category: "admet",
    metric: "SAScore / Tree Depth",
    threshold: "SAScore < 3.2 (≤ 6 steps)",
    gpuTime: "22s (Local CPU/GPU)",
    description: "Maps viable synthetic pathways using commercially available catalog building blocks with Monte Carlo Tree Search.",
  },
];

const marqueeEngines = [
  { name: "Patient Exclusion Matrix", role: "Multi-Omics Phenotyping", badge: "Clinical De-risking" },
  { name: "AutoDock-GPU", role: "Lamarckian GA Docking", badge: "CUDA 12.4" },
  { name: "Boltz-2 Core", role: "FEP-Class Affinity (ΔΔG)", badge: "SOTA" },
  { name: "ADMETlab 3.0", role: "Safety & Toxicity Profiling", badge: "31 Endpoints" },
  { name: "AiZynthFinder", role: "Retrosynthetic Synthesis", badge: "MCTS Search" },
  { name: "GROMACS 2024", role: "100ns Explicit Solvent MD", badge: "Direct Dispatch" },
  { name: "CHARA Module", role: "OOD Transcriptomic Robustness", badge: "Proprietary" },
  { name: "MSDD Inversion", role: "Mirror-Image D-Peptide", badge: "Patent-Pending" },
  { name: "AmberTools 24", role: "Forcefield Topology & RESP", badge: "ff14SB / GAFF2" },
];

export const Pipeline35: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "target" | "docking" | "md" | "admet">("all");
  const [selectedTest, setSelectedTest] = useState<PipelineTest>(pipelineTests[0]);

  const handleTabChange = (categoryId: "all" | "target" | "docking" | "md" | "admet") => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setSelectedTest(pipelineTests[0]);
    } else {
      const firstInCat = pipelineTests.find((t) => t.category === categoryId);
      if (firstInCat) {
        setSelectedTest(firstInCat);
      }
    }
  };

  const filteredTests =
    activeCategory === "all"
      ? pipelineTests
      : pipelineTests.filter((t) => t.category === activeCategory);

  return (
    <section id="pipeline" className="py-16 sm:py-24 relative bg-transparent border-y border-slate-200/60 dark:border-slate-800 overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 clinical-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Exhaustive Validation Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            The 35-Test Computational Pipeline
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every candidate molecule must pass 35 non-negotiable biophysical, thermodynamic, and safety
            thresholds before progressing to wet-lab synthesis.
          </p>
        </div>

        {/* Engine Marquee */}
        <div className="relative w-full overflow-hidden py-3 sm:py-4 mb-12 sm:mb-16 mask-gradient">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#FCFCFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#FCFCFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 sm:gap-4 animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]">
            {[...marqueeEngines, ...marqueeEngines].map((engine, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl glass-panel-elevated border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-400/80 transition-all hover:scale-[1.02]"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm font-sans">{engine.name}</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[9px] sm:text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold">
                      {engine.badge}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">{engine.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 35-Test Matrix & Live Inspector */}
        <div className="glass-panel-elevated rounded-3xl p-4 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-lg">
          {/* Filter Tabs (Horizontally swipeable on mobile) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 sm:pb-6 border-b border-slate-200/70 dark:border-slate-800">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1">
              {[
                { id: "all", label: "All 35 Gates" },
                { id: "target", label: "1. Target & Pockets" },
                { id: "docking", label: "2. Docking & FEP" },
                { id: "md", label: "3. Local MD Trajectory" },
                { id: "admet", label: "4. ADMET & Safety" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-slate-900 text-white dark:bg-blue-600 shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>35 / 35 PASS RATE REQUIRED</span>
            </div>
          </div>

          {/* Test Grid & Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 pt-5 sm:pt-6">
            {/* Scrollable Test List */}
            <div className="lg:col-span-7 space-y-2 max-h-[420px] sm:max-h-[500px] overflow-y-auto pr-1 sm:pr-2">
              {filteredTests.map((test) => {
                const isSelected = selectedTest.id === test.id;
                return (
                  <div
                    key={test.id}
                    onClick={() => setSelectedTest(test)}
                    className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-blue-50/90 dark:bg-blue-950/60 border-blue-500/80 shadow-sm ring-1 ring-blue-500/20"
                        : "bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200/70 dark:border-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-xs font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                        #{test.id < 10 ? `0${test.id}` : test.id}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-sans truncate">{test.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-mono text-blue-700 dark:text-blue-400 font-medium truncate">{test.engine}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px] sm:text-xs font-mono font-bold">
                        {test.threshold}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Test Inspector Card - Modern Biotech Light & Dark Mode */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-4 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xl flex flex-col justify-between min-h-[380px] sm:min-h-[460px] relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-[11px] sm:text-xs">
                    <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    GATE #{selectedTest.id < 10 ? `0${selectedTest.id}` : selectedTest.id} SPECIFICATION
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-[9px] sm:text-[10px] font-bold">
                    MANDATORY
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-400 dark:text-slate-500 tracking-wider font-semibold">
                      Validation Target
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-sans mt-0.5">
                      {selectedTest.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedTest.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-400 dark:text-slate-500 block font-semibold">
                        Engine &amp; Algorithm
                      </span>
                      <span className="text-xs font-mono font-bold text-blue-700 dark:text-cyan-300 block mt-0.5">
                        {selectedTest.engine}
                      </span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-400 dark:text-slate-500 block font-semibold">
                        Local Runtime
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-300 block mt-0.5">
                        {selectedTest.gpuTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60">
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono text-emerald-800 dark:text-emerald-300 block font-bold">
                      Strict Pass Threshold
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-extrabold text-emerald-700 dark:text-emerald-400 block mt-0.5">
                      {selectedTest.threshold}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Local CUDA/Metal execution
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono font-bold">GATE #{selectedTest.id} / 35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
