import gallery from "@/assets/homescreen.png";

export const About = () => (
  <section id="about" className="py-24 sm:py-32 bg-ink text-paper relative overflow-hidden">
    <div className="absolute inset-0 opacity-25">
      <img src={gallery} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
    </div>

    <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
      <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-6">
        §03 — The project
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.05] max-w-4xl text-balance">
        A series of museum apps. <span className="italic text-paper/70">This is volume one.</span>
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <div className="font-mono text-xs text-accent mb-3">VOL. 01</div>
          <h3 className="font-display text-2xl mb-3">The Met Collection</h3>
          <p className="text-paper/70 text-[15px] leading-relaxed">
            Our first volume opens The Metropolitan Museum of Art's open access
            collection — nearly half a million works, brought close.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs text-accent mb-3">VOL. 02 →</div>
          <h3 className="font-display text-2xl mb-3">Next chapters</h3>
          <p className="text-paper/70 text-[15px] leading-relaxed">
            Future volumes will follow the same care for other great public
            collections, opening museums one at a time.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs text-accent mb-3">PRINCIPLE</div>
          <h3 className="font-display text-2xl mb-3">Independent</h3>
          <p className="text-paper/70 text-[15px] leading-relaxed">
            MUSEA is an independent project by BAV Labs. It is not affiliated
            with or endorsed by any museum it features.
          </p>
        </div>
      </div>
    </div>
  </section>
);
