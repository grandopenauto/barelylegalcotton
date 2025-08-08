import Image from "next/image";
import Link from "next/link";

/**
 * Barely Legal Picks showcases curated categories of items available on Amazon.
 * These cards contain placeholder descriptions and links that include a
 * placeholder affiliate tag ("YOURAFFILIATEID"). Replace the tag with your
 * Amazon Associates ID when available. Each category encourages visitors to
 * explore further.
 */
const categories = [
  {
    id: 1,
    title: "Streetwear Accessories",
    description: "Sneakers, caps & jewellery with swagger.",
    image: "/assets/category1.png",
    link: "https://www.amazon.com/s?k=streetwear+accessories&tag=YOURAFFILIATEID",
  },
  {
    id: 2,
    title: "Meme Gifts",
    description: "LED signs, mugs & other dank delights.",
    image: "/assets/category2.png",
    link: "https://www.amazon.com/s?k=meme+gifts&tag=YOURAFFILIATEID",
  },
  {
    id: 3,
    title: "Creator Gear",
    description: "Mics, ring lights & studio essentials.",
    image: "/assets/category3.png",
    link: "https://www.amazon.com/s?k=creator+gear&tag=YOURAFFILIATEID",
  },
  {
    id: 4,
    title: "Lifestyle Add‑Ons",
    description: "Posters, figurines & incense burners.",
    image: "/assets/category4.png",
    link: "https://www.amazon.com/s?k=lifestyle+decor&tag=YOURAFFILIATEID",
  },
];

export default function AmazonPicks() {
  return (
    <section id="amazon" className="py-16 px-6 md:px-12 lg:px-24 bg-[#0f1120]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-heading">
          Barely Legal Picks
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#11141c] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col h-[calc(100%_-_160px)]">
                <h3 className="text-lg font-bold mb-1 font-heading">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  {cat.description}
                </p>
                <Link
                  href={cat.link}
                  target="_blank"
                  className="btn-primary inline-block text-center"
                >
                  Shop on Amazon
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}