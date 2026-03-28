"use client";

import { useState, useEffect } from "react";
import PreviewExpired from "./PreviewExpired";

const PREVIEW_DURATION_MS = 24 * 60 * 60 * 1000;

export default function PreviewGate({ children }: { children: React.ReactNode }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const key = "preview_deployed_at";
    let ts = Number(localStorage.getItem(key));
    if (!ts) {
      ts = Date.now();
      localStorage.setItem(key, String(ts));
    }
    const remaining = ts + PREVIEW_DURATION_MS - Date.now();
    if (remaining <= 0) {
      setExpired(true);
      return;
    }
    const id = setTimeout(() => setExpired(true), remaining);
    return () => clearTimeout(id);
  }, []);

  if (expired) return <PreviewExpired />;

  return <>{children}</>;
}
