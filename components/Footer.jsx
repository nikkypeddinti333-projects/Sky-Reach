import { SITE, NAV, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white px-3 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://skyreachdigital.in/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={SITE.logo} alt={SITE.name} className="h-10 w-auto" />
            </a>
            </div>
            <div>
              Skyreach Digital is a digital marketing agency helping businesses grow online through result-focused strategies. We offer SEO, local SEO, Google Ads, social media marketing, website design and development, and lead generation services to improve online visibility, attract potential customers, and drive business growth.
            </div>
        
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-white/75">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-white/75">
            {SERVICES.map((s) => (
              <li key={s.id}><a href="#services" className="hover:text-white">{s.title}</a></li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {SITE.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-4 py-1.5 text-sm hover:bg-white hover:text-navy"
              >
                {s.name}
              </a>
            ))}
          </div>
          
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Address</h3>
         <p className="mt-4 text-white/75">{SITE.address}</p>
          <p className="mt-3 text-white/75">
            <a href={`tel:+91${SITE.phone}`} className="hover:underline">{SITE.phone}</a>
          </p>
          <p className="mt-3 text-white/75">
            <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
          </p>
          </div>
      </div>
       
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        ©2025. All rights reserved by Skyreachdigital India
      </div>
    </footer>
  );
}
