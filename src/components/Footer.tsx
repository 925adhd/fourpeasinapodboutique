import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579927267125";

export default function Footer() {
  return (
    <footer className="w-full bg-[#7A8B74] text-white mt-16 rounded-t-3xl footer-premium">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-3 heading-serif">
              Four Peas in a Pod
            </h3>
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              First responder owned. Right here in Leitchfield, Kentucky.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-all duration-200 hover:translate-x-0.5"
              aria-label="Follow Four Peas in a Pod Boutique on Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-white/60">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-all duration-200 hover:translate-x-0.5"
              >
                About Us
              </Link>
              <Link
                href="/community"
                className="text-white/80 hover:text-white transition-all duration-200 hover:translate-x-0.5"
              >
                Community &amp; Events
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-all duration-200 hover:translate-x-0.5"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-white/60">
              Store Hours
            </h4>
            <div className="text-sm text-white/80 space-y-1.5">
              <p>Tue – Fri: 10 AM – 6 PM</p>
              <p>Saturday: 10 AM – 4 PM</p>
              <p>Sun – Mon: Closed</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-white/60">
              Visit Us
            </h4>
            <address className="not-italic text-sm text-white/80 leading-relaxed space-y-1.5">
              <p>120 S English Street</p>
              <p>Leitchfield, KY 42754</p>
              <p className="pt-1">
                <a
                  href="tel:+12702303035"
                  className="hover:text-white transition-colors"
                >
                  (270) 230-3035
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>
            &copy; {new Date().getFullYear()} Four Peas in a Pod Boutique. All
            rights reserved.
          </span>
          <span>Leitchfield, Kentucky</span>
        </div>
      </div>
    </footer>
  );
}
