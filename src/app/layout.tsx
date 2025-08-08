import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

/*
 * The root layout imports two Google fonts – Oswald for headings and Open Sans
 * for body text. Both fonts expose CSS variables that are wired up via
 * globals.css. This allows us to define typography on the root element
 * without repetitively applying font classes on every component.
 */
const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "BarelyLegalCotton | Not Your Grandma’s Cotton Tee",
  description:
    "BarelyLegalCotton delivers rebellious streetwear and curated gear with a crypto aesthetic. Shop drops, earn rewards and explore our picks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${openSans.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
