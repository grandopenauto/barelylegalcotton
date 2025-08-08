import Image from "next/image";
import Link from "next/link";

/**
 * Sample blog posts. These are static examples; in a real build you could
 * source markdown files or content from a headless CMS. Each post has a
 * title, summary and optional image. If no image is provided, a coloured
 * gradient background is used instead.
 */
const posts = [
  {
    id: 1,
    title: "Top 10 Viral Memes of 2025",
    summary:
      "A roundup of the dankest memes dominating your feed and how to wear them.",
    image: "/assets/blog1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Behind the Design: Pink Bootyholes Collection",
    summary:
      "Go inside the studio and meet the creators behind our most controversial drop.",
    image: "/assets/trending2.png",
    link: "#",
  },
  {
    id: 3,
    title: "From Closet to Crypto: Fashion Meets Web3",
    summary:
      "We explore the intersection of streetwear and blockchain, and why tokens are the next accessory.",
    image: "/assets/trending3.png",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-heading">
          Latest Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#11141c] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative w-full h-40">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffc6] to-[#ff00a0]"></div>
                )}
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 font-heading">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  {post.summary}
                </p>
                <Link href={post.link} className="btn-secondary inline-block text-center">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}