import Link from "next/link";

export default function Affiliate() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-[#0b0d11] text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-6">
          Earn With Us
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Love our drip? Share it and get paid. When you join the
          BarelyLegalCotton street team you’ll receive a unique referral link
          that pays you a commission on every sale you drive. Whether you’re
          posting fits on TikTok, streaming on Twitch or running your own
          newsletter, our program fits your hustle.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>10% base commission on every item sold through your link</li>
          <li>Early access to new drops and limited runs</li>
          <li>Exclusive content and community support</li>
        </ul>
        <p className="text-gray-400 mb-8">
          We provide everything you need: unique tracking links, creative assets
          and product feeds. You just bring the hype.
        </p>
        <Link
          href="mailto:affiliates@barelylegalcotton.com?subject=Affiliate%20Program%20Application"
          className="btn-primary inline-block"
        >
          Apply Now
        </Link>
      </div>
    </main>
  );
}