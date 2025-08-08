import Image from "next/image";
import Link from "next/link";

/**
 * Array of trending products with images and pricing. These values are
 * placeholder examples – feel free to replace them with live data from
 * Printify once API access is configured. Each product links out to the
 * public Printify store.
 */
const trendingProducts = [
  {
    id: 1,
    image: "/assets/trending1.png",
    title: "Glitch Drip Tee",
    price: "$24.99",
    link: "https://barely-legal-cotton.printify.me",
  },
  {
    id: 2,
    image: "/assets/trending2.png",
    title: "Neon Chaos Tee",
    price: "$28.50",
    link: "https://barely-legal-cotton.printify.me",
  },
  {
    id: 3,
    image: "/assets/trending3.png",
    title: "Crypto King Tee",
    price: "$26.00",
    link: "https://barely-legal-cotton.printify.me",
  },
];

export default function Trending() {
  return (
    <section id="trending" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-heading">
          Trending Tees
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#11141c] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {product.price}
                </p>
                <Link
                  href={product.link}
                  target="_blank"
                  className="btn-primary inline-block text-center w-full"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}