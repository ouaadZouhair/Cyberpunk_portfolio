"use client";
// Components/CyberpunkBackground.jsx
import { useEffect, useRef, type CSSProperties, type RefObject } from "react";

export default function CyberpunkBackground() {
  const rainRef  = useRef<HTMLCanvasElement>(null);
  const scanRef  = useRef<HTMLCanvasElement>(null);
  const scanRef2 = useRef<HTMLCanvasElement>(null);
  const scanRef3 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!rainRef.current || !scanRef.current || !scanRef2.current || !scanRef3.current) return;
    const W = window.innerWidth;
    const H = window.innerHeight;
    rainRef.current.width  = W; rainRef.current.height  = H;
    scanRef.current.width  = W; scanRef.current.height  = H;
    scanRef2.current.width = W; scanRef2.current.height = H;
    scanRef3.current.width = W; scanRef3.current.height = H;

    /* ── MATRIX RAIN ── */
    const rCtx = rainRef.current.getContext("2d");
    if (!rCtx) return;
    const chars = "QWERTYUIOPASDFGHJKLXCVBNM;&#@!?/><.12345657890";
    const cols = Math.floor(W / 18);
    const drops = Array.from({ length: cols }, () => (Math.random() * -60) | 0);
    let tick = 0;
    const rainId = setInterval(() => {
      tick++;
      if (tick % 3 !== 0) return;
      rCtx.fillStyle = "rgba(5,5,16,0.15)";
      rCtx.fillRect(0, 0, W, H);
      drops.forEach((d, i) => {
        const ch = chars[(Math.random() * chars.length) | 0];
        rCtx.fillStyle = "rgba(0,255,231,0.4)";
        rCtx.font = "13px monospace";
        rCtx.fillText(ch, i * 18, d * 18);
        if (d * 18 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 16);

    /* shared scanline drawer */
    function makeScan(ref: RefObject<HTMLCanvasElement | null>, startY: number, speed: number, lineWidth: number) {
      const ctx = ref.current?.getContext("2d");
      if (!ctx) return null;
      let sy = startY;
      const id = setInterval(() => {
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = "rgba(0,255,231,0.08)";
        ctx.lineWidth = lineWidth;
        ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(W, sy); ctx.stroke();
        for (let i = 1; i <= 6; i++) {
          ctx.strokeStyle = `rgba(0,255,231,${(0.025 - i * 0.003).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(0, sy - i * 3); ctx.lineTo(W, sy - i * 3); ctx.stroke();
        }
        sy = (sy + speed) % H;
      }, 16);
      return id;
    }

    /* ── SCANLINE 1 — slow ── */
    const sCtx = scanRef.current.getContext("2d");
    if (!sCtx) return;
    let sy = 0;
    const scanId = setInterval(() => {
      sCtx.clearRect(0, 0, W, H);
      for (let y = 0; y < H; y += 4) {
        sCtx.fillStyle = "rgba(0,0,0,0.15)";
        sCtx.fillRect(0, y, W, 2);
      }
      sCtx.strokeStyle = "rgba(0,255,231,0.08)";
      sCtx.lineWidth = 2.5;
      sCtx.beginPath(); sCtx.moveTo(0, sy); sCtx.lineTo(W, sy); sCtx.stroke();
      for (let i = 1; i <= 6; i++) {
        sCtx.strokeStyle = `rgba(0,255,231,${(0.025 - i * 0.003).toFixed(3)})`;
        sCtx.lineWidth = 1;
        sCtx.beginPath(); sCtx.moveTo(0, sy - i * 3); sCtx.lineTo(W, sy - i * 3); sCtx.stroke();
      }
      sy = (sy + 1.5) % H;
    }, 16);

    /* ── SCANLINE 2 — medium ── */
    const scanId2 = makeScan(scanRef2, H * 0.33, 2.8, 1.5);

    /* ── SCANLINE 3 — fast ── */
    const scanId3 = makeScan(scanRef3, H * 0.66, 4.2, 1);

    return () => {
      clearInterval(rainId);
      clearInterval(scanId);
      if (scanId2) clearInterval(scanId2);
      if (scanId3) clearInterval(scanId3);
    };
  }, []);

  const style: CSSProperties = {
    position: "fixed", inset: 0, zIndex: 0,
    pointerEvents: "none", overflow: "hidden",
  };
  const cvStyle: CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%" };

  return (
    <div style={style}>
      <canvas ref={rainRef}  style={cvStyle} />
      <canvas ref={scanRef}  style={cvStyle} />
      <canvas ref={scanRef2} style={cvStyle} />
      <canvas ref={scanRef3} style={cvStyle} />
    </div>
  );
}
