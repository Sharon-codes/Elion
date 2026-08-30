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

    // Diagonal scroll offset tracker - continuous smooth drift unaffected by page scrolling
    let scrollX = 0;
    let scrollY = 0;
    const speedX = 0.28; // gentle diagonal drift speed X
    const speedY = 0.16; // gentle diagonal drift speed Y

    // Large comprehensive non-overlapping tile dimensions (1600x1200)
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

      ctx.fillText("H₃CO", cx - dx * 0.5 - r - 48, cy - r * 0.5 - 4);
      ctx.fillText("H₃CO", cx - dx * 0.5 - r - 48, cy + r * 0.5 + 12);
      ctx.fillText("N", cx + dx * 0.5 + r * 0.2, cy + r * 0.95);
    };

    const drawIndole = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      drawBenzene(ctx, cx - r * 0.6, cy, r, 0, false);
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.6 + r * Math.cos(Math.PI / 3), cy - r * Math.sin(Math.PI / 3));
      ctx.lineTo(cx + r * 1.1, cy - r * 0.4);
      ctx.lineTo(cx + r * 1.1, cy + r * 0.4);
      ctx.lineTo(cx - r * 0.6 + r * Math.cos(-Math.PI / 3), cy - r * Math.sin(-Math.PI / 3));
      ctx.stroke();
      ctx.fillText("NH", cx + r * 0.65, cy + r * 0.9);
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

    // Draw perfectly spaced, non-overlapping 12-cell blueprint grid (4x3 cells, each 400x400)
    const drawBlueprintTile = (ctx: CanvasRenderingContext2D, ox: number, oy: number) => {
      ctx.save();
      ctx.translate(ox, oy);

      // ================= ROW 0 (y: 0 to 400) =================
      // Cell (0,0): Phenol + Aminophenol
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawBenzene(ctx, 180, 180, 26, 0, false);
      ctx.beginPath();
      ctx.moveTo(180 + 26, 180);
      ctx.lineTo(180 + 44, 180);
      ctx.moveTo(180, 180 - 26);
      ctx.lineTo(180, 180 - 42);
      ctx.stroke();
      ctx.fillText("OH", 180 + 48, 184);
      ctx.fillText("H₂N", 172, 180 - 46);
      ctx.fillText("H₂SiO₃ (R₃)ₙ", 60, 60);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 H₂O  ⟶  2 H₂ + O₂", 60, 340);

      // Cell (1,0): Pyridine-3-Carboxylic Acid
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawBenzene(ctx, 580, 180, 25, Math.PI / 6, false);
      ctx.beginPath();
      ctx.moveTo(580 + 25 * Math.cos(Math.PI / 6), 180 + 25 * Math.sin(Math.PI / 6));
      ctx.lineTo(580 + 48, 180 + 10);
      ctx.lineTo(580 + 62, 180 + 24);
      ctx.stroke();
      ctx.fillText("OH", 580 + 68, 180 + 28);
      ctx.fillText("=O", 580 + 50, 180 - 2);
      ctx.fillText("N", 576, 180 + 24);
      ctx.fillText("CH₃(CH₂)₃", 460, 60);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("HCl + NaOH  ⟶  NaCl + H₂O", 440, 340);

      // Cell (2,0): Pyrazole + Phenyl
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawFiveRing(ctx, 980, 180, 28);
      ctx.beginPath();
      ctx.moveTo(980 + 28, 180);
      ctx.lineTo(980 + 50, 170);
      ctx.moveTo(980 - 28, 180);
      ctx.lineTo(980 - 48, 190);
      ctx.stroke();
      ctx.fillText("N—C₆H₅", 980 + 54, 174);
      ctx.fillText("O=", 980 - 64, 194);
      ctx.fillText("H₃PO₄", 860, 60);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 Cu + O₂  ⟶  2 CuO", 860, 340);

      // Cell (3,0): Ether Linkage
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawEtherLinkage(ctx, 1380, 180);
      ctx.fillText("H₂SO₄", 1260, 60);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("4 Li + O₂  ⟶  2 Li₂O", 1260, 340);

      // ================= ROW 1 (y: 400 to 800) =================
      // Cell (0,1): Dimethoxy Quinoline
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawQuinoline(ctx, 200, 580, 25);
      ctx.fillText("OCH₃", 80, 460);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("Zn + 2HCl  ⟶  ZnCl₂ + H₂", 60, 740);

      // Cell (1,1): Cyclobutane
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawCyclobutane(ctx, 580, 580, 50);
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("ΔG_bind = -12.4 kcal/mol", 460, 460);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 Al + 3S  ⟶  Al₂S₃", 460, 740);

      // Cell (2,1): Benzene with 6 C-H Spokes
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawBenzene(ctx, 980, 580, 28, 0, false);
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(980 + 28 * Math.cos(a), 580 + 28 * Math.sin(a));
        ctx.lineTo(980 + 40 * Math.cos(a), 580 + 40 * Math.sin(a));
        ctx.stroke();
        ctx.fillText("H", 980 + 44 * Math.cos(a) - 4, 580 + 44 * Math.sin(a) + 4);
      }
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("L = D - A  (λ₁ > 0.90)", 860, 460);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 KClO₃  ⟶  2 KCl + 3 O₂", 860, 740);

      // Cell (3,1): Indole (Tryptophan Core)
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawIndole(ctx, 1380, 580, 26);
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("χ: (x,y,z) ⟶ (-x,-y,-z)", 1260, 460);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("CH₄ + 2 O₂  ⟶  CO₂ + 2 H₂O", 1240, 740);

      // ================= ROW 2 (y: 800 to 1200) =================
      // Cell (0,2): Alkene Chain
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.beginPath();
      ctx.moveTo(160, 980);
      ctx.lineTo(210, 980);
      ctx.moveTo(160, 985);
      ctx.lineTo(210, 985);
      ctx.moveTo(160, 980);
      ctx.lineTo(140, 960);
      ctx.moveTo(160, 985);
      ctx.lineTo(140, 1005);
      ctx.moveTo(210, 980);
      ctx.lineTo(230, 960);
      ctx.moveTo(210, 985);
      ctx.lineTo(230, 1005);
      ctx.stroke();
      ctx.fillText("H", 128, 958);
      ctx.fillText("H", 128, 1018);
      ctx.fillText("H", 234, 958);
      ctx.fillText("H", 234, 1018);
      ctx.fillText("HNO₃", 60, 860);
      ctx.fillText("H₂CO₃", 240, 860);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("CaCO₃  ⟶  CaO + CO₂", 60, 1140);

      // Cell (1,2): Purine / Adenine
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawBenzene(ctx, 560, 980, 24, Math.PI / 6, false);
      drawFiveRing(ctx, 605, 980, 22, Math.PI / 2);
      ctx.fillText("NH₂", 554, 942);
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("Boltz-2 FEP  ΔΔG < -11.8", 460, 860);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("Fe₂O₃ + 3 CO  ⟶  2 Fe + 3 CO₂", 440, 1140);

      // Cell (2,2): Beta-Lactam / Penicillin Core
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.strokeRect(950, 960, 36, 36);
      drawFiveRing(ctx, 1015, 978, 24, 0);
      ctx.fillText("O=", 925, 982);
      ctx.fillText("S", 1010, 965);
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("ĤΨ = EΨ (DFT B3LYP-D3)", 860, 860);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 Na + 2 H₂O  ⟶  2 NaOH + H₂", 840, 1140);

      // Cell (3,2): Furan & Thiophene
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      drawFiveRing(ctx, 1340, 980, 24, -Math.PI / 2);
      ctx.fillText("O", 1336, 985);
      drawFiveRing(ctx, 1440, 980, 24, -Math.PI / 2);
      ctx.fillText("S", 1436, 985);
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("RMSD < 0.35 Å (100ns MD)", 1260, 860);
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("N₂ + 3 H₂  ⟶  2 NH₃", 1260, 1140);

      ctx.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update diagonal scroll position continuously
      scrollX = (scrollX + speedX) % tileWidth;
      scrollY = (scrollY + speedY) % tileHeight;

      const isDarkMode = document.documentElement.classList.contains("dark");

      // Refined clinical opacity so it never distracts from foreground content
      if (isDarkMode) {
        ctx.strokeStyle = "rgba(96, 165, 250, 0.18)";
        ctx.fillStyle = "rgba(147, 197, 253, 0.20)";
      } else {
        ctx.strokeStyle = "rgba(37, 99, 235, 0.16)";
        ctx.fillStyle = "rgba(30, 58, 138, 0.18)";
      }
      ctx.lineWidth = 1.35;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Render seamless repeating tiles covering viewport
      const startX = -tileWidth + scrollX;
      const startY = -tileHeight + scrollY;

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
