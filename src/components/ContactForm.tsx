"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div role="status" aria-live="polite" className="bg-[#fff8f4] rounded-2xl p-10 border border-[#f0e8e0] text-center shadow-sm">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#7A8B74]/10 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A8B74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#7A8B74] mb-2 heading-serif">
        Thank You!
      </h3>
      <p className="text-[#847770]">
        We&apos;ll get back to you as soon as we can. See you soon!
      </p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-[#847770] mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Jane Smith"
          className="w-full px-4 py-3.5 rounded-xl border border-[#e8e2da] bg-white/90 text-[#2C2C22] placeholder:text-[#bfb3a8] transition-all duration-300 hover:border-[#d4cbc2]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-[#847770] mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="jane@example.com"
          className="w-full px-4 py-3.5 rounded-xl border border-[#e8e2da] bg-white/90 text-[#2C2C22] placeholder:text-[#bfb3a8] transition-all duration-300 hover:border-[#d4cbc2]"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold uppercase tracking-wider text-[#847770] mb-2"
        >
          Phone{" "}
          <span className="text-[#bfb3a8] font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(270) 555-0123"
          className="w-full px-4 py-3.5 rounded-xl border border-[#e8e2da] bg-white/90 text-[#2C2C22] placeholder:text-[#bfb3a8] transition-all duration-300 hover:border-[#d4cbc2]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#847770] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-3.5 rounded-xl border border-[#e8e2da] bg-white/90 text-[#2C2C22] placeholder:text-[#bfb3a8] transition-all duration-300 resize-none hover:border-[#d4cbc2]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full px-7 py-3.5 font-semibold btn-premium text-white focus:outline-none focus:ring-2 focus:ring-[#C9A9A6] focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
