"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#070B14] border-t border-slate-200/80 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          {/* Col 1: Brand & Homage */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white font-sans">
                ELION
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Physics-grounded 35-test computational drug screening pipeline running directly on local
              GPUs. Zero cloud compute markups, zero data leakage.
            </p>

            {/* Subtle Homage Text */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 max-w-sm">
              <p className="text-[11px] text-slate-600 dark:text-slate-300 italic leading-relaxed">
                “Inspired by <strong className="text-slate-800 dark:text-white not-italic">Gertrude Belle Elion</strong> (1918–1999), Nobel laureate and pioneer of rational drug design. Built for the next generation of computational pharmacologists.”
              </p>
            </div>
          </div>

          {/* Col 2: Product & Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Client GPU Daemon
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Zero-Retention Security
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  MSDD D-Peptide Inversion
                </Link>
              </li>
              <li>
                <Link href="#pipeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  35-Gate Pipeline
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Competitor Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Peer-Reviewed Toolkits */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Open Toolkits
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://pypi.org/project/msdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>msdd (PyPI)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://pypi.org/project/chara-survival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>chara-survival (PyPI)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Academic Licensing
                </Link>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  35-Test Specification
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Zero-Trust Policy
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Zero-Retention Certified</span>
              </li>
              <li className="text-slate-500 dark:text-slate-400">Local CUDA 12.4+ Execution</li>
              <li className="text-slate-500 dark:text-slate-400">Apple Silicon Metal 3 Support</li>
              <li className="text-slate-500 dark:text-slate-400">Airgapped Local Storage</li>
              <li className="text-slate-500 dark:text-slate-400">Zero Cloud Ingress / Egress</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with ONLY copyright */}
        <div className="pt-8 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Elion Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
