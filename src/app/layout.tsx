import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

export const metadata: Metadata = {
  title: "Elion | End-to-End AI Drug Discovery on Your Local GPU",
  description:
    "A 35-test computational screening pipeline featuring native D-Peptide inversion and OOD transcriptomic robustness. Zero-trust local execution ensures your proprietary structures never leave your hardware. Academic pricing, zero cloud compute fees.",
  keywords: [
    "AI drug discovery",
    "Molecular Dynamics",
    "GROMACS GPU",
    "D-peptide design",
    "AutoDock-GPU",
    "Boltz-2",
    "CHARA module",
    "ADMETlab 3.0",
    "Gertrude Belle Elion",
  ],
  authors: [{ name: "Elion Team" }],
  openGraph: {
    title: "Elion | End-to-End AI Drug Discovery on Your Local GPU",
    description:
      "A 35-test computational screening pipeline featuring native D-Peptide inversion and OOD transcriptomic robustness.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-[#F8F9FA] dark:bg-[#090D16] text-slate-900 dark:text-white selection:bg-blue-100 selection:text-blue-900 min-h-screen">
        {children}
        <EarlyAccessModal />
        {/* Tally.so Official Embed Script */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
