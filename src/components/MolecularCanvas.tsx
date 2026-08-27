"use client";

import React, { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  color: string;
  type: "carbon" | "nitrogen" | "oxygen" | "sulfur" | "ligand";
  connections: number[];
}

export const MolecularCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

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

    // Generate complex 3D molecular protein/ligand structure
    const nodes: Node3D[] = [];
    const numResidues = 32;
    const helixRadius = 140;
    const helixPitch = 380;

    // 1. Alpha-helix protein backbone
    for (let i = 0; i < numResidues; i++) {
      const angle = (i / numResidues) * Math.PI * 5;
      const y = (i / numResidues - 0.5) * helixPitch;
      const x = Math.cos(angle) * (helixRadius + Math.sin(i * 0.4) * 20);
      const z = Math.sin(angle) * (helixRadius + Math.sin(i * 0.4) * 20);

      const types: ("carbon" | "nitrogen" | "oxygen" | "sulfur")[] = [
        "nitrogen",
        "carbon",
        "carbon",
        "oxygen",
      ];
      const type = types[i % 4];

      const colors = {
        carbon: "#3B82F6", // Electric Blue
        nitrogen: "#2563EB", // Clinical Deep Blue
        oxygen: "#0D9488", // Biotech Teal
        sulfur: "#818CF8", // Lavender
        ligand: "#1D4ED8",
      };

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: type === "sulfur" ? 4.5 : type === "carbon" ? 3.5 : 4,
        color: colors[type],
        type,
        connections: i > 0 ? [i - 1] : [],
      });
    }

    // Add cross-helix hydrogen bonds and side chains
    for (let i = 0; i < numResidues - 4; i += 3) {
      nodes[i].connections.push(i + 4);
    }

    // 2. Central Active Site & Mirror Ligand (D-Peptide core)
    const ligandOffsetIndex = nodes.length;
    const numLigandAtoms = 14;
    for (let j = 0; j < numLigandAtoms; j++) {
      const theta = (j / numLigandAtoms) * Math.PI * 2;
      const phi = (j % 3) * 0.8 - 0.8;
      const r = 45 + (j % 4) * 8;
      const lx = Math.cos(theta) * Math.cos(phi) * r;
      const ly = Math.sin(phi) * r + 10;
      const lz = Math.sin(theta) * Math.cos(phi) * r;

      nodes.push({
        x: lx,
        y: ly,
        z: lz,
        baseX: lx,
        baseY: ly,
        baseZ: lz,
        radius: j === 0 ? 6 : 4.2,
        color: j % 2 === 0 ? "#2563EB" : "#0284C7",
        type: "ligand",
        connections: j > 0 ? [ligandOffsetIndex + j - 1] : [],
      });
    }

    // Connect ligand to active site pocket
    if (nodes.length > ligandOffsetIndex + 3) {
      nodes[ligandOffsetIndex].connections.push(12);
      nodes[ligandOffsetIndex + 4].connections.push(16);
      nodes[ligandOffsetIndex + 8].connections.push(20);
    }

    // Mouse tracking with spring physics
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.002;
    let targetRotY = 0.004;
    let currentRotX = 0.002;
    let currentRotY = 0.004;
    let angleX = 0.3;
    let angleY = 0.4;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / height) * 2 - 1;
      mouseX = nx;
      mouseY = ny;
      targetRotY = nx * 0.015;
      targetRotX = -ny * 0.015;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Ambient floating particles
    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let p = 0; p < 40; p++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera rotation interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      angleY += 0.003 + currentRotY;
      angleX += currentRotX * 0.5;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const fov = 450;
      const centerX = width / 2;
      const centerY = height / 2 - 20;

      // Project nodes to 2D screen
      const projected = nodes.map((node) => {
        // Rotate Y
        let x1 = node.baseX * cosY - node.baseZ * sinY;
        let z1 = node.baseZ * cosY + node.baseX * sinY;

        // Rotate X
        let y1 = node.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.baseY * sinX;

        // Perspective scale
        const scale = fov / (fov + z2 + 300);
        const px = centerX + x1 * scale;
        const py = centerY + y1 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          radius: Math.max(1.5, node.radius * scale),
          color: node.color,
          connections: node.connections,
          type: node.type,
        };
      });

      // Render subtle background floating particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * 0.5})`;
        ctx.fill();
      });

      // Draw covalent bonds / graph edges with distance-based alpha
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        p1.connections.forEach((targetIdx) => {
          if (targetIdx < projected.length) {
            const p2 = projected[targetIdx];
            const avgZ = (p1.z + p2.z) / 2;
            const alpha = Math.max(0.08, Math.min(0.45, (avgZ + 200) / 400));

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = Math.max(1, 1.8 * ((p1.scale + p2.scale) / 2));
            ctx.stroke();
          }
        });
      }

      // Sort nodes by Z for proper depth rendering
      const sortedIndices = projected.map((_, i) => i).sort((a, b) => projected[a].z - projected[b].z);

      // Render atom nodes with soft radial lighting
      sortedIndices.forEach((idx) => {
        const p = projected[idx];
        const depthAlpha = Math.max(0.3, Math.min(1, (p.z + 200) / 380));

        // Soft atom glow
        const glowGrad = ctx.createRadialGradient(
          p.px - p.radius * 0.3,
          p.py - p.radius * 0.3,
          p.radius * 0.1,
          p.px,
          p.py,
          p.radius * 2.5
        );
        glowGrad.addColorStop(0, p.color);
        glowGrad.addColorStop(0.5, p.color + "99");
        glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Atom sphere core
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = depthAlpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Specular highlight on node
        ctx.beginPath();
        ctx.arc(p.px - p.radius * 0.3, p.py - p.radius * 0.3, p.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fill();
      });

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
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-65 transition-opacity duration-1000"
      />
    </div>
  );
};
