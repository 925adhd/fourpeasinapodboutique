"use client";
import { useEffect, useState } from "react";

interface FallingItem {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  face: number;
  type: "pea" | "flower";
}

const FACES = [
  // happy smile
  (s: number) => (
    <g>
      <circle cx={s * 0.38} cy={s * 0.38} r={s * 0.045} fill="#3d4a38" />
      <circle cx={s * 0.62} cy={s * 0.38} r={s * 0.045} fill="#3d4a38" />
      <path d={`M${s * 0.35} ${s * 0.55} Q${s * 0.5} ${s * 0.7} ${s * 0.65} ${s * 0.55}`} stroke="#3d4a38" strokeWidth={s * 0.035} fill="none" strokeLinecap="round" />
    </g>
  ),
  // wink
  (s: number) => (
    <g>
      <circle cx={s * 0.38} cy={s * 0.38} r={s * 0.045} fill="#3d4a38" />
      <path d={`M${s * 0.57} ${s * 0.38} L${s * 0.67} ${s * 0.35}`} stroke="#3d4a38" strokeWidth={s * 0.035} fill="none" strokeLinecap="round" />
      <path d={`M${s * 0.35} ${s * 0.55} Q${s * 0.5} ${s * 0.68} ${s * 0.65} ${s * 0.55}`} stroke="#3d4a38" strokeWidth={s * 0.035} fill="none" strokeLinecap="round" />
    </g>
  ),
  // big smile
  (s: number) => (
    <g>
      <circle cx={s * 0.37} cy={s * 0.36} r={s * 0.04} fill="#3d4a38" />
      <circle cx={s * 0.63} cy={s * 0.36} r={s * 0.04} fill="#3d4a38" />
      <ellipse cx={s * 0.5} cy={s * 0.56} rx={s * 0.13} ry={s * 0.09} fill="#3d4a38" />
      <ellipse cx={s * 0.5} cy={s * 0.54} rx={s * 0.1} ry={s * 0.05} fill="#5a6b54" />
    </g>
  ),
  // sleepy
  (s: number) => (
    <g>
      <path d={`M${s * 0.32} ${s * 0.38} L${s * 0.44} ${s * 0.38}`} stroke="#3d4a38" strokeWidth={s * 0.035} fill="none" strokeLinecap="round" />
      <path d={`M${s * 0.56} ${s * 0.38} L${s * 0.68} ${s * 0.38}`} stroke="#3d4a38" strokeWidth={s * 0.035} fill="none" strokeLinecap="round" />
      <path d={`M${s * 0.4} ${s * 0.56} Q${s * 0.5} ${s * 0.62} ${s * 0.6} ${s * 0.56}`} stroke="#3d4a38" strokeWidth={s * 0.03} fill="none" strokeLinecap="round" />
    </g>
  ),
  // surprised
  (s: number) => (
    <g>
      <circle cx={s * 0.38} cy={s * 0.37} r={s * 0.05} fill="#3d4a38" />
      <circle cx={s * 0.62} cy={s * 0.37} r={s * 0.05} fill="#3d4a38" />
      <circle cx={s * 0.38} cy={s * 0.365} r={s * 0.02} fill="white" />
      <circle cx={s * 0.62} cy={s * 0.365} r={s * 0.02} fill="white" />
      <ellipse cx={s * 0.5} cy={s * 0.58} rx={s * 0.06} ry={s * 0.07} fill="#3d4a38" />
    </g>
  ),
];

const PEA_COLORS = ["#7A8B74", "#8a9b84", "#6a7b64", "#94a78e", "#7d9077"];
const FLOWER_COLORS = ["#C9A9A6", "#d4b5b2", "#dcc4c1", "#c19e9b", "#e0ccc9"];

function PeaSVG({ size, face, color }: { size: number; face: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <ellipse cx={size * 0.5} cy={size * 0.52} rx={size * 0.38} ry={size * 0.42} fill={color} />
      <ellipse cx={size * 0.4} cy={size * 0.35} rx={size * 0.12} ry={size * 0.08} fill="rgba(255,255,255,0.25)" transform={`rotate(-20 ${size * 0.4} ${size * 0.35})`} />
      <circle cx={size * 0.3} cy={size * 0.5} r={size * 0.08} fill="#C9A9A6" opacity="0.6" />
      <circle cx={size * 0.7} cy={size * 0.5} r={size * 0.08} fill="#C9A9A6" opacity="0.6" />
      {FACES[face](size)}
    </svg>
  );
}

function FlowerSVG({ size, color }: { size: number; color: string }) {
  const cx = size / 2;
  const cy = size / 2;
  const petalR = size * 0.22;
  const petalD = size * 0.18;

  // 5 petals arranged in a circle
  const petals = [0, 1, 2, 3, 4].map((i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    const px = cx + Math.cos(angle) * petalD;
    const py = cy + Math.sin(angle) * petalD;
    return { px, py };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {petals.map((p, i) => (
        <circle key={i} cx={p.px} cy={p.py} r={petalR} fill={color} opacity="0.75" />
      ))}
      {/* Center */}
      <circle cx={cx} cy={cy} r={size * 0.1} fill="#f5e6c8" />
      <circle cx={cx} cy={cy} r={size * 0.06} fill="#e8d4a8" />
    </svg>
  );
}

export default function FloatingPeas() {
  const [items, setItems] = useState<FallingItem[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const peaCount = isMobile ? 8 : 14;
    const flowerCount = isMobile ? 4 : 7;
    const generated: FallingItem[] = [];

    for (let i = 0; i < peaCount; i++) {
      generated.push({
        id: i,
        left: 3 + Math.random() * 94,
        size: 20 + Math.random() * 14,
        delay: Math.random() * 2,
        duration: 2.2 + Math.random() * 1.2,
        rotation: -30 + Math.random() * 60,
        face: Math.floor(Math.random() * FACES.length),
        type: "pea",
      });
    }

    for (let i = 0; i < flowerCount; i++) {
      generated.push({
        id: peaCount + i,
        left: 5 + Math.random() * 90,
        size: 14 + Math.random() * 10,
        delay: 0.3 + Math.random() * 2.2,
        duration: 2.8 + Math.random() * 1.5,
        rotation: -45 + Math.random() * 90,
        face: 0,
        type: "flower",
      });
    }

    setItems(generated);

    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || items.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bottom-[3.25rem] md:bottom-0 z-50 pointer-events-none overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease-out",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute pea-fall"
          style={{
            left: `${item.left}%`,
            top: "-60px",
            width: item.size,
            height: item.size,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            "--pea-rotation": `${item.rotation}deg`,
          } as React.CSSProperties}
        >
          {item.type === "pea" ? (
            <PeaSVG
              size={item.size}
              face={item.face}
              color={PEA_COLORS[item.id % PEA_COLORS.length]}
            />
          ) : (
            <FlowerSVG
              size={item.size}
              color={FLOWER_COLORS[item.id % FLOWER_COLORS.length]}
            />
          )}
        </div>
      ))}
    </div>
  );
}
