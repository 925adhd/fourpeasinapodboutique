"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// March 30, 2026 10:00 AM Central (UTC-5)
const PREVIEW_START = new Date("2026-03-30T10:00:00-05:00").getTime();
const PREVIEW_END = PREVIEW_START + 24 * 60 * 60 * 1000;

function getTimeLeft() {
  const now = Date.now();
  if (now < PREVIEW_START) return "not_started";
  const remaining = PREVIEW_END - now;
  if (remaining <= 0) return null;

  const h = Math.floor(remaining / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);
  return `${h}h ${m}m ${s}s`;
}

export default function PreviewBanner() {
  const [timeLeft, setTimeLeft] = useState<string | null | "not_started">("not_started");
  const bannerRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    const el = bannerRef.current;
    const h = el ? el.offsetHeight : 0;
    document.documentElement.style.setProperty("--banner-height", `${h}px`);
  }, []);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => {
      const left = getTimeLeft();
      setTimeLeft(left);
      if (left === null) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    updateHeight();
    const el = bannerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateHeight, timeLeft]);

  const showCountdown = timeLeft !== null && timeLeft !== "not_started";

  return (
    <div ref={bannerRef} className="fixed top-0 inset-x-0 z-50 bg-[#2C2C22] text-white text-center text-sm font-medium shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <p>
          This is a demo preview built by{" "}
          <a href="https://studio925.design" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">
            Studio 925
          </a>
          .
          <br className="md:hidden" />
          {showCountdown ? (
            <>
              {" "}Live viewing expires in{" "}
              <span className="font-mono tabular-nums">{timeLeft}</span>.
            </>
          ) : (
            <>{" "}Live viewing expires after 24 hours.</>
          )}
          <br className="md:hidden" />
          {" "}Files are kept for 14&nbsp;days.
        </p>
      </div>
    </div>
  );
}
