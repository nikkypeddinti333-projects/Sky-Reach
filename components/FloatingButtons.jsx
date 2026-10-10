"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi there, I would like to know more about your services.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-[#1FA855] px-5 py-3 font-semibold text-white shadow-lg hover:brightness-110"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 .9-2.300c.3-.3.600-.3.800-.3h.6c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600-.3.300c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.4-.2.600-.1l1.900.9c.3.100.5.200.6.300.1.200.1.800-.1 1.400Z" />
        </svg>
        WhatsApp
      </a>

      {show && (
        <a
          href="#home"
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-lg hover:bg-sky-deep"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="m6 15 6-6 6 6" />
          </svg>
        </a>
      )}
    </>
  );
}
