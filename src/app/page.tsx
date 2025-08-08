import Hero from "../components/Hero";
import Trending from "../components/Trending";
import AmazonPicks from "../components/AmazonPicks";
import Blog from "../components/Blog";
import SocialProof from "../components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <AmazonPicks />
      <Blog />
      <SocialProof />
    </>
  );
}