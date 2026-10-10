export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-soft to-white pt-[50px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <div className="hero-in">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-sky-deep shadow-sm">
            Digital marketing agency in Andhra Pradesh & Telangana
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Empowering Brands with Smart Digital Strategies
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            At SkyReach Digital, we help businesses of all sizes build a strong digital presence through
            performance marketing, social media, SEO, and creative branding solutions, all tailored to your
            growth goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-sky px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky/30 hover:bg-sky-deep"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-navy px-7 py-3 font-semibold text-navy hover:bg-navy hover:text-white"
            >
              Our Services
            </a>
          </div>

                    <div className="mt-9">
            <a
              href="https://skyreachdigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto rounded-full bg-navy px-7 py-3.5 font-semibold text-orange-600 shadow-lg shadow-navy"
            >
              Get for More Details
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-sun/30 blur-2xl" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/web banner.jpg"
            alt="skyline illustration"
            className="relative w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}