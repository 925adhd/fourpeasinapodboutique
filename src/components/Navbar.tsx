"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "navbar-scrolled" : "navbar-top"
        }`}
        style={{
          top: "var(--banner-height, 0px)",
          borderBottomLeftRadius: "1.5rem",
          borderBottomRightRadius: "1.5rem",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-6">
          <Link href="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); history.replaceState(null, "", "/"); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#7A8B74]/20 group-hover:border-[#7A8B74]/50 transition-all duration-300 group-hover:shadow-md">
              <Image
                src="/images/four-peas-wreath-logo.jpg"
                alt="Four Peas in a Pod Boutique logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#7A8B74] group-hover:text-[#5f7059] transition-colors heading-serif">
              Four Peas in a Pod
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${
                  isActive(link.href)
                    ? "text-[#7A8B74] after:w-full after:bg-[#7A8B74]"
                    : "text-[#2C2C22] hover:text-[#7A8B74] after:w-0 after:bg-[#C9A9A6] hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-[2px] bg-[#7A8B74] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#7A8B74] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#7A8B74] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#F8F6F2]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#7A8B74]/20 mb-2 shadow-lg">
          <Image
            src="/images/four-peas-wreath-logo.jpg"
            alt="Four Peas in a Pod Boutique"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold transition-all duration-300 ${
              isActive(link.href)
                ? "text-[#7A8B74]"
                : "text-[#2C2C22] hover:text-[#C9A9A6]"
            }`}
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {link.label}
          </Link>
        ))}
        <div
          className="mt-4 text-sm text-[#847770] transition-all duration-300"
          style={{
            transitionDelay: menuOpen ? "300ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <a href="tel:+12702303035" className="hover:text-[#7A8B74] transition-colors">
            (270) 230-3035
          </a>
        </div>
      </div>
    </>
  );
}
