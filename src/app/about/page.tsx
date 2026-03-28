import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "About Us | Four Peas in a Pod Boutique",
  description:
    "Learn about Four Peas in a Pod Boutique — founded by paramedic Jessi Fentress in Leitchfield, Kentucky. Children's clothing, maternity wear, and plus-size fashion built on community and heart.",
  keywords: [
    "About Four Peas in a Pod",
    "Leitchfield KY boutique",
    "Family-owned boutique Kentucky",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#F8F6F2] overflow-hidden page-header">
        <div
          className="blob-bg bg-[#7A8B74] w-[400px] h-[300px] top-[-80px] right-[-60px]"
          style={{ position: "absolute" }}
        />
        <div
          className="blob-bg bg-[#C9A9A6] w-[300px] h-[200px] bottom-[-60px] left-[-40px]"
          style={{ position: "absolute" }}
        />
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-6 md:pt-10 md:pb-8 text-center relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-md border-3 border-white/60">
            <Image
              src="/images/four-peas-wreath-logo.jpg"
              alt="Four Peas in a Pod Boutique wreath logo"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#7A8B74] mb-1 heading-serif">
            Our Story
          </h1>
          <p className="text-sm md:text-base text-[#847770] max-w-xl mx-auto">
            A little shop with a whole lot of heart
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <SectionWrapper className="!py-8 md:!py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A8B74] heading-serif">
              Built on Inspiration
            </h2>
            <p className="text-base md:text-lg text-[#2C2C22] leading-relaxed">
              Four Peas in a Pod Boutique was born from a real need. After
              managing &ldquo;Pretty in Pink by Maddi&rdquo; boutique, owner
              Jessi Fentress struggled to find age-appropriate clothes for her
              two daughters — and realized the demand for children&apos;s,
              maternity, and plus-size fashion went far beyond what one shop
              could offer.
            </p>
            <p className="text-base md:text-lg text-[#2C2C22] leading-relaxed">
              That spark became Four Peas in a Pod — a dedicated space for
              stylish, inclusive clothing that caters to kids, expecting moms,
              and plus-size adults. Located right next door to &ldquo;Pretty in
              Pink by Maddi,&rdquo; the two shops complement each other under
              one roof, connected by friendship and a shared love for the
              Leitchfield community.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="about-image-wrap rounded-2xl overflow-hidden shadow-md border-2 border-white/60">
              <Image
                src="/images/storefront-valentines-snow.jpg"
                alt="Four Peas in a Pod Boutique storefront with Valentine's Day display in snowy Leitchfield KY"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Founders */}
      <SectionWrapper className="!py-8 md:!py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#7A8B74] heading-serif">
              Why &ldquo;Four Peas in a Pod&rdquo;?
            </h2>
            <p className="text-base md:text-lg text-[#2C2C22] leading-relaxed">
              The name comes from the four women at the heart of it all — Jessi
              Fentress, her mother Stephanie Slayton, Jessica Lowe, and Lindsey
              Miller. Each brings something unique: Stephanie&apos;s experience
              running her own business, Jessica&apos;s marketing expertise,
              Lindsey&apos;s years running &ldquo;Little Stitches,&rdquo; and
              Jessi&apos;s drive and vision. Together, they&apos;re four peas in
              a pod — and that bond is what makes this boutique feel like more
              than just a store.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="about-image-wrap rounded-2xl overflow-hidden shadow-md border-2 border-white/60">
              <Image
                src="/images/boutique-founders-portrait.webp"
                alt="Founders of Four Peas in a Pod Boutique — Jessi Fentress, Stephanie Slayton, and Jessica Lowe"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Shop Life */}
      <SectionWrapper className="!py-8 md:!py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A8B74] heading-serif">
              A True Family Affair
            </h2>
            <p className="text-base md:text-lg text-[#2C2C22] leading-relaxed">
              This shop isn&apos;t just run by family — it&apos;s raising the
              next generation right alongside it. From little hands helping at
              the register to everyone pitching in on seasonal displays, the
              kids are growing up learning what it means to serve your community
              and love what you do.
            </p>
            <p className="text-[#847770] italic text-base md:text-lg quote-accent">
              &ldquo;I&apos;m thrilled to combine my love for fashion with my
              passion for serving families in our wonderful community.&rdquo;
              — Jessi Fentress
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="about-image-wrap rounded-2xl overflow-hidden shadow-md border-2 border-white/60">
              <Image
                src="/images/family-boutique-shop-life.jpg"
                alt="Young family member helping at the Four Peas in a Pod Boutique register"
                width={340}
                height={420}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Inside the Shop + Values combined */}
      <div className="section-gradient-blush">
        <SectionWrapper className="!py-8 md:!py-10">
          <h2 className="text-2xl font-semibold text-[#7A8B74] heading-serif text-center mb-6">
            Inside the Shop
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 md:mb-14">
            {[
              { src: "/images/valentines-day-gifts-display.jpg", alt: "Valentine's Day gifts and seasonal displays" },
              { src: "/images/handmade-crochet-plushies.jpg", alt: "Handmade crochet plushie animals" },
              { src: "/images/bath-body-products-display.jpg", alt: "Bath and body products" },
              { src: "/images/holiday-seasonal-decor-display.jpg", alt: "Holiday decor and seasonal items" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden shadow-sm aspect-square relative group card-hover">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-[#7A8B74] heading-serif text-center mb-6">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Community First", text: "Leitchfield is home. We support local, shop local, and lift up our neighbors every chance we get." },
              { title: "Real Relationships", text: "We know our customers by name. That personal connection is what makes us different." },
              { title: "Inclusive Style", text: "From kids to maternity to plus-size — fashion should make you feel good, no matter your size, age, or budget." },
              { title: "Heart Over Hustle", text: "We just want to be the most welcoming shop you've ever walked into." },
            ].map((value) => (
              <div key={value.title} className="bg-[#fff8f4] rounded-2xl p-5 border border-[#f0e8e0] card-hover">
                <h3 className="font-semibold text-[#2C2C22] mb-1.5">{value.title}</h3>
                <p className="text-[#847770] text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* CTA */}
      <section className="cta-gradient relative overflow-hidden rounded-3xl max-w-5xl mx-auto mb-8 px-6 py-10 md:py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 heading-serif relative z-10">
          Come See Us
        </h2>
        <p className="text-white/95 mb-5 max-w-md mx-auto relative z-10">
          We&apos;d love to meet you in person. Stop by and&nbsp;say&nbsp;hello!
        </p>
        <Button href="/contact" variant="white" className="relative z-10">
          Get Directions
        </Button>
      </section>
    </>
  );
}
