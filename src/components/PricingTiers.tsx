"use client";

import React, { useState } from "react";
import { TallyButton } from "./TallyButton";
import {
  Check,
  Sparkles,
  Zap,
  GraduationCap,
  Building2,
  Layers,
  FlaskConical,
} from "lucide-react";

type Currency = "USD" | "EUR" | "INR";

export const PricingTiers: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const [currency, setCurrency] = useState<Currency>("USD");

  const pricingData = {
    USD: {
      symbol: "$",
      academicIndiv: { monthly: 199, annual: 159, annualTotal: "$1,908 / yr (Save $480)", flexPass: "$99" },
      academicLab: { monthly: 1200, annual: 960, annualTotal: "$11,520 / yr (Save $2,880)" },
      startupBiotech: { monthly: 4000, annual: 3200, annualTotal: "$38,400 / yr (Save $9,600)" },
      enterprise: { annualTotal: "$80,000 – $200,000+ / year" },
    },
    EUR: {
      symbol: "€",
      academicIndiv: { monthly: 179, annual: 149, annualTotal: "€1,788 / yr (Save €360)", flexPass: "€89" },
      academicLab: { monthly: 1099, annual: 899, annualTotal: "€10,788 / yr (Save €2,400)" },
      startupBiotech: { monthly: 3499, annual: 2899, annualTotal: "€34,788 / yr (Save €7,200)" },
      enterprise: { annualTotal: "€75,000 – €185,000+ / year" },
    },
    INR: {
      symbol: "₹",
      academicIndiv: { monthly: 5999, annual: 4999, annualTotal: "₹59,988 / yr (Save ₹12,000)", flexPass: "₹2,999" },
      academicLab: { monthly: 34999, annual: 29999, annualTotal: "₹3,59,988 / yr (Save ₹60,000)" },
      startupBiotech: { monthly: 129999, annual: 99999, annualTotal: "₹11,99,988 / yr (Save ₹3,60,000)" },
      enterprise: { annualTotal: "₹45,00,000 – ₹95,00,000+ / year" },
    },
  };

  const currentPrices = pricingData[currency];

  const tiers = [
    {
      name: "Academic / Individual",
      tagline:
        currency === "INR"
          ? "The no-brainer tier. Priced so a PhD student or postdoc can easily expense from contingency."
          : "Designed for single researchers, PhD students, and postdocs.",
      priceMonthly: currentPrices.academicIndiv.monthly,
      priceAnnual: currentPrices.academicIndiv.annual,
      annualTotal: currentPrices.academicIndiv.annualTotal,
      seats: "1 User Seat",
      badge: "MOST POPULAR FOR ACADEMIA",
      highlighted: true,
      icon: GraduationCap,
      features: [
        "Full Access to all 35 Computational Tests",
        "Boltz-2 Integration: FEP-class binding affinity scoring",
        "CHARA Scoring: 50 OOD transcriptomic runs / mo",
        "MSDD Pipeline: Up to 10 phantom target inversion runs / mo",
        "Unlimited Local GPU MD: GROMACS on your local silicon",
        "Standard JSON, PDB, SDF, and PDF export reports",
        "Community & researcher Discord support",
      ],
      formId: "kdBxYM",
    },
    {
      name: "Academic Lab",
      tagline:
        currency === "INR"
          ? "Priced to fit comfortably within standard Indian grant budgets (DST-SERB, ICMR, CSIR)."
          : "Designed for university research groups and lab PIs managing multiple students.",
      priceMonthly: currentPrices.academicLab.monthly,
      priceAnnual: currentPrices.academicLab.annual,
      annualTotal: currentPrices.academicLab.annualTotal,
      seats: "Up to 10 User Seats",
      badge: "GRANT CYCLE FRIENDLY",
      highlighted: false,
      icon: Layers,
      features: [
        "Everything in Individual Tier, plus:",
        "Shared Collaborative Workspace & real-time pose annotations",
        "Higher Limits: 500 CHARA runs & 100 MSDD runs / mo",
        "Automated Resistance Mutation Scanning (COSMIC / cBioPortal)",
        "Database Auto-Sync: PDB, ChEMBL, UniProt, GEO, TCGA",
        "Multi-GPU workstation daemon clustering",
        "Priority Discord & email technical access",
      ],
      formId: "kdBxYM",
    },
    {
      name: "Startup Biotech",
      tagline:
        currency === "INR"
          ? "Designed for biotechs in incubators (C-CAMP Bangalore, NCL Pune) escaping vendor lock-in."
          : "For early-stage biotechs (≤50 employees) actively preparing candidates for wet lab.",
      priceMonthly: currentPrices.startupBiotech.monthly,
      priceAnnual: currentPrices.startupBiotech.annual,
      annualTotal: currentPrices.startupBiotech.annualTotal,
      seats: "Up to 25 User Seats",
      badge: "PRODUCTION BIOTECH",
      highlighted: false,
      icon: FlaskConical,
      features: [
        "Everything in Academic Lab, plus:",
        "Closed-Loop AI DMTA Agent (Automated Failure Redesign)",
        "HIPAA / GDPR Zero-Retention Compliant by default",
        "Full IP Ownership (No Cloud Logging)",
        "Cloud Compute Fallback credits included",
        "IP / Patent Clearance Check (SureChEMBL / PatSnap)",
        "Custom CHARA Profiling on proprietary RNA-seq data",
        "Full Python SDK & REST API programmatic access",
      ],
      formId: "kdBxYM",
    },
    {
      name: "Enterprise Pharma",
      tagline: "For mid-to-large pharmaceutical companies requiring custom infrastructure.",
      priceMonthly: null,
      priceAnnual: null,
      annualTotal: currentPrices.enterprise.annualTotal,
      seats: "Unlimited User Seats",
      badge: "CUSTOM ON-PREM",
      highlighted: false,
      icon: Building2,
      features: [
        "Everything in Biotech, plus:",
        "Dedicated private cloud instance or On-Premises VPC",
        "Custom fine-tuning on proprietary compound libraries",
        "HIPAA / GDPR Zero-Retention Compliant by default",
        "Full IP Ownership (No Cloud Logging)",
        "Dedicated Customer Success Manager & custom roadmap",
        "Enterprise SLA with 99.99% uptime guarantee",
      ],
      formId: "kdBxYM",
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 relative bg-[#FCFCFC] dark:bg-[#090D16] border-t border-slate-200/60 dark:border-slate-800">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] clinical-glow rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-700/80 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grant-Friendly &amp; Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans mb-4">
            Transparent, Predictable Pricing.
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Designed for academic grant funding cycles and high-velocity biotechs. Never worry about
            runaway cloud GPU bills.
          </p>

          {/* Controls: Currency Switcher & Billing Frequency Toggle */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {/* Currency Selector */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100/90 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-inner">
              {(["USD", "EUR", "INR"] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold font-mono transition-all cursor-pointer ${
                    currency === cur
                      ? "bg-slate-900 dark:bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cur === "USD" ? "USD ($)" : cur === "EUR" ? "EUR (€)" : "INR (₹ - PPP)"}
                </button>
              ))}
            </div>

            {/* Billing Frequency Toggle */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-slate-100/90 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-inner">
              <button
                onClick={() => setAnnual(false)}
                className={`px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                  !annual
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  annual
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                }`}
              >
                <span>Annual</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[9px] sm:text-[10px] font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Location / PPP Notice */}
          {currency === "INR" && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] sm:text-xs font-medium animate-fade-in text-left sm:text-center">
              <span>🇮🇳</span>
              <span>
                <strong>PPP Pricing Enabled:</strong> Tailored for Indian universities, IITs, IISc, and DST/ICMR research grants.
              </span>
            </div>
          )}
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch mb-10 sm:mb-12">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const price = annual ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between bg-white dark:bg-slate-900 border ${
                  tier.highlighted
                    ? "border-2 border-blue-600 shadow-2xl shadow-blue-600/10 lg:-translate-y-2"
                    : "border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {/* Highlight Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase shadow-md shadow-blue-500/30 whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        tier.highlighted
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white font-sans leading-tight">
                        {tier.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-mono text-blue-700 dark:text-blue-400 font-semibold block">
                        {tier.seats}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 sm:mb-5 font-normal min-h-[30px] sm:min-h-[34px]">
                    {tier.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-slate-200/60 dark:border-slate-800">
                    {tier.priceMonthly !== null ? (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                            {currentPrices.symbol}{price?.toLocaleString()}
                          </span>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-sans">
                            / month
                          </span>
                        </div>
                        {annual && (
                          <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold block mt-0.5">
                            {tier.annualTotal}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight block">
                          Custom
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                          {tier.annualTotal}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-slate-400 dark:text-slate-500 block tracking-wider">
                      Included Capabilities:
                    </span>
                    {tier.features.map((feature, idx) => {
                      const isCompliance =
                        feature.includes("HIPAA") || feature.includes("Full IP Ownership");
                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2 text-xs ${
                            isCompliance
                              ? "font-semibold text-slate-900 dark:text-white bg-emerald-50/60 dark:bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60"
                              : "text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2 h-2 stroke-[3]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* All cards use the SAME primary electric blue Join Waitlist button */}
                <div className="pt-2">
                  <TallyButton
                    formId={tier.formId}
                    variant="primary"
                    size="md"
                    className="w-full justify-center text-xs"
                    emojiText="🔬"
                    emojiAnimation="wave"
                  >
                    Join Waitlist
                  </TallyButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pay-Per-Run Flex Pass Banner */}
        <div className="rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-white dark:bg-slate-900 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Pay-Per-Run Flex Pass
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-mono text-[9px] sm:text-[10px] font-bold">
                  {currentPrices.academicIndiv.flexPass} / RUN
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                {currency === "INR"
                  ? "For the occasional student who just needs data for their final thesis submission. No subscription required."
                  : "Need a single 35-test screening report for a manuscript or grant submission? No subscription required."}
              </span>
            </div>
          </div>

          <TallyButton
            formId="kdBxYM"
            variant="primary"
            size="sm"
            className="shrink-0 w-full sm:w-auto text-center"
          >
            Join Waitlist
          </TallyButton>
        </div>
      </div>
    </section>
  );
};
