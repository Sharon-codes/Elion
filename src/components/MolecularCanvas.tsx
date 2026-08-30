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
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 750);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse parallax offset
    let mouseX = 0;
    let mouseY = 0;
    let targetOffsetX = 0;
    let targetOffsetY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / height) * 2 - 1;
      mouseX = nx;
      mouseY = ny;
      targetOffsetX = nx * 25;
      targetOffsetY = ny * 25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Diagonal scroll offset tracker
    let scrollX = 0;
    let scrollY = 0;
    const speedX = 0.35; // diagonal drift speed X
    const speedY = 0.22; // diagonal drift speed Y

    // Blueprint grid tile dimensions
    const tileWidth = 720;
    const tileHeight = 540;

    // Helper to draw a benzene ring
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
        // Inner alternating double bonds or resonance circle
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.58, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        // Alternating inner double lines
        for (let i = 0; i < 6; i += 2) {
          const a1 = rotation + (i * Math.PI) / 3 + 0.15;
          const a2 = rotation + ((i + 1) * Math.PI) / 3 - 0.15;
          const rInner = radius * 0.76;
          ctx.beginPath();
          ctx.moveTo(cx + rInner * Math.cos(a1), cy + rInner * Math.sin(a1));
          ctx.lineTo(cx + rInner * Math.cos(a2), cy + rInner * Math.sin(a2));
          ctx.stroke();
        }
      }
    };

    // Helper to draw Quinoline fused ring system
    const drawQuinoline = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      const dx = r * 1.5;
      drawBenzene(ctx, cx - dx * 0.5, cy, r, 0, false);
      drawBenzene(ctx, cx + dx * 0.5, cy, r, 0, false);

      // Substituents (H3CO-)
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

    // Helper to draw a 5-membered heterocycle (like pyrazole/cyclopentyl)
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

      // Double bond on top
      const a1 = rotation + (1 * Math.PI * 2) / 5 + 0.15;
      const a2 = rotation + (2 * Math.PI * 2) / 5 - 0.15;
      ctx.beginPath();
      ctx.moveTo(cx + radius * 0.75 * Math.cos(a1), cy + radius * 0.75 * Math.sin(a1));
      ctx.lineTo(cx + radius * 0.75 * Math.cos(a2), cy + radius * 0.75 * Math.sin(a2));
      ctx.stroke();
    };

    // Helper to draw cyclobutane box
    const drawCyclobutane = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
      const half = size / 2;
      ctx.strokeRect(cx - half, cy - half, size, size);
      ctx.fillText("CH₂", cx - half - 26, cy - half - 4);
      ctx.fillText("CH₂", cx + half + 6, cy - half - 4);
      ctx.fillText("CH₂", cx - half - 26, cy + half + 14);
      ctx.fillText("CH₂", cx + half + 6, cy + half + 14);
    };

    // Draw one full blueprint tile
    const drawBlueprintTile = (ctx: CanvasRenderingContext2D, ox: number, oy: number) => {
      ctx.save();
      ctx.translate(ox, oy);

      // Font styling for chemical notation
      ctx.font = "500 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      // 1. Phenol with OH group (Top Left)
      drawBenzene(ctx, 80, 70, 26, 0, false);
      ctx.beginPath();
      ctx.moveTo(80 + 26, 70);
      ctx.lineTo(80 + 44, 70);
      ctx.moveTo(80, 70 - 26);
      ctx.lineTo(80, 70 - 42);
      ctx.stroke();
      ctx.fillText("OH", 80 + 48, 74);
      ctx.fillText("H₂N", 72, 70 - 46);
      ctx.fillText("H₂SiO₃ (R₃)ₙ", 30, 24);

      // 2. Pyridine Carboxylic Acid (Center Top)
      drawBenzene(ctx, 280, 160, 24, Math.PI / 6, false);
      ctx.beginPath();
      ctx.moveTo(280 + 24 * Math.cos(Math.PI / 6), 160 + 24 * Math.sin(Math.PI / 6));
      ctx.lineTo(280 + 45, 160 + 10);
      ctx.lineTo(280 + 58, 160 + 22);
      ctx.stroke();
      ctx.fillText("OH", 280 + 64, 160 + 26);
      ctx.fillText("=O", 280 + 48, 160 - 2);
      ctx.fillText("N", 276, 160 + 22);
      ctx.fillText("H₃PO₄", 340, 190);

      // 3. Branched Quinoline Core (Middle Left)
      drawQuinoline(ctx, 160, 270, 25);
      ctx.fillText("OCH₃", 220, 200);

      // 4. Pyrazole Derivative (Top Right)
      drawFiveRing(ctx, 400, 95, 28);
      ctx.beginPath();
      ctx.moveTo(400 + 28, 95);
      ctx.lineTo(400 + 50, 85);
      ctx.moveTo(400 - 28, 95);
      ctx.lineTo(400 - 48, 105);
      ctx.stroke();
      ctx.fillText("N—C₆H₅", 400 + 54, 88);
      ctx.fillText("O=", 400 - 64, 108);
      ctx.fillText("CH₃(CH₂)₃", 220, 50);

      // 5. Cyclobutane Bridge (Middle Right)
      drawCyclobutane(ctx, 520, 250, 48);

      // 6. Substituted Benzene with Methane (Bottom Center)
      drawBenzene(ctx, 360, 410, 28, 0, false);
      // Hydrogen spokes
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(360 + 28 * Math.cos(a), 410 + 28 * Math.sin(a));
        ctx.lineTo(360 + 40 * Math.cos(a), 410 + 40 * Math.sin(a));
        ctx.stroke();
        ctx.fillText("H", 360 + 44 * Math.cos(a) - 4, 410 + 44 * Math.sin(a) + 4);
      }

      // 7. Alkene / Double bond chain (Left bottom)
      ctx.beginPath();
      ctx.moveTo(70, 420);
      ctx.lineTo(110, 420);
      ctx.moveTo(70, 425);
      ctx.lineTo(110, 425);
      ctx.stroke();
      ctx.fillText("H₂C = CH₂", 60, 442);
      ctx.fillText("HNO₃", 40, 390);

      // 8. Chemical Equations & Reactions (Scattered authentically like the image)
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("2 H₂O  ⟶  2 H₂ + O₂", 210, 320);
      ctx.fillText("2 Cu + O₂  ⟶  2 CuO", 210, 350);
      ctx.fillText("HCl + NaOH  ⟶  NaCl + H₂O", 380, 25);
      ctx.fillText("Zn + 2HCl  ⟶  ZnCl₂ + H₂", 540, 340);
      ctx.fillText("2 Al + 3S  ⟶  Al₂S₃", 430, 145);
      ctx.fillText("2 KClO₃  ⟶  2 KCl + 3 O₂", 430, 185);

      // 9. Modern Computational Drug Discovery Annotations (Subtle Biotech Touch)
      ctx.font = "italic 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.fillText("ΔG_bind = -12.4 kcal/mol", 530, 95);
      ctx.fillText("L = D - A  (λ₁ > 0.90)", 540, 130);
      ctx.fillText("χ: (x,y,z) → (-x,-y,-z)", 530, 460);
      ctx.fillText("Boltz-2 FEP  ΔΔG < -11.8", 120, 500);

      ctx.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update diagonal scroll position
      scrollX = (scrollX + speedX) % tileWidth;
      scrollY = (scrollY + speedY) % tileHeight;

      // Parallax smooth interpolation
      currentOffsetX += (targetOffsetX - currentOffsetX) * 0.05;
      currentOffsetY += (targetOffsetY - currentOffsetY) * 0.05;

      const isDarkMode = document.documentElement.classList.contains("dark");

      // Set blueprint stroke and text colors
      // In light mode: blueprint cobalt / clinical deep blue stroke with crisp clarity
      // In dark mode: luminous cyan / indigo glow stroke
      if (isDarkMode) {
        ctx.strokeStyle = "rgba(96, 165, 250, 0.16)"; // soft cyan/blue in dark mode
        ctx.fillStyle = "rgba(147, 197, 253, 0.18)";
      } else {
        ctx.strokeStyle = "rgba(37, 99, 235, 0.14)"; // clinical blueprint blue in light mode
        ctx.fillStyle = "rgba(30, 58, 138, 0.16)";
      }
      ctx.lineWidth = 1.35;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Calculate start and end tile indices to cover whole viewport seamlessly with diagonal drift
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-85 transition-opacity duration-700"
      />
    </div>
  );
};
