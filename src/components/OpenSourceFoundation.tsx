"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Code2,
  Terminal,
  Copy,
  Check,
  Package,
  ArrowRight,
} from "lucide-react";

export const OpenSourceFoundation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const installCommand = "pip install msdd chara-survival";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const packages = [
    {
      name: "msdd",
      tagline: "Native D-Peptide Design & Phantom Target Inversion",
      description:
        "Open-source Python toolkit for mirror-image peptide drug discovery. Automates coordinate reflection, chiral pocket remodeling, and Lamarckian genetic docking parameter generation.",
      pypiUrl: "https://pypi.org/project/msdd/",
      version: "v0.3.4",
      license: "MIT",
      language: "Python / Cython",
      topics: ["d-peptides", "mirror-docking", "computational-biology", "autodock-gpu", "structural-bio"],
      iconColor: "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700",
    },
    {
      name: "chara-survival",
      tagline: "Thermodynamic Graph Laplacian Transcriptomic Robustness",
      description:
        "Mathematical framework for evaluating mechanism-of-action stability across out-of-distribution (OOD) single-cell gene expression perturbation datasets.",
      pypiUrl: "https://pypi.org/project/chara-survival/",
      version: "v0.2.1",
      license: "Apache 2.0",
      language: "Python / PyTorch",
      topics: ["transcriptomics", "graph-laplacian", "spectral-graph", "single-cell", "ood-generalization"],
      iconColor: "bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-slate-700",
    },
  ];

  return (
    <section id="opensource" className="py-16 sm:py-24 relative bg-[#F8F9FA] dark:bg-[#090D16] overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 teal-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Open Science &amp; Peer-Reviewed Toolkits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            Built by Researchers. Grounded in Open Source.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            We don’t believe in black-box science. Elion orchestrates the rigorous computational
            principles and mathematical frameworks we’ve published on PyPI for the scientific
            community.
          </p>
        </div>

        {/* 2 PyPI Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 rounded-2xl ${pkg.iconColor} flex items-center justify-center shadow-xs`}>
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {pkg.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold border border-blue-200/60 dark:border-blue-800">
                          {pkg.version}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{pkg.tagline}</span>
                    </div>
                  </div>

                  <a
                    href={pkg.pypiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/60 dark:border-slate-700 transition-colors"
                    aria-label={`View ${pkg.name} on PyPI`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pkg.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-medium"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[11px]">
                    {pkg.license} License
                  </span>
                  <span>•</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{pkg.language}</span>
                </div>

                <a
                  href={pkg.pypiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 group/link"
                >
                  <span>View on PyPI</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CLI Terminal Bar - Clean Light Mode & Dark Mode */}
        <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 max-w-3xl mx-auto shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white block">
                  Install Published Packages via pip
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Direct PyPI distribution for academic and commercial bioinformatics pipelines.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3.5 py-2 rounded-xl font-mono text-xs border border-slate-200 dark:border-slate-700 shadow-xs">
              <span className="text-blue-600 dark:text-blue-400 font-bold">$</span>
              <code className="text-slate-800 dark:text-slate-200 font-semibold select-all truncate max-w-[280px] sm:max-w-xs">
                pip install msdd chara-survival
              </code>
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-1 cursor-pointer"
                title="Copy install command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
