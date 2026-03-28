import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import Card from "../../components/Card";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Community & Events | Four Peas in a Pod Boutique",
  description:
    "Community events, local collaborations, and giveaways at Four Peas in a Pod Boutique in Leitchfield, Kentucky.",
  keywords: [
    "Leitchfield KY events",
    "Boutique events Kentucky",
    "Four Peas in a Pod community",
  ],
  alternates: {
    canonical: "/community",
  },
};

const events = [
  {
    title: "GC Cougars State Send-Off",
    date: "March 2026",
    desc: "When the Grayson County Cougars headed to state, we painted our windows with paw prints and basketballs to cheer them on. Supporting our local teams is what community is all about — go Cougars!",
    image: "/images/gc-cougars-state-storefront.jpg",
    imageAlt: "Four Peas in a Pod Boutique storefront decorated with GC Cougars paw prints and Good Luck message for state basketball",
    tag: "Community",
  },
  {
    title: "Valentine's Day Gift Market",
    date: "February 2026",
    desc: "Candy bouquets, candles, gift baskets, and all the love! We go all out for Valentine's Day with a special in-store display and curated gift options for everyone on your list.",
    image: "/images/valentines-day-gifts-display.jpg",
    imageAlt: "Valentine's Day gift display with candy bouquets and candles at Four Peas in a Pod Boutique",
    tag: "Seasonal Event",
  },
  {
    title: "S'mores Giveaway Basket",
    date: "Winter 2026",
    desc: "S'more together! We surprised one lucky winner with a cozy s'mores basket complete with gnomes, marshmallows, and everything you need for a sweet night in. Follow us on social media for your chance at our next giveaway!",
    image: "/images/smores-giveaway-basket.jpg",
    imageAlt: "S'mores giveaway basket with gnomes marshmallows and S'more Together pillow at Four Peas in a Pod Boutique",
    tag: "Giveaway",
  },
  {
    title: "Holiday Open House",
    date: "December 2025",
    desc: "Kick off the holiday season with warm cider, special discounts, and first looks at our holiday collection. Bring a friend — the more, the merrier!",
    image: "/images/holiday-seasonal-decor-display.jpg",
    imageAlt: "Holiday decor including rustic snowflake and winter art at the boutique",
    tag: "Annual Event",
  },
  {
    title: "Small Business Saturday Collab",
    date: "November 2025",
    desc: "We team up with local makers, bakers, and artisans to celebrate Small Business Saturday. Shop local, discover new favorites, and support your Leitchfield neighbors.",
    image: "/images/vendor-spotlight-local-family.jpg",
    imageAlt: "Local vendor spotlight and family collaboration at Four Peas in a Pod Boutique",
    tag: "Collaboration",
  },
  {
    title: "Local Vendor Pop-Up Markets",
    date: "Quarterly",
    desc: "We open our doors to local vendors and artisans for pop-up markets throughout the year. Discover handmade crochet plushies, custom tumblers, and more from local makers.",
    image: "/images/handmade-crochet-plushies.jpg",
    imageAlt: "Handmade crochet plushie animals from local artisans at Four Peas in a Pod",
    tag: "Collaboration",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#F8F6F2] overflow-hidden page-header">
        <div
          className="blob-bg bg-[#C9A9A6] w-[400px] h-[300px] top-[-80px] left-[-60px]"
          style={{ position: "absolute" }}
        />
        <div
          className="blob-bg bg-[#7A8B74] w-[250px] h-[200px] bottom-[-50px] right-[-40px]"
          style={{ position: "absolute" }}
        />
        <div className="max-w-3xl mx-auto px-6 py-20 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A9A6] mb-3">
            Events &amp; Highlights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7A8B74] mb-4 heading-serif">
            Community &amp; Events
          </h1>
          <p className="text-lg text-[#847770] max-w-xl mx-auto">
            We&apos;re more than a boutique — we&apos;re part of the Leitchfield
            family
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.title}
              className="text-left items-start p-0 overflow-hidden"
            >
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#7A8B74] bg-[#7A8B74]/10 px-3 py-1 rounded-full">
                    {event.tag}
                  </span>
                  <span className="text-sm text-[#847770]">{event.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-[#2C2C22] mb-2">
                  {event.title}
                </h2>
                <p className="text-[#2C2C22]/80 leading-relaxed text-sm">
                  {event.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Shop Highlights Gallery */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] mb-8 text-center heading-serif">
          Shop Highlights
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {[
            { src: "/images/boutique-gifts-seasonal-decor.jpg", alt: "Seasonal gifts and home decor at Four Peas in a Pod Boutique" },
            { src: "/images/boutique-owners-selfie.jpg", alt: "Boutique owners smiling together at Four Peas in a Pod" },
            { src: "/images/halloween-storefront-display.jpg", alt: "Halloween storefront display at Four Peas in a Pod Boutique" },
            { src: "/images/vendor-event-medic-grindz.jpg", alt: "Medic Grindz vendor at a Four Peas in a Pod community event" },
            { src: "/images/shop-interior-customers-browsing.jpg", alt: "Customers browsing inside the boutique" },
            { src: "/images/family-boutique-shop-life.jpg", alt: "Daily life and family moments at Four Peas in a Pod" },
          ].map((img) => (
            <div
              key={img.src}
              className="rounded-xl overflow-hidden aspect-square relative shadow-sm border border-[#f0e8e0]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Get Involved */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] heading-serif">
            Want to Collaborate?
          </h2>
          <p className="text-lg text-[#2C2C22] leading-relaxed">
            Are you a local business, maker, or organization looking to partner?
            We love working with fellow Leitchfield businesses and community
            groups. Reach out — let&apos;s do something great together!
          </p>
          <Button href="/contact" className="mt-4">
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>

      {/* Social CTA */}
      <section className="bg-[#9E7E7B] rounded-3xl max-w-5xl mx-auto my-10 px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 heading-serif">
          Follow the Fun
        </h2>
        <p className="text-white/90 mb-6 max-w-md mx-auto">
          Stay up to date on events, giveaways, and new arrivals by following us
          on Facebook!
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=61579927267125"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold btn-premium-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Follow Us on Facebook
        </a>
      </section>
    </>
  );
}
