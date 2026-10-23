"use client";

import { useEffect, useRef } from "react";

const SIZE = 560; // canvas resolution in px (CSS scales it down)
const TEX_W = 1024;
const TEX_H = 512;
const SECONDS_PER_TURN = 40;
const TILT = (23.4 * Math.PI) / 180; // Earth's axial tilt
const LIGHT = normalize([-0.55, 0.35, 0.75]); // sun from the upper left

function normalize([x, y, z]: number[]) {
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len];
}

// Orthographic projection: for every canvas pixel on the disc, work out once
// which latitude/longitude it shows and how brightly it is lit. Each frame
// then only shifts the longitude, which keeps rendering cheap.
function buildProjection() {
  const r = SIZE / 2;
  const pixels: number[] = [];
  const rows: number[] = [];
  const cols: number[] = [];
  const shades: number[] = [];
  const alphas: number[] = [];
  const cosT = Math.cos(TILT);
  const sinT = Math.sin(TILT);

  for (let py = 0; py < SIZE; py++) {
    for (let px = 0; px < SIZE; px++) {
      const x = (px + 0.5 - r) / r;
      const y = (r - (py + 0.5)) / r;
      const dist = Math.hypot(x, y);
      if (dist >= 1) continue;
      const z = Math.sqrt(1 - dist * dist);

      // Undo the axial tilt to get coordinates on the globe itself
      const gy = y * cosT + z * sinT;
      const gz = -y * sinT + z * cosT;
      const lat = Math.asin(Math.max(-1, Math.min(1, gy)));
      const lon = Math.atan2(x, gz);

      const diffuse = Math.max(0, x * LIGHT[0] + y * LIGHT[1] + z * LIGHT[2]);
      pixels.push(py * SIZE + px);
      rows.push(Math.min(TEX_H - 1, Math.floor((0.5 - lat / Math.PI) * TEX_H)) * TEX_W);
      cols.push((lon / (2 * Math.PI) + 0.5) * TEX_W);
      shades.push(0.18 + 1.05 * diffuse);
      alphas.push(Math.min(1, (1 - dist) * r) * 255); // anti-aliased edge
    }
  }

  return {
    pixels: Int32Array.from(pixels),
    rows: Int32Array.from(rows),
    cols: Float32Array.from(cols),
    shades: Float32Array.from(shades),
    alphas: Uint8ClampedArray.from(alphas),
  };
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frame = 0;
    let visible = true;
    let cancelled = false;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const image = new Image();
    image.src = "/earth.jpg";

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    image.decode().then(() => {
      if (cancelled) return;

      const texCanvas = document.createElement("canvas");
      texCanvas.width = TEX_W;
      texCanvas.height = TEX_H;
      const texCtx = texCanvas.getContext("2d")!;
      texCtx.drawImage(image, 0, 0, TEX_W, TEX_H);
      const tex = texCtx.getImageData(0, 0, TEX_W, TEX_H).data;

      const { pixels, rows, cols, shades, alphas } = buildProjection();
      const output = ctx.createImageData(SIZE, SIZE);
      const out = output.data;
      const start = performance.now();

      const draw = (now: number) => {
        // Shift texture columns over time so the surface moves west → east
        const turn = ((now - start) / 1000 / SECONDS_PER_TURN) % 1;
        const shift = TEX_W - turn * TEX_W;

        for (let i = 0; i < pixels.length; i++) {
          let col = (cols[i] + shift) | 0;
          if (col >= TEX_W) col -= TEX_W;
          const t = (rows[i] + col) * 4;
          const o = pixels[i] * 4;
          const s = shades[i];
          out[o] = tex[t] * s;
          out[o + 1] = tex[t + 1] * s;
          out[o + 2] = tex[t + 2] * s;
          out[o + 3] = alphas[i];
        }
        ctx.putImageData(output, 0, 0);
      };

      if (reduceMotion) {
        draw(start);
        return;
      }

      const loop = (now: number) => {
        if (visible) draw(now);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[480px]">
      {/* Atmosphere glow */}
      <div
        aria-hidden
        className="absolute inset-[6%] rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-full shadow-[0_0_60px_8px_rgba(56,189,248,0.25),inset_0_0_40px_rgba(56,189,248,0.25)]"
      />
      {/* Placeholder sphere while the texture loads */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#1e3a8a,#0b1020_70%)]"
      />
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        role="img"
        aria-label="Rotating globe"
        className="relative h-full w-full"
      />
    </div>
  );
}
