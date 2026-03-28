"use client";
import Image from "next/image";

const items = [
  { src: "/images/handmade-crochet-plushies.jpg", alt: "Handmade crochet plushies" },
  { src: "/images/boutique-tumbler-drinkware.jpg", alt: "Boutique tumblers and drinkware" },
  { src: "/images/bath-body-products-display.jpg", alt: "Bath and body products" },
  { src: "/images/press-on-nails-beauty.jpg", alt: "Press-on nails and beauty accessories" },
  { src: "/images/boutique-gifts-seasonal-decor.jpg", alt: "Gifts and seasonal decor" },
  { src: "/images/boutique-owner-unique-finds.jpg", alt: "Unique boutique finds" },
  { src: "/images/holiday-seasonal-decor-display.jpg", alt: "Seasonal holiday decor" },
  { src: "/images/valentines-day-gifts-display.jpg", alt: "Valentine's Day gifts" },
];

export default function NewArrivalsStrip() {
  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-8 md:py-10">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A9A6]">
          Always something new
        </span>
      </div>
      <div className="arrivals-track">
        {doubled.map((item, i) => (
          <div key={`${item.src}-${i}`} className="arrival-item">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
