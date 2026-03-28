import Image from "next/image";
import { Heart, ShoppingBag, MapPin } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import NewArrivalsStrip from "../components/NewArrivalsStrip";
import FloatingPeas from "../components/FloatingPeas";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=120+S+English+St,+Leitchfield,+KY+42754";

export default function Home() {
  return (
    <>
      <FloatingPeas />
      {/* ───── HERO ───── */}
      <div className="-mt-20">
        <HeroSection />
      </div>

      {/* ───── NEW ARRIVALS STRIP ───── */}
      <NewArrivalsStrip />

      {/* ───── TRUST STRIP ───── */}
      <div className="section-gradient-sage">
        <SectionWrapper className="!py-10 md:!py-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[#7A8B74] heading-serif text-center mb-6">
            Why People Love It Here
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 text-center">
            <div className="trust-item flex items-center gap-2.5 text-[#2C2C22]">
              <Heart className="w-5 h-5 text-[#7A8B74] fill-[#7A8B74] flex-shrink-0" />
              <span>Friendly, welcoming atmosphere</span>
            </div>
            <div className="trust-item flex items-center gap-2.5 text-[#2C2C22]">
              <ShoppingBag className="w-5 h-5 text-[#7A8B74] flex-shrink-0" />
              <span>Unique pieces you won&apos;t find everywhere</span>
            </div>
            <div className="trust-item flex items-center gap-2.5 text-[#2C2C22]">
              <MapPin className="w-5 h-5 text-[#7A8B74] flex-shrink-0" />
              <span>Right here in Leitchfield</span>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* ───── ABOUT ───── */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] heading-serif">
              Family-Owned &amp; Community-Driven
            </h2>
            <p className="text-lg text-[#2C2C22] leading-relaxed">
              Founded by longtime Grayson County paramedic Jessi Fentress,
              Four Peas in a Pod specializes in children&apos;s clothing,
              maternity wear, and plus-size fashion — filling a need right here
              in Leitchfield.
            </p>
            <p className="text-lg text-[#2C2C22] leading-relaxed">
              Located next door to &ldquo;Pretty in Pink by Maddi,&rdquo; we
              complement each other under one roof. Run by four women who share
              the same heart for this community, every piece is chosen with
              care and every customer feels like family.
            </p>
            <Button href={MAPS_URL} external className="mt-2">
              Come Say Hi In Store
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="about-image-wrap rounded-2xl overflow-hidden shadow-md border-2 border-white/60">
              <Image
                src="/images/boutique-owners-selfie.jpg"
                alt="Owners of Four Peas in a Pod Boutique smiling together in Leitchfield KY"
                width={440}
                height={220}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───── WHAT YOU'LL FIND ───── */}
      <div className="section-gradient-blush">
        <SectionWrapper>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A9A6] text-center mb-3">
            Shop Our Collections
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] mb-3 text-center heading-serif">
            What You&apos;ll Find Inside
          </h2>
          <p className="text-center text-[#847770] mb-10 max-w-lg mx-auto">
            Kids, maternity, plus-size &amp; more — curated with care
          </p>

          {/* Feature row: 2 tall + 2 stacked */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[1fr]">
            {/* Tall left */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover row-span-2 aspect-[3/5] md:aspect-auto">
              <Image
                src="/images/boutique-everyday-fashion.jpg"
                alt="Everyday clothing and fashion at Four Peas in a Pod Boutique Leitchfield KY"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-bold text-base md:text-lg drop-shadow-md">Everyday Pieces</span>
              </div>
            </div>

            {/* Top right small */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover aspect-square">
              <Image
                src="/images/press-on-nails-beauty.jpg"
                alt="Press-on nails and beauty accessories at Four Peas in a Pod Boutique"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white font-semibold text-sm drop-shadow-sm">Beauty</span>
              </div>
            </div>

            {/* Tall right (desktop) / bottom left small (mobile) */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover row-span-2 aspect-[3/5] md:aspect-auto">
              <Image
                src="/images/handmade-crochet-plushies.jpg"
                alt="Handmade crochet plushies at Four Peas in a Pod Boutique"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-bold text-base md:text-lg drop-shadow-md">Handmade Goods</span>
              </div>
            </div>

            {/* Small square */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover aspect-square">
              <Image
                src="/images/boutique-tumbler-drinkware.jpg"
                alt="Boutique tumblers and drinkware at Four Peas in a Pod"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white font-semibold text-sm drop-shadow-sm">Tumblers</span>
              </div>
            </div>

            {/* Bottom row spanning full width */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover col-span-2 aspect-[2/1]">
              <Image
                src="/images/bath-body-products-display.jpg"
                alt="Bath and body products display at Four Peas in a Pod Boutique"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-bold text-base drop-shadow-md">Bath &amp; Body</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#f0e8e0] group card-hover col-span-2 aspect-[2/1]">
              <Image
                src="/images/boutique-gifts-seasonal-decor.jpg"
                alt="Unique gifts and home decor at Four Peas in a Pod Boutique"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-bold text-base drop-shadow-md">Gifts &amp; Seasonal Decor</span>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* ───── COMMUNITY ───── */}
      <div className="section-gradient-sage">
        <SectionWrapper>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A9A6] text-center mb-3">
            Leitchfield Proud
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] mb-3 text-center heading-serif">
            Part of the Community
          </h2>
          <p className="text-center text-[#847770] mb-10 max-w-lg mx-auto">
            Proud to be part of the Leitchfield community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/halloween-storefront-display.jpg"
                  alt="Halloween storefront display with festive inflatables at Four Peas in a Pod Boutique"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="font-semibold text-[#2C2C22] mb-2 text-lg">
                Seasonal Celebrations
              </div>
              <div className="text-[#847770] text-sm leading-relaxed">
                From Valentine&apos;s Day to Christmas, we go all out for every
                season with special displays and gifts.
              </div>
            </Card>

            <Card className="text-center">
              <div className="w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/vendor-event-medic-grindz.jpg"
                  alt="Medic Grindz local vendor collaboration at Four Peas in a Pod Boutique event"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="font-semibold text-[#2C2C22] mb-2 text-lg">
                Local Collaborations
              </div>
              <div className="text-[#847770] text-sm leading-relaxed">
                Partnering with Leitchfield&apos;s best makers, families, and
                small businesses.
              </div>
            </Card>

            <Card className="text-center">
              <div className="w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/smores-giveaway-basket.jpg"
                  alt="S'mores giveaway basket with gnomes and marshmallows at Four Peas in a Pod Boutique"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="font-semibold text-[#2C2C22] mb-2 text-lg">
                Giveaways &amp; Treats
              </div>
              <div className="text-[#847770] text-sm leading-relaxed">
                Fun prizes, s&apos;mores baskets, and surprises for our
                community all year long!
              </div>
            </Card>
          </div>
          <p className="text-center text-[#6b6560] mt-8 text-base max-w-lg mx-auto leading-relaxed">
            When you shop here, you&apos;re supporting local families… and we
            don&apos;t take that lightly.
          </p>
          <div className="text-center mt-6">
            <Button href="/community">
              See All Events
            </Button>
          </div>
        </SectionWrapper>
      </div>

      {/* ───── STOREFRONT ───── */}
      <div id="visit" className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-[#f0e8e0]">
          <Image
            src="/images/storefront-valentines-snow.jpg"
            alt="Four Peas in a Pod Boutique storefront in Leitchfield KY"
            width={1200}
            height={500}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* ───── VISIT US ───── */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7A8B74] heading-serif">
              Come Visit Us
            </h2>
            <address className="not-italic space-y-2 text-lg text-[#2C2C22]">
              <p>120 S English Street</p>
              <p>Leitchfield, KY 42754</p>
              <p>
                <a
                  href="tel:+12702303035"
                  className="text-[#5f7059] hover:text-[#C9A9A6] transition-colors font-medium"
                >
                  (270) 230-3035
                </a>
              </p>
            </address>
            <div className="text-[#847770] text-base">
              <p className="font-medium text-[#2C2C22] mb-1">Store Hours</p>
              <p>Tue – Fri: 10:00 AM – 6:00 PM</p>
              <p>Sat: 10:00 AM – 4:00 PM</p>
              <p>Sun – Mon: Closed</p>
            </div>
            <p className="text-sm text-[#847770] italic">
              Easy to find &middot; Right in downtown Leitchfield
            </p>
            <Button href={MAPS_URL} external className="mt-2">
              <MapPin className="w-4 h-4" /> Open in Maps
            </Button>
          </div>
          <div className="flex-1 w-full min-h-[280px] rounded-2xl overflow-hidden shadow-sm border border-[#e8e2da]">
            <iframe
              title="Four Peas in a Pod Boutique location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.019964234839!2d-86.2931236847472!3d37.48023497981309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8865e2e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s120%20S%20English%20St%2C%20Leitchfield%2C%20KY%2042754!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ───── FINAL CTA ───── */}
      <section className="cta-gradient relative overflow-hidden rounded-3xl max-w-5xl mx-auto my-10 px-6 py-10 md:py-14 text-center">
        <div
          className="blob-bg bg-white w-[400px] h-[300px] top-[-100px] right-[-100px]"
          style={{ position: "absolute", opacity: 0.08 }}
        />
        <div
          className="blob-bg bg-white w-[300px] h-[250px] bottom-[-80px] left-[-60px]"
          style={{ position: "absolute", opacity: 0.06 }}
        />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 heading-serif relative z-10">
          Come See What Everyone&apos;s Loving
        </h2>
        <p className="text-lg text-white/95 max-w-md mx-auto relative z-10 mb-3">
          Stop in, look around, and find something you didn&apos;t know you
          needed{" "}
          <span className="heart-pulse">
            <Heart className="inline w-5 h-5 fill-white text-white" />
          </span>
        </p>
        <Image
          src="/images/four-peas-in-a-pod-illustration.png"
          alt="Four peas in a pod illustration"
          width={100}
          height={50}
          className="mx-auto relative z-10 opacity-80"
        />
      </section>
    </>
  );
}
