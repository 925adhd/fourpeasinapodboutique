"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, MapPin, Sparkles } from "lucide-react";
import Button from "./Button";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=120+S+English+St,+Leitchfield,+KY+42754";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0) return;

      if (logoRef.current) {
        logoRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.03}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[55vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden mb-[-1px]"
    >
      {/* Animated ambient gradient (barely visible) */}
      <div className="hero-ambient" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/boutique-owners-shop-interior.jpg"
          alt=""
          fill
          className="object-cover hero-bg-image"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — lets image breathe */}
      <div className="hero-overlay" />

      {/* Vignette edges */}
      <div className="hero-vignette" />

      {/* Floating decorative shapes */}
      <div className="hero-float hero-float-1" />
      <div className="hero-float hero-float-2" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-5 pt-28 pb-14 md:pt-36 md:pb-28 px-5 text-center max-w-3xl mx-auto">
        {/* Logo with parallax */}
        <div
          ref={logoRef}
          className="hero-reveal hero-reveal-1 will-change-transform"
        >
          <div className="hero-logo-ring w-32 h-32 md:w-40 md:h-40 mb-1 rounded-full overflow-hidden shadow-lg border-4 border-white/70 ring-4 ring-white/20">
            <Image
              src="/images/four-peas-wreath-logo.jpg"
              alt="Four Peas in a Pod Boutique logo - family-owned boutique in Leitchfield Kentucky"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text content with parallax */}
        <div ref={contentRef} className="will-change-transform flex flex-col items-center gap-5">
          <h1 className="hero-reveal hero-reveal-2 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#4a5944] leading-tight heading-serif hero-text-shadow">
            Your New Favorite Boutique in Leitchfield
          </h1>

          <p className="hero-reveal hero-reveal-3 text-lg md:text-xl text-[#5a534e] max-w-xl leading-relaxed hero-text-shadow font-light tracking-wide">
            Kids, maternity &amp; plus-size fashion — curated with heart
          </p>

          <div className="hero-reveal hero-reveal-4 flex flex-col sm:flex-row gap-3 mt-5 w-full sm:w-auto">
            <Button
              href="#visit"
              size="lg"
              variant="white"
              className="btn-hero-primary"
            >
              <MapPin className="w-4 h-4 hidden md:block" />
              <span className="block md:hidden">Visit Us Today</span>
              <span className="hidden md:block">Get Directions &amp; Stop In Today</span>
            </Button>
            <Button
              href="/community"
              className="!bg-[#C9A9A6] btn-hero-secondary"
            >
              <Sparkles className="w-4 h-4" /> See What&apos;s New This Week
            </Button>
          </div>

          <p className="hero-reveal hero-reveal-5 text-sm text-[#4a5944] font-medium mt-2 hero-text-shadow">
            Open Today &middot; 120 S English St &middot;{" "}
            <a
              href="tel:+12702303035"
              className="underline hover:text-[#2c3627] transition-colors"
            >
              (270) 230-3035
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
