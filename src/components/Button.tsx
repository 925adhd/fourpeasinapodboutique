import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  size?: "default" | "lg";
  variant?: "primary" | "white";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  href,
  external,
  size = "default",
  variant = "primary",
  ...props
}: ButtonProps) {
  const sizeClass =
    size === "lg" ? "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg" : "px-6 py-3 text-sm md:px-7 md:py-3.5 md:text-base";

  const variantClass =
    variant === "white"
      ? "btn-premium-white"
      : "btn-premium";

  const base = `inline-flex items-center justify-center gap-2 rounded-full ${sizeClass} font-semibold ${variantClass} focus:outline-none focus:ring-2 focus:ring-[#C9A9A6] focus:ring-offset-2 text-center`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  if (href && href.startsWith("#")) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
