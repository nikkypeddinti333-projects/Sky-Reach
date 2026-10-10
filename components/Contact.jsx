"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New enquiry from website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-sky/30 bg-white px-4 py-3 text-base outline-none focus:border-sky focus:ring-2 focus:ring-sky/30";

  return (
    <section id="contact" className="bg-gradient-to-b from-sky-soft to-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Let&apos;s talk about your growth</h2>
          <p className="mt-4 max-w-md text-lg text-ink/75">
            Share your details and we will get back to you with a plan for your business.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-semibold text-navy">Address</dt>
              <dd className="text-ink/80">{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Phone</dt>
              <dd>
                <a href={`tel:+91${SITE.phone}`} className="text-sky-deep hover:underline">{SITE.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-sky-deep hover:underline">{SITE.email}</a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="space-y-5 rounded-3xl bg-white p-7 shadow-xl shadow-navy/10 sm:p-9">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-semibold text-navy">Name *</label>
            <input id="name" required value={form.name} onChange={update("name")} className={field} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-semibold text-navy">Email *</label>
            <input id="email" type="email" required value={form.email} onChange={update("email")} className={field} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block font-semibold text-navy">Phone *</label>
            <input id="phone" type="tel" required value={form.phone} onChange={update("phone")} className={field} autoComplete="tel" />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-navy py-3.5 font-semibold text-white hover:bg-sky-deep"
          >
            Send
          </button>
          {sent && (
            <p role="status" className="text-center text-sm text-ink/70">
              Your email app should open with the details filled in. Press send there to finish.
            </p>
          )}
        </form>
      </div>
              {/* Google Map - Full Width at Bottom */}
        <div className="md:col-span-2 mt-4 w-full overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=17.0072731,81.7917102&z=17&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="New Dharani Hospital Location"
          />
          <a
            href="https://www.google.com/maps/place/New+Dharani+Hospital/@17.0072731,81.7917102,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white px-4 py-3 text-sm font-semibold text-sky-deep hover:underline"
          >
            View on Google Maps ↗
          </a>
        </div>
    </section>
  );
}
