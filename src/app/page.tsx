import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import APropos from "@/components/section/Apropos";
import Projets from "@/components/section/Projets";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import { siteDictionary } from "@/i18n/dictionaries";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar copy={siteDictionary.navbar} />
      <Hero copy={siteDictionary.hero} />
      <APropos copy={siteDictionary.apropos} />
      <Projets copy={siteDictionary.projets} />
      <Contact copy={siteDictionary.contact} />
      <Footer copy={siteDictionary.footer} />
    </main>
  );
}
