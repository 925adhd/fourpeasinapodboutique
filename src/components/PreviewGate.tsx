"use client";

import { useState, useEffect } from "react";
import PreviewExpired from "./PreviewExpired";

// March 30, 2026 10:00 AM Central (UTC-5)
const PREVIEW_START = new Date("2026-03-30T10:00:00-05:00").getTime();
const PREVIEW_END = PREVIEW_START + 24 * 60 * 60 * 1000;

export default function PreviewGate({ children }: { children: React.ReactNode }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const remaining = PREVIEW_END - Date.now();
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
