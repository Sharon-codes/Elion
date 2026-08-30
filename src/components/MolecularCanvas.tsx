"use client";

import React, { useEffect, useRef } from "react";

export const MolecularCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse parallax offset
    let targetOffsetX = 0;
    let targetOffsetY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / width) * 2 - 1;
      const ny = (e.clientY / height) * 2 - 1;
      targetOffsetX = nx * 30;
      targetOffsetY = ny * 30;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Diagonal scroll offset tracker
    let scrollX = 0;
    let scrollY = 0;
    const speedX = 0.32; // diagonal drift speed X
    const speedY = 0.20; // diagonal drift speed Y

    // Large comprehensive tile dimensions (1600x1200) for rich random variation
    const tileWidth = 1600;
    const tileHeight = 1200;

    // Helper functions for authentic chemistry skeletal drawings
    const drawBenzene = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      radius: number,
      rotation: number = 0,
      withInnerCircle: boolean = true
    ) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = rotation + (i * Math.PI) / 3;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      if (withInnerCircle) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.58, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        for (let i = 0; i < 6; i += 2) {
          const a1 = rotation + (i * Math.PI) / 3 + 0.15;
          const a2 = rotation + ((i + 1) * Math.PI) / 3 - 0.15;
          const rInner = radius * 0.75;
          ctx.beginPath();
          ctx.moveTo(cx + rInner * Math.cos(a1), cy + rInner * Math.sin(a1));
          ctx.lineTo(cx + rInner * Math.cos(a2), cy + rInner * Math.sin(a2));
          ctx.stroke();
        }
      }
    };

    const drawQuinoline = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const dx = r * 1.5;
      drawBenzene(ctx, cx - dx * 0.5, cy, r, 0, false);
      drawBenzene(ctx, cx + dx * 0.5, cy, r, 0, false);

      ctx.beginPath();
      ctx.moveTo(cx - dx * 0.5 - r, cy - r * 0.5);
      ctx.lineTo(cx - dx * 0.5 - r - 16, cy - r * 0.5 - 8);
      ctx.moveTo(cx - dx * 0.5 - r, cy + r * 0.5);
      ctx.lineTo(cx - dx * 0.5 - r - 16, cy + r * 0.5 + 8);
      ctx.stroke();

      ctx.fillText("H₃CO", cx - dx * 0.5 - r - 50, cy - r * 0.5 - 4);
      ctx.fillText("H₃CO", cx - dx * 0.5 - r - 50, cy + r * 0.5 + 12);
      ctx.fillText("N", cx + dx * 0.5 + r * 0.2, cy + r * 0.95);
    };

    const drawIndole = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      drawBenzene(ctx, cx - r * 0.6, cy, r, 0, false);
      // 5-membered ring attached
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.6 + r * Math.cos(Math.PI / 3), cy - r * Math.sin(Math.PI / 3));
      ctx.lineTo(cx + r * 1.1, cy - r * 0.4);
      ctx.lineTo(cx + r * 1.1, cy + r * 0.4);
      ctx.lineTo(cx - r * 0.6 + r * Math.cos(-Math.PI / 3), cy - r * Math.sin(-Math.PI / 3));
      ctx.stroke();
      ctx.fillText("NH", cx + r * 0.7, cy + r * 0.9);
    };

    const drawFiveRing = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      radius: number,
      rotation: number = -Math.PI / 2
    ) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = rotation + (i * Math.PI * 2) / 5;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      const a1 = rotation + (1 * Math.PI * 2) / 5 + 0.15;
      const a2 = rotation + (2 * Math.PI * 2) / 5 - 0.15;
      ctx.beginPath();
      ctx.moveTo(cx + radius * 0.75 * Math.cos(a1), cy + radius * 0.75 * Math.sin(a1));
      ctx.lineTo(cx + radius * 0.75 * Math.cos(a2), cy + radius * 0.75 * Math.sin(a2));
      ctx.stroke();
    };

    const drawCyclobutane = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
      const half = size / 2;
      ctx.strokeRect(cx - half, cy - half, size, size);
      ctx.fillText("CH₂", cx - half - 26, cy - half - 4);
      ctx.fillText("CH₂", cx + half + 6, cy - half - 4);
      ctx.fillText("CH₂", cx - half - 26, cy + half + 14);
      ctx.fillText("CH₂", cx + half + 6, cy + half + 14);
    };

    const drawEtherLinkage = (ctx: CanvasRenderingContext2D, cx: number, cy: number) => {
      ctx.beginPath();
      ctx.moveTo(cx - 36, cy);
      ctx.lineTo(cx - 8, cy);
      ctx.moveTo(cx + 8, cy);
      ctx.lineTo(cx + 36, cy);
      // H spokes
      ctx.moveTo(cx - 24, cy - 20);
      ctx.lineTo(cx - 24, cy + 20);
      ctx.moveTo(cx + 24, cy - 20);
      ctx.lineTo(cx + 24, cy + 20);
      ctx.stroke();

      ctx.fillText("O", cx - 4, cy + 4);
      ctx.fillText("H", cx - 28, cy - 24);
      ctx.fillText("H", cx - 28, cy + 32);
      ctx.fillText("C₆H₅", cx + 14, cy - 24);
      ctx.fillText("H", cx + 20, cy + 32);
    };

    // Draw one huge comprehensive blueprint tile with 45+ distinct chemical structures
    const drawBlueprintTile = (ctx: CanvasRenderingContext2D, ox: number, oy: number) => {
      ctx.save();
      ctx.translate(ox, oy);

      // Default typography
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      // ================= SECTION 1: TOP-LEFT (0 to 800, 0 to 600) =================
      // 1. Phenol with OH & H2N
      drawBenzene(ctx, 90, 80, 26, 0, false);
      ctx.beginPath();
      ctx.moveTo(90 + 26, 80);
      ctx.lineTo(90 + 44, 80);
      ctx.moveTo(90, 80 - 26);
      ctx.lineTo(90, 80 - 42);
      ctx.stroke();
      ctx.fillText("OH", 90 + 48, 84);
      ctx.fillText("H₂N", 82, 80 - 46);
      ctx.fillText("H₂SiO₃ (R₃)ₙ", 30, 30);
      ctx.fillText("H₃PO₄", 175, 45);

      // 2. Alkene double bonds
      ctx.beginPath();
      ctx.moveTo(85, 175);
      ctx.lineTo(135, 175);
      ctx.moveTo(85, 180);
      ctx.lineTo(135, 180);
      // Spoke bonds
      ctx.moveTo(85, 175);
      ctx.lineTo(65, 155);
      ctx.moveTo(85, 180);
      ctx.lineTo(65, 200);
      ctx.moveTo(135, 175);
      ctx.lineTo(155, 155);
      ctx.moveTo(135, 180);
      ctx.lineTo(155, 200);
      ctx.stroke();
      ctx.fillText("H", 52, 153);
      ctx.fillText("H", 52, 212);
      ctx.fillText("H", 158, 153);
      ctx.fillText("H", 158, 212);
      ctx.fillText("H₂SO₃", 15, 170);
      ctx.fillText("HNO₂", 15, 192);

      // 3. Quinoline dimethoxy
      drawQuinoline(ctx, 220, 270, 26);
      ctx.fillText("OCH₃", 305, 195);
      ctx.fillText("H₂CO₃", 210, 140);

      // 4. Pyridine-3-carboxylic acid
      drawBenzene(ctx, 400, 250, 25, Math.PI / 6, false);
      ctx.beginPath();
      ctx.moveTo(400 + 25 * Math.cos(Math.PI / 6), 250 + 25 * Math.sin(Math.PI / 6));
      ctx.lineTo(400 + 48, 250 + 10);
      ctx.lineTo(400 + 62, 250 + 24);
      ctx.stroke();
      ctx.fillText("OH", 400 + 68, 250 + 28);
      ctx.fillText("=O", 400 + 50, 250 - 2);
      ctx.fillText("N", 396, 250 + 24);
      ctx.fillText("H₃PO₄", 470, 275);

      // 5. Pyrazole & phenyl
      drawFiveRing(ctx, 550, 110, 30);
      ctx.beginPath();
      ctx.moveTo(550 + 30, 110);
      ctx.lineTo(550 + 54, 100);
      ctx.moveTo(550 - 30, 110);
      ctx.lineTo(550 - 52, 120);
      ctx.stroke();
      ctx.fillText("N—C₆H₅", 550 + 58, 104);
      ctx.fillText("O=", 550 - 70, 124);
      ctx.fillText("C₆H₅", 515, 168);
      ctx.fillText("CH₃(CH₂)₃", 300, 65);

      // 6. Cyclobutane box
      drawCyclobutane(ctx, 680, 270, 52);

      // 7. Ether linkage
      drawEtherLinkage(ctx, 800, 75);

      // ================= SECTION 2: TOP-RIGHT (800 to 1600, 0 to 600) =================
      // 8. Toluene & methylbenzene
      drawBenzene(ctx, 950, 200, 28, 0, true);
      ctx.beginPath();
      ctx.moveTo(950, 200 - 28);
      ctx.lineTo(950, 200 - 50);
      ctx.stroke();
      ctx.fillText("CH₃", 938, 200 - 55);
      ctx.fillText("2 Al + 3S ⟶ Al₂S₃", 640, 160);
      ctx.fillText("4 Li + O₂ ⟶ 2 Li₂O", 640, 185);
      ctx.fillText("2 KClO₃ ⟶ 2 KCl + 3 O₂", 640, 210);

      // 9. Indole Core (Bicyclic heterocycle)
      drawIndole(ctx, 1150, 160, 26);
      ctx.fillText("CH₂—CH(NH₂)—COOH", 1120, 95);
      ctx.fillText("Tryptophan Scaffold", 1120, 75);

      // 10. Purine Nucleotide skeleton
      drawBenzene(ctx, 1380, 170, 26, Math.PI / 6, false);
      drawFiveRing(ctx, 1425, 170, 24, Math.PI / 2);
      ctx.fillText("Adenine / Purine Core", 1320, 120);
      ctx.fillText("NH₂", 1374, 130);

      // 11. Sulfonamide Derivative
      ctx.fillText("NaOSCH₂", 620, 360);
      ctx.fillText("N(CH₃)₂", 660, 390);
      drawFiveRing(ctx, 820, 420, 32);
      ctx.fillText("N—CH₃", 860, 430);

      // ================= SECTION 3: BOTTOM-LEFT (0 to 800, 600 to 1200) =================
      // 12. Benzene ring with radiating hydrogens
      drawBenzene(ctx, 480, 420, 30, 0, false);
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(480 + 30 * Math.cos(a), 420 + 30 * Math.sin(a));
        ctx.lineTo(480 + 44 * Math.cos(a), 420 + 44 * Math.sin(a));
        ctx.stroke();
        ctx.fillText("H", 480 + 48 * Math.cos(a) - 4, 420 + 48 * Math.sin(a) + 4);
      }

      // 13. Pyridine ring with OH & H2N (Vitamin B6 derivative)
      drawBenzene(ctx, 120, 620, 27, Math.PI / 6, false);
      ctx.beginPath();
      ctx.moveTo(120 + 27 * Math.cos(Math.PI / 6), 620 + 27 * Math.sin(Math.PI / 6));
      ctx.lineTo(120 + 45, 620 + 15);
      ctx.moveTo(120, 620 + 27);
      ctx.lineTo(120, 620 + 45);
      ctx.stroke();
      ctx.fillText("HNO₃", 40, 580);
      ctx.fillText("CH₃", 160, 580);
      ctx.fillText("OH", 170, 640);
      ctx.fillText("H₂N", 80, 680);

      // 14. Second Quinoline Core with Methanol
      drawQuinoline(ctx, 190, 840, 25);
      ctx.fillText("OCH₃", 270, 770);
      drawBenzene(ctx, 400, 780, 24, 0, false);

      // 15. D-Peptide Chiral Inversion schematic
      drawFiveRing(ctx, 550, 720, 30);
      drawCyclobutane(ctx, 680, 840, 48);

      // 16. Branched Isoquinoline
      drawQuinoline(ctx, 180, 1080, 26);
      drawBenzene(ctx, 440, 1020, 28, 0, false);

      // ================= SECTION 4: BOTTOM-RIGHT (800 to 1600, 600 to 1200) =================
      // 17. Multi-ring steroid / Terpene polycycle skeleton
      drawBenzene(ctx, 980, 700, 26, 0, false);
      drawBenzene(ctx, 1025, 700, 26, 0, false);
      drawBenzene(ctx, 1070, 700, 26, 0, false);
      drawFiveRing(ctx, 1115, 700, 24, Math.PI / 2);
      ctx.fillText("Steroid Tetracyclic Backbone (ABCD Rings)", 930, 650);

      // 18. Beta-lactam antibiotic ring
      ctx.strokeRect(1280, 680, 38, 38);
      drawFiveRing(ctx, 1345, 700, 24, 0);
      ctx.fillText("O=", 1255, 705);
      ctx.fillText("S", 1340, 685);
      ctx.fillText("Penicillin Core Scaffold", 1240, 650);

      // 19. Phosphate backbone DNA link
      ctx.beginPath();
      ctx.moveTo(960, 920);
      ctx.lineTo(1020, 920);
      ctx.lineTo(1050, 960);
      ctx.lineTo(1110, 960);
      ctx.stroke();
      ctx.fillText("—O—P(O)₂—O—CH₂—", 940, 910);
      ctx.fillText("Phosphodiester Bond", 960, 945);

      // 20. Furan & Thiophene rings
      drawFiveRing(ctx, 1320, 920, 28, -Math.PI / 2);
      ctx.fillText("O", 1316, 925);
      ctx.fillText("Furan Heterocycle", 1270, 970);

      drawFiveRing(ctx, 1480, 920, 28, -Math.PI / 2);
      ctx.fillText("S", 1476, 925);
      ctx.fillText("Thiophene", 1445, 970);

      // 21. Macrocyclic Peptide Ring Loop
      drawBenzene(ctx, 1050, 1100, 30, 0, true);
      drawBenzene(ctx, 1250, 1100, 30, 0, true);
      drawBenzene(ctx, 1450, 1100, 30, 0, true);

      // ================= BALANCED REACTIONS & CHEMICAL EQUATIONS =================
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      // Column 1
      ctx.fillText("2 H₂O  ⟶  2 H₂ + O₂", 220, 340);
      ctx.fillText("2 Cu + O₂  ⟶  2 CuO", 220, 370);
      ctx.fillText("HCl + NaOH  ⟶  NaCl + H₂O", 420, 30);
      ctx.fillText("Zn + 2HCl  ⟶  ZnCl₂ + H₂", 580, 360);
      ctx.fillText("2 H₂O  ⟶  2 H₂ + O₂", 220, 910);
      ctx.fillText("2 Cu + O₂  ⟶  2 CuO", 220, 940);
      ctx.fillText("Zn + 2HCl  ⟶  ZnCl₂ + H₂", 600, 930);
      ctx.fillText("HCl + NaOH  ⟶  NaCl + H₂O", 430, 600);

      // Column 2
      ctx.fillText("4 Li + O₂  ⟶  2 Li₂O", 780, 170);
      ctx.fillText("2 KClO₃  ⟶  2 KCl + 3 O₂", 780, 200);
      ctx.fillText("CH₄ + 2 O₂  ⟶  CO₂ + 2 H₂O", 880, 320);
      ctx.fillText("CaCO₃  ⟶  CaO + CO₂", 880, 350);
      ctx.fillText("Fe₂O₃ + 3 CO  ⟶  2 Fe + 3 CO₂", 1120, 360);
      ctx.fillText("C₆H₁₂O₆ + 6 O₂  ⟶  6 CO₂ + 6 H₂O", 1250, 480);
      ctx.fillText("2 Na + 2 H₂O  ⟶  2 NaOH + H₂", 880, 820);
      ctx.fillText("N₂ + 3 H₂  ⟶  2 NH₃  (Haber-Bosch)", 1120, 840);

      // ================= COMPUTATIONAL BIOPHYSICS & PHARMACOLOGY FORMULAS =================
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("ΔG_bind = ΔH - TΔS = -12.4 kcal/mol", 520, 190);
      ctx.fillText("L = D - A  (MoA λ₁ > 0.90)", 540, 220);
      ctx.fillText("χ: (x, y, z) ⟶ (-x, -y, -z) [D-Peptide Inversion]", 510, 520);
      ctx.fillText("Boltz-2 FEP  ΔΔG < -11.8 kcal/mol", 120, 520);
      ctx.fillText("ĤΨ = EΨ  (DFT B3LYP-D3 / RESP)", 890, 520);
      ctx.fillText("RMSD < 0.35 Å  @ 100ns Explicit MD", 1260, 280);
      ctx.fillText("IC₅₀ = 4.2 nM  (hERG Safety Class 0)", 1260, 310);
      ctx.fillText("Kd = [P][L] / [PL]  (Sub-nanomolar)", 880, 870);
      ctx.fillText("GROMACS 2024.1 CUDA Kernel (142 ns/day)", 1120, 890);
      ctx.fillText("pLDDT > 92.4  (AlphaFold/ESMFold holo)", 520, 1140);
      ctx.fillText("ΔG_solv = ΔG_el + ΔG_np  (MM-GBSA)", 880, 1140);

      ctx.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update diagonal scroll position continuously
      scrollX = (scrollX + speedX) % tileWidth;
      scrollY = (scrollY + speedY) % tileHeight;

      // Smooth parallax interpolation
      currentOffsetX += (targetOffsetX - currentOffsetX) * 0.05;
      currentOffsetY += (targetOffsetY - currentOffsetY) * 0.05;

      const isDarkMode = document.documentElement.classList.contains("dark");

      if (isDarkMode) {
        ctx.strokeStyle = "rgba(96, 165, 250, 0.17)";
        ctx.fillStyle = "rgba(147, 197, 253, 0.19)";
      } else {
        ctx.strokeStyle = "rgba(37, 99, 235, 0.15)";
        ctx.fillStyle = "rgba(30, 58, 138, 0.17)";
      }
      ctx.lineWidth = 1.35;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Cover whole viewport with diagonal drifting tiles
      const startX = -tileWidth + (scrollX + currentOffsetX) % tileWidth;
      const startY = -tileHeight + (scrollY + currentOffsetY) % tileHeight;

      for (let x = startX - tileWidth; x < width + tileWidth * 2; x += tileWidth) {
        for (let y = startY - tileHeight; y < height + tileHeight * 2; y += tileHeight) {
          drawBlueprintTile(ctx, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-90 transition-opacity duration-700"
      />
    </div>
  );
};
