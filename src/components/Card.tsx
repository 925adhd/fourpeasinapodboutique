import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#fff8f4] rounded-2xl shadow-sm p-6 flex flex-col items-center border border-[#f0e8e0] card-premium ${className}`}
    >
      {children}
    </div>
  );
}
