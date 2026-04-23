import { Mail, Github, ArrowUpRight } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
        §06 — Get in touch
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] mb-12 max-w-3xl text-balance">
        Questions, ideas, collaborations — <span className="italic">we read everything.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <a
          href="mailto:bav-labs@proton.me"
          className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-paper border border-border hover:border-ink/30 transition-all hover:shadow-elevated"
        >
          <Mail className="w-6 h-6 text-ink mb-8" />
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</div>
          <div className="font-display text-2xl sm:text-3xl text-ink">bav-labs@proton.me</div>
          <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-ink-soft group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <a
          href="https://github.com/BAV-Labs"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-8 sm:p-10 rounded-3xl bg-ink text-paper border border-ink hover:shadow-elevated transition-all"
        >
          <Github className="w-6 h-6 text-paper mb-8" />
          <div className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-2">GitHub</div>
          <div className="font-display text-2xl sm:text-3xl">github.com/BAV-Labs</div>
          <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-paper/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);
