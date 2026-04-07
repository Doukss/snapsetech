import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import APropos from "@/components/section/Apropos";
import Projets from "@/components/section/Projets";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <APropos />
      <Projets />
      <Contact />
      <Footer />
    </main>
  );
}
