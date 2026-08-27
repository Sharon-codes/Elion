<div align="center">

# 🔬 ELION
### End-to-End AI Drug Discovery. Running on Your Local GPU.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://elion-three.vercel.app)
[![PyPI - msdd](https://img.shields.io/badge/PyPI-msdd-3775A9?style=flat-square&logo=pypi)](https://pypi.org/project/msdd/)
[![PyPI - chara--survival](https://img.shields.io/badge/PyPI-chara--survival-3775A9?style=flat-square&logo=pypi)](https://pypi.org/project/chara-survival/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

**[Explore Live Demo](https://elion-three.vercel.app)** • **[Join Waitlist](https://elion-three.vercel.app/waitlist)** • **[Documentation](#-the-35-gate-computational-pipeline)**

</div>

---

## 📌 Overview

**Elion** is an enterprise-grade computational drug discovery platform engineered for academic laboratories and high-velocity biotechnology startups. Named in homage to **Gertrude Belle Elion** (Nobel Laureate, 1988), the platform unifies physics-grounded molecular dynamics with state-of-the-art machine learning models—running computationally intensive simulations directly on the researcher's local GPU silicon.

By combining zero-trust local execution with an exhaustive **35-gate biophysical validation pipeline**, Elion eliminates runaway cloud compute fees while guaranteeing that proprietary molecular structures and target datasets never leave your workstation.

---

## ⚡ The 5 Core Moats

```
                                  ┌─────────────────────────────┐
                                  │      ELION ARCHITECTURE     │
                                  └──────────────┬──────────────┘
                                                 │
      ┌──────────────────┬───────────────────────┼───────────────────────┬──────────────────┐
      ▼                  ▼                       ▼                       ▼                  ▼
┌───────────┐      ┌───────────┐           ┌───────────┐           ┌───────────┐      ┌───────────┐
│ Client GPU│      │   CHARA   │           │Native MSDD│           │ Closed-Loop│     │Resistance │
│ Dispatch  │      │  Module   │           │ Inversion │           │ AI DMTA   │      │Screening  │
└─────┬─────┘      └─────┬─────┘           └─────┬─────┘           └─────┬─────┘      └─────┬─────┘
      │                  │                       │                       │                  │
 0.00$ Cloud        λ₁ > 0.90 OOD           (x,y,z) → (-x,-y,-z)    Substructure       Clinical
 Egress Cost        MoA Stability           D-Peptide Design        Toxicophore Fix    Mutant Panel
```

1. **Client GPU Dispatch (`$0.00 Compute Egress`)**: Routes heavy 100ns explicit solvent Molecular Dynamics (GROMACS/OpenMM) directly to local lab GPUs (NVIDIA RTX 4090 / A100 / Apple Metal), bypassing expensive cloud HPC instances.
2. **CHARA Module (`OOD Genomic Validation`)**: Evaluates mechanism-of-action transcriptomic generalizability across out-of-distribution clinical cohorts using thermodynamic graph Laplacians ($L = D - A$).
3. **Native MSDD (`Phantom Target Inversion`)**: Automated chiral coordinate reflection for designing proteolytically stable, mirror-image D-peptide therapeutics.
4. **Closed-Loop AI DMTA Agent (`Autonomous Redesign`)**: When a candidate fails a test gate (e.g., high hERG cardiotoxicity or low solubility), the neural DMTA agent isolates the failing toxicophore, prompts generative scaffold morphing, and automatically dispatches re-testing.
5. **Resistance Pre-Screening (`Out-of-the-Box Clinical Mutants`)**: Automatically evaluates candidates against high-frequency oncology gatekeeper mutations (e.g., EGFR T790M/C797S, BCL-2 G101V, KRAS G12C/D) before wet-lab synthesis.

---

## 🧬 The 35-Gate Computational Pipeline

Every small molecule and peptide candidate must pass 35 non-negotiable biophysical, thermodynamic, and safety criteria:

<details open>
<summary><b>Stage 1: Target & Cryptic Pocket Discovery (Gates #01–#08)</b></summary>

| Gate | Validation Target | Engine / Algorithm | Strict Pass Threshold |
| :--- | :--- | :--- | :--- |
| **#01** | Cryptic Pocket Expansion | PocketMiner + MD | Volume > 450 Å³ |
| **#02** | Hydration Free Energy Mapping | 3D-RISM / WaterMap | Unfavorable Water $\Delta G > +2.8\text{ kcal/mol}$ |
| **#03** | Phantom Target Inversion (MSDD) | Elion Mirror Engine | Chiral Inversion RMSD $< 0.05\text{ \AA}$ |
| **#04** | Coordinate Refinement | ESMFold v2 + OpenMM | pLDDT Confidence $> 88.5$ |
| **#05** | Allosteric Network Centrality | Dynamic Cross-Correlation | Betweenness Centrality $> 0.72$ |
| **#06** | Poisson-Boltzmann Electrostatics | APBS / PDB2PQR | Surface Gradient $\pm 5.0\text{ }k_BT/e$ |
| **#07** | Induced-Fit Flexibility | CONCOORD Geometric MD | Backbone RMSF $< 2.1\text{ \AA}$ |
| **#08** | Cryptic H-Bond Density | GRID Interaction Field | Spatial Affinity $< -6.2\text{ kcal/mol}$ |

</details>

<details open>
<summary><b>Stage 2: High-Precision Docking & FEP (Gates #09–#17)</b></summary>

| Gate | Validation Target | Engine / Algorithm | Strict Pass Threshold |
| :--- | :--- | :--- | :--- |
| **#09** | Lamarckian GA Flexible Docking | AutoDock-GPU v1.5 | Binding Energy $< -9.5\text{ kcal/mol}$ |
| **#10** | Boltz-2 Free Energy Perturbation | Boltz-2 Native Core | Relative $\Delta\Delta G < -11.8\text{ kcal/mol}$ |
| **#11** | MM-GBSA Continuum Solvation | AmberTools MMPBSA.py | Enthalpic $\Delta H_{\text{bind}} < -35.2\text{ kcal/mol}$ |
| **#12** | Quantum RESP Charge Derivation | Antechamber HF/6-31G* | Charge RMSD $< 0.02\text{ }e$ |
| **#13** | Covalent Warhead Trajectory | CovalentDock Core | Distance $d < 3.4\text{ \AA}$, $\theta = 109.5^\circ$ |
| **#14** | Induced-Fit Sidechain Ensemble | Rosetta FlexPepDock | Interface Energy Score $I_{\text{sc}} < -8.5\text{ REU}$ |
| **#15** | Water-Mediated Bridging Contacts | BridgeWater GPU | Bridging $\Delta G_w < -2.1\text{ kcal/mol}$ |
| **#16** | 3D Pharmacophore Isomorphism | RDKit 3D Pharmacophore | Tanimoto Combo Score $> 1.65 / 2.0$ |
| **#17** | Conformational Strain Free Energy | DFT / B3LYP-D3 | $\Delta G_{\text{strain}} < 3.5\text{ kcal/mol}$ |

</details>

<details open>
<summary><b>Stage 3: 100ns Explicit Solvent Molecular Dynamics (Gates #18–#25)</b></summary>

| Gate | Validation Target | Engine / Algorithm | Strict Pass Threshold |
| :--- | :--- | :--- | :--- |
| **#18** | 100ns Explicit Solvent MD | GROMACS 2024 (CUDA) | Heavy Atom RMSD $< 1.8\text{ \AA}$ @ 100ns |
| **#19** | Backbone RMSD / RMSF Convergence | MDAnalysis CUDA | Fluctuation Plateau $< 1.5\text{ \AA}$ |
| **#20** | Interfacial H-Bond Lifetime | MDTraj + Local Daemon | Occupancy $> 75\%$ Trajectory |
| **#21** | Buried Surface Area (SASA) | FreeSASA Native | Hydrophobic Burial $> 780\text{ \AA}^2$ |
| **#22** | Markov State Transition Analysis | PyEMMA / MSM Core | Eigenvalue Gap $\tau > 50\text{ ns}$ |
| **#23** | Contact Desolvation Free Energy | Lie Free Energy (LRA) | $\Delta G_{\text{desolv}} < -14.2\text{ kcal/mol}$ |
| **#24** | Salt-Bridge Electrostatic Resilience | VMD Timeline / GROMACS | Distance $d < 3.8\text{ \AA}$ ($> 90\%$ time) |
| **#25** | Radius of Gyration (Rg) Compactness | OpenMM Trajectory Analyzer | Standard Deviation $\sigma(Rg) < 0.35\text{ \AA}$ |

</details>

<details open>
<summary><b>Stage 4: ADMET, Transcriptomics, Resistance & Synthesis (Gates #26–#35)</b></summary>

| Gate | Validation Target | Engine / Algorithm | Strict Pass Threshold |
| :--- | :--- | :--- | :--- |
| **#26** | CHARA OOD Transcriptomic Robustness | CHARA Laplacian Core | MoA Generalization $\lambda_1 > 0.90$ (PASS) |
| **#27** | ADMETlab 3.0 Full Toxicity Profile | ADMETlab 3.0 Core | Safety Class 0 (Non-Toxic) |
| **#28** | hERG Cardiotoxicity Channel | DeepChem + CardioTox | $\text{IC}_{50} > 30\text{ }\mu\text{M}$ (Safe) |
| **#29** | Blood-Brain Barrier (BBB) Permeability | DeepChem + LogBB | $\text{LogBB} > 0.3$ (Permeable) |
| **#30** | Cytochrome P450 5-Isoform Panel | CYP-Predictor Ensemble | $< 25\%$ Inhibition @ $10\text{ }\mu\text{M}$ |
| **#31** | Metabolic Clearance & PPB | ADMET-AI PPB Classifier | $f_u > 2.5\%$, $\text{Cl}_{\text{int}} < 15\text{ mL/min/kg}$ |
| **#32** | Resistance Pre-Screening: EGFR | AutoDock-GPU Mutational Grid | T790M/C797S $\Delta\Delta G < +0.8\text{ kcal/mol}$ |
| **#33** | Resistance Pre-Screening: BCL-2/KRAS | Boltz-2 Mutant Profiler | G101V/G12D $K_d < 15\text{ nM}$ |
| **#34** | Closed-Loop AI DMTA Failure Redesign | Elion DMTA Agent | Substructure Toxicophore Fix (PASS) |
| **#35** | Retrosynthetic Accessibility & Cost | AiZynthFinder (MCTS) | SAScore $< 3.2$ ($\le 6\text{ steps}$) |

</details>

---

## 📦 Open Source PyPI Toolkits

Elion is built upon open, transparent scientific foundations. You can install our standalone Python packages directly from PyPI:

```bash
# Install the core Elion open-source bio-computational packages
pip install msdd chara-survival
```

- **[`msdd`](https://pypi.org/project/msdd/)**: Python package for automated mirror-image peptide design, coordinate inversion, and chiral docking parameter generation.
- **[`chara-survival`](https://pypi.org/project/chara-survival/)**: Thermodynamic graph Laplacian package for evaluating mechanism-of-action robustness across out-of-distribution (OOD) transcriptomic datasets.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, full type-safety)
- **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/) with class-based Light / Dark theme system
- **3D Molecular Visualization**: Custom interactive Three.js-powered molecular orbital canvas
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS GPU keyframes & [Framer Motion](https://www.framer.com/motion/)
- **Waitlist Integration**: [Tally.so](https://tally.so/) full-page responsive embed

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sharon-codes/Elion.git
cd Elion

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start local production server
npm run start
```

---

## 📄 License & Attribution

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

> *“Inspired by **Gertrude Belle Elion** (1918–1999), Nobel laureate and pioneer of rational drug design. Built for the next generation of computational pharmacologists.”*
