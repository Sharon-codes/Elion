"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CompetitorComparison } from "@/components/CompetitorComparison";
import { BentoDifferentiators } from "@/components/BentoDifferentiators";
import { Pipeline35 } from "@/components/Pipeline35";
import { OpenSourceFoundation } from "@/components/OpenSourceFoundation";
import { PricingTiers } from "@/components/PricingTiers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] dark:bg-[#090D16] text-slate-900 dark:text-white transition-colors duration-300 relative">
      {/* 1. Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* 2. Hero Section with Zero-Trust Sub-headline & 3D Molecular Simulation */}
      <Hero />

      {/* 3. Competitor Comparison Table & 5 Core Moats */}
      <CompetitorComparison />

      {/* 4. The Differentiators (Bento Box: Local GPU, Security & IP Zero Retention, CHARA, MSDD) */}
      <BentoDifferentiators />

      {/* 5. The 35-Test Pipeline (Infinite Scrolling Marquee & Interactive Inspector) */}
      <Pipeline35 />

      {/* 6. Open Source Foundation (Peer-Reviewed Toolkits: msdd & chara-survival on PyPI) */}
      <OpenSourceFoundation />

      {/* 7. Transparent 4-Tier Pricing (USD, EUR, INR PPP) */}
      <PricingTiers />

      {/* 8. Homage Footer */}
      <Footer />
    </main>
  );
}
