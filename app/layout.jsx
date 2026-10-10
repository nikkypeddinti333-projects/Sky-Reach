import "./globals.css";
import { Bricolage_Grotesque, Figtree } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Skyreach Digital | Digital Marketing Agency in Andhra Pradesh | Rajahmundry | Kakinada | Telangana",
  description:
    "Skyreach Digital offers SEO, Google Ads, social media marketing, local SEO, Ai SEO, website development & all digital marketing agency services in Andhra Pradesh & Telangana to grow your online presence and leads.",
    icons: {
    icon: "https://skyreachdigital.in/wp-content/uploads/2026/05/cropped-Untitled-1-216x72.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
