import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Screens } from "@/components/Screens";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MUSEA — Explore The Met Collection";
    const meta = document.querySelector('meta[name="description"]');
    const content = "MUSEA is a quiet, considered companion to The Metropolitan Museum of Art's open collection. Discover, search and save artworks.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Screens />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
