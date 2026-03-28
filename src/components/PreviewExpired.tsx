export default function PreviewExpired() {
  return (
    <div className="min-h-screen bg-[#F8F6F2] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C22] mb-4 font-[family-name:var(--font-playfair)]">
          Preview Expired
        </h1>

        <p className="text-lg text-[#2C2C22]/70 mb-2">
          This site was designed and built by <span className="font-semibold text-[#2C2C22]">Studio 925</span>.
        </p>

        <p className="text-[#2C2C22]/50 mb-10">
          Your files are saved for 14 days. Ready to go live? Let&apos;s talk.
        </p>

        <a
          href="https://studio925.design"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2C2C22] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#2C2C22]/90 transition-colors shadow-lg hover:shadow-xl"
        >
          Visit Studio 925
        </a>

        <p className="mt-12 text-sm text-[#2C2C22]/40">
          Want a site like this for your business?
          <br />
          We build fast, modern websites that convert.
        </p>
      </div>
    </div>
  );
}
