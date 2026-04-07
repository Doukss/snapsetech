import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import APropos from "@/components/section/Apropos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <APropos />
    </main>
  );
}
