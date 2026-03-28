export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Four Peas in a Pod Boutique",
    description:
      "Children's clothing, maternity wear, and plus-size fashion boutique in Leitchfield, Kentucky. First responder owned.",
    url: "https://fourpeasboutique.com/",
    telephone: "+1-270-230-3035",
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 S English Street",
      addressLocality: "Leitchfield",
      addressRegion: "KY",
      postalCode: "42754",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4802,
      longitude: -86.2931,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61579927267125",
    ],
    image: "https://fourpeasboutique.com/images/storefront-valentines-snow.jpg",
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Jessi Fentress",
    },
    areaServed: {
      "@type": "City",
      name: "Leitchfield",
      containedInPlace: {
        "@type": "State",
        name: "Kentucky",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
