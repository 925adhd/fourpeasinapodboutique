"use client";

import { useState, useEffect } from "react";
import PreviewExpired from "./PreviewExpired";



export default function PreviewGate({ children }: { children: React.ReactNode }) {
  // Preview is now infinite; always render children
  return <>{children}</>;
}
