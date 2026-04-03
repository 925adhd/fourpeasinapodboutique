import Link from "next/link";
import Image from "next/image";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579927267125";

export default function Footer() {
  return (
    <footer className="w-full bg-[#7A8B74] text-white mt-16 rounded-t-3xl footer-premium">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8 md:py-12">
        {/* Top row: Brand + Links/Hours/Address all in one tight grid */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          {/* Brand */}
          <div className="md:flex-1">
            <h3 className="text-lg font-bold mb-1.5 heading-serif">
              Four Peas in a Pod
            </h3>
            <div className="flex items-center gap-1.5 mb-2">
              <Image
                src="/images/star-of-life-ems-badge.png"
                alt="Star of Life EMS badge"
                width={16}
                height={16}
                className="opacity-90"
              />
              <span className="text-white/80 text-xs">First responder owned</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
                aria-label="Follow Four Peas in a Pod Boutique on Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+12702303035" className="text-xs text-white/70 hover:text-white transition-colors">
                (270) 230-3035
              </a>
            </div>
          </div>

          {/* Links + Hours + Address in a tight row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-xs">
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-2 text-white/50">Links</h4>
              <nav className="flex flex-col gap-1.5">
                <Link href="/about" className="text-white/75 hover:text-white transition-colors">About</Link>
                <Link href="/community" className="text-white/75 hover:text-white transition-colors">Events</Link>
                <Link href="/contact" className="text-white/75 hover:text-white transition-colors">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-2 text-white/50">Hours</h4>
              <div className="text-white/75 space-y-1">
                <p>Tue–Fri 10–6</p>
                <p>Sat 10–4</p>
                <p>Sun–Mon Closed</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-2 text-white/50">Visit</h4>
              <address className="not-italic text-white/75 space-y-1">
                <p>120 S English St</p>
                <p>Leitchfield, KY</p>
                <p>42754</p>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-6 pt-4 flex flex-row items-center justify-between text-[10px] md:text-xs text-white/60">
          <span>&copy; {new Date().getFullYear()} Four Peas in a Pod Boutique</span>
          <span>
            Website by{" "}
            <a
              href="https://studio925.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white transition-colors"
            >
              Studio 925
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
