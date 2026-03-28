"use client";

import { useState, useEffect, useRef } from "react";

const PREVIEW_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

function getTimeLeft(deployedAt: number) {
  const remaining = deployedAt + PREVIEW_DURATION_MS - Date.now();
  if (remaining <= 0) return null;

  const h = Math.floor(remaining / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);
  return `${h}h ${m}m ${s}s`;
}

export default function PreviewBanner() {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [deployedAt, setDeployedAt] = useState<number | null>(null);
  useEffect(() => {
    // Persist deploy timestamp so the 24h window survives refreshes
    const key = "preview_deployed_at";
    let ts = Number(localStorage.getItem(key));
    if (!ts) {
      ts = Date.now();
      localStorage.setItem(key, String(ts));
    }
    setDeployedAt(ts);
    setTimeLeft(getTimeLeft(ts));
  }, []);

  useEffect(() => {
    if (!deployedAt) return;
    const id = setInterval(() => {
      const left = getTimeLeft(deployedAt);
      setTimeLeft(left);
      if (!left) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [deployedAt]);

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty("--banner-height", `${el.offsetHeight}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [timeLeft]);

  if (deployedAt === null || timeLeft === null) {
    document.documentElement.style.setProperty("--banner-height", "0px");
    return null;
  }

  return (
    <div ref={bannerRef} className="fixed top-0 inset-x-0 z-50 bg-[#2C2C22] text-white text-center text-sm font-medium shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <p>
          This is a demo preview built by{" "}
          <a href="https://studio925.design" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">
            Studio 925
          </a>
          .
          <br />
          Live viewing expires in{" "}
          <span className="font-mono tabular-nums">{timeLeft}</span>.
          <br />
          Files are kept for 14&nbsp;days.
        </p>
      </div>
    </div>
  );
}
