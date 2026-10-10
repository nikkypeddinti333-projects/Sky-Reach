const POINTS = [
  { t: "Tailored to your goals", d: "Every plan starts from what your business wants to grow, not a fixed package." },
  { t: "Built for all sizes", d: "From local shops to growing companies, we scale the work to fit the budget." },
  { t: "Proven, measurable results", d: "We track leads, calls and sales so you can see what the marketing delivers." },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            A our team that grows brands online
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
            SkyReach Digital offers SEO, PPC, social media, web design and branding solutions to help
            businesses build visibility and earn more customers online.
          </p>
        </div>
        <ul className="space-y-6">
          {POINTS.map((p) => (
            <li key={p.t} className="border-l-4 border-sun pl-5">
              <h3 className="font-display text-xl font-semibold">{p.t}</h3>
              <p className="mt-1 text-white/75">{p.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
