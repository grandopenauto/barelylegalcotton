import Image from "next/image";
import Link from "next/link";

/**
 * SocialProof encourages visitors to join the community by showcasing
 * lifestyle imagery and providing links to social channels. In the absence
 * of real customer photos, we reuse existing assets from the project as
 * placeholders. Replace these with authentic user‑generated content to
 * strengthen credibility.
 */
const gallery = [
  "/assets/trending1.png",
  "/assets/trending2.png",
  "/assets/trending3.png",
  "/assets/category1.png",
  "/assets/category2.png",
];

export default function SocialProof() {
  return (
    <section id="community" className="py-16 px-6 md:px-12 lg:px-24 bg-[#0f1120]">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-heading text-center">
            Join The Movement
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-8">
            Our street team is out there breaking the mould. Tag your fits and
            get featured – or hop into our Discord to connect with other
            misfits.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
            {gallery.map((img, idx) => (
              <div key={idx} className="relative w-full pt-[100%] overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`Community shot ${idx + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://discord.com/invite/yourinvite"
              target="_blank"
              className="btn-primary inline-flex items-center justify-center"
            >
              Join our Discord
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Follow on Instagram
            </Link>
          </div>
      </div>
    </section>
  );
}