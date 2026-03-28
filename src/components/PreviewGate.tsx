"use client";

import { useState, useEffect } from "react";
import PreviewExpired from "./PreviewExpired";

const PREVIEW_DURATION_MS = 24 * 60 * 60 * 1000;

function getTimeLeft(deployedAt: number) {
  const remaining = deployedAt + PREVIEW_DURATION_MS - Date.now();
  if (remaining <= 0) return null;
  return "active";
}

export default function PreviewGate({ children }: { children: React.ReactNode }) {
  const [expired, setExpired] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const key = "preview_deployed_at";
    let ts = Number(localStorage.getItem(key));
    if (!ts) {
      ts = Date.now();
      localStorage.setItem(key, String(ts));
    }
    setExpired(getTimeLeft(ts) === null);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || expired) return;
    const id = setInterval(() => {
      const key = "preview_deployed_at";
      const ts = Number(localStorage.getItem(key));
      if (ts && getTimeLeft(ts) === null) {
        setExpired(true);
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [ready, expired]);

  // Don't render anything until we've checked localStorage
  if (!ready) return null;

  if (expired) return <PreviewExpired />;

  return <>{children}</>;
}
