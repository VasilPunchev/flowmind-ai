import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080d] text-white">
      <Header />
      <Hero />
      <ProductPreview />
      <Features />
    </main>
  );
}