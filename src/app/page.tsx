import { Header } from "@/components/Header";
import { Hero } from "@/components/section-main/Hero";
import { Features } from "@/components/section-main/Features";
import { Testimonials } from "@/components/section-main/Testimonials";
import { Pricing } from "@/components/section-main/Pricing";
import { FAQ } from "@/components/section-main/FAQ";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/section-main/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
