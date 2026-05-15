import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Header />

      <main className="min-h-screen overflow-x-hidden bg-[#07070c] text-white">
        <Hero />
        <ProductPreview />
        <Features />
        <Pricing />
      </main>
    </>
  );
}