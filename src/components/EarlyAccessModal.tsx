"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export const EarlyAccessModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-elion-modal", handleOpenModal);
    return () => window.removeEventListener("open-elion-modal", handleOpenModal);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl h-[85vh] max-h-[750px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 z-10" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-tight text-slate-950 dark:text-white font-sans">
              ELION
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>RESEARCH ALPHA WAITLIST</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Embedded Tally Form */}
        <div className="flex-1 w-full h-full relative bg-transparent overflow-hidden">
          <iframe
            data-tally-src="https://tally.so/r/kdBxYM?transparentBackground=1&formEventsForwarding=1"
            src="https://tally.so/r/kdBxYM?transparentBackground=1&formEventsForwarding=1"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Elion Platform Waitlist"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
