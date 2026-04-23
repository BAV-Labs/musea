import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReactNode, useEffect } from "react";

interface LegalLayoutProps {
  title: string;
  eyebrow: string;
  children: ReactNode;
  pageTitle: string;
}

export const LegalLayout = ({ title, eyebrow, children, pageTitle }: LegalLayoutProps) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 sm:pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] mb-12 text-balance">
            {title}
          </h1>
          <div className="prose-content space-y-8 text-ink-soft leading-relaxed text-[15px]">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h2 className="font-display text-2xl text-ink mb-3">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);
