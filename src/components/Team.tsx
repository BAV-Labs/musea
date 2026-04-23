import bavLogo from "@/assets/bav-labs.png";

const team = [
  { name: "Benjamin Sparwasser", role: "Engineering" },
  { name: "Alex Jäger Peña", role: "Design" },
  { name: "Valeria Bilous", role: "Product" },
];

export const Team = () => (
  <section id="team" className="py-24 sm:py-32 bg-paper-deep/60">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
            §05 — The studio
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-[1.05] mb-6 text-balance">
            BAV Labs.
          </h2>
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-paper border border-border mb-8">
            <img src={bavLogo} alt="BAV Labs" className="h-5 w-auto" />
          </div>
          <p className="text-ink-soft text-[15px] leading-relaxed text-pretty max-w-md">
            A small studio of developers and designers building meaningful
            digital experiences. We make tools we want to use ourselves —
            careful, calm, and honest about their craft.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {team.map((m, i) => (
              <li key={m.name} className="py-7 flex items-baseline justify-between gap-6 group">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-display text-2xl sm:text-3xl text-ink group-hover:italic transition-all">
                    {m.name}
                  </span>
                </div>
                <span className="text-sm text-ink-soft uppercase tracking-wider">{m.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
