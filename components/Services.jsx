import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-ink/75">
            We offer a full suite of digital marketing services designed to boost your brand visibility and
            drive ROI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`group overflow-hidden rounded-3xl border border-sky-soft bg-mist transition hover:-translate-y-1 hover:shadow-xl ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden bg-sky-soft ${i === 0 ? "h-64" : "h-52"}`}>
                {s.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-sky to-navy">
                    <span className="font-display text-5xl font-bold text-white/90">Aa</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-sky-deep">{s.sub}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-ink/75">{s.text}</p>
                <a href="#contact" className="mt-4 inline-block font-semibold text-sky-deep hover:underline">
                  Enquire about this service
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
