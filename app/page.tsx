import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import QuickView from "@/components/home/QuickView";
import PromoBanner from "@/components/home/PromoBanner";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <FAQ />
      <QuickView />
    </main>
  );
}