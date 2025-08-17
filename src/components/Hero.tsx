import Image from "next/image";
import Link from "next/link";

/**
 * Hero section introducing the BarelyLegalCotton brand. It features a full
 * width background image, a bold headline, supporting copy and two call
 * to action buttons. External links open in a new tab where appropriate.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-hero"
    >
      {/* Background image is decorative; fill container behind content */}
      <Image
        src="/assets/hero.png"
        alt="vaporwave glitch background"
        fill
        priority
        className="object-cover object-center opacity-80 pointer-events-none"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
          Fashion Too Good To Be Legal
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 mb-10">
          Bold, rebellious and dripping in awesome sauce – welcome to the underground.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://barely-legal-cotton.printify.me"
            target="_blank"
            className="btn-primary inline-flex items-center justify-center shadow-md"
          >
            Shop Our Drops
          </Link>
          <Link
            href="/affiliate"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Earn With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
