"use client";

import { MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=120+S+English+St,+Leitchfield,+KY+42754";

export default function MobileStickyBar() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-[#6a7b64] via-[#7A8B74] to-[#6a7b64] text-white py-3.5 px-4 flex items-center justify-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] active:brightness-90 transition-all"
      aria-label="Get directions to Four Peas in a Pod Boutique"
    >
      <MapPin className="w-4 h-4" />
      <span className="text-sm font-semibold tracking-wide">
        Open Today &middot; Tap for Directions
      </span>
    </a>
  );
}
