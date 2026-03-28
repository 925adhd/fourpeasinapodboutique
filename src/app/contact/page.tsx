import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Four Peas in a Pod Boutique",
  description:
    "Get in touch with Four Peas in a Pod Boutique. Visit us at 120 S English Street, Leitchfield, KY 42754 or call (270) 230-3035.",
  keywords: [
    "Contact Four Peas in a Pod",
    "Leitchfield KY boutique directions",
    "Boutique phone number Leitchfield",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#F8F6F2] overflow-hidden page-header">
        <div
          className="blob-bg bg-[#7A8B74] w-[350px] h-[250px] top-[-60px] left-[50%]"
          style={{ position: "absolute" }}
        />
        <div
          className="blob-bg bg-[#C9A9A6] w-[250px] h-[180px] bottom-[-40px] left-[-30px]"
          style={{ position: "absolute" }}
        />
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A9A6] mb-2">
            We&apos;d love to hear from you
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#7A8B74] mb-2 md:mb-4 heading-serif">
            Get in Touch
          </h1>
          <p className="text-lg text-[#847770] max-w-xl mx-auto">
            Stop by, call, or send us a message
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#7A8B74] mb-4 heading-serif">
                Visit Our Shop
              </h2>
              <div className="flex items-start gap-4">
              <address className="not-italic space-y-3 text-lg text-[#2C2C22] flex-1">
                <p>
                  <span className="font-medium">Address:</span>
                  <br />
                  120 S English Street
                  <br />
                  Leitchfield, KY 42754
                </p>
                <p>
                  <span className="font-medium">Phone:</span>
                  <br />
                  <a
                    href="tel:+12702303035"
                    className="text-[#5f7059] hover:text-[#C9A9A6] transition-colors"
                  >
                    (270) 230-3035
                  </a>
                </p>
              </address>
              <div className="w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-sm border border-[#f0e8e0]">
                <Image
                  src="/images/storefront-valentines-snow.jpg"
                  alt="Four Peas in a Pod Boutique storefront"
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C2C22] mb-2">
                Store Hours
              </h3>
              <div className="space-y-1 text-[#2C2C22]">
                <div className="flex justify-between max-w-xs">
                  <span>Tuesday – Friday</span>
                  <span className="text-[#847770]">10 AM – 6 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span className="text-[#847770]">10 AM – 4 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sun – Mon</span>
                  <span className="text-[#847770]">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C2C22] mb-2">
                Follow Us
              </h3>
              <a
                href="https://www.facebook.com/profile.php?id=61579927267125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5f7059] hover:text-[#C9A9A6] transition-colors font-medium"
                aria-label="Follow Four Peas in a Pod Boutique on Facebook"
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
                Facebook
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#e8e2da] shadow-sm h-[220px]">
              <iframe
                title="Four Peas in a Pod Boutique location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.019964234839!2d-86.2931236847472!3d37.48023497981309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8865e2e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s120%20S%20English%20St%2C%20Leitchfield%2C%20KY%2042754!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#7A8B74] mb-4 heading-serif">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
