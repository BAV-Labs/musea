import homescreen from "@/assets/homescreen.png";
import artworkDetail from "@/assets/artwork-detail.png";
import artworkInfo from "@/assets/artwork-info.png";
import categories from "@/assets/departments.png";
import favorites from "@/assets/your-collections.png";
import visit from "@/assets/visit.png";

const screens = [
  { variant: "discover" as const, image: homescreen, title: "Discover", caption: "Curated openings into the collection." },
  { variant: "search" as const, image: artworkDetail, title: "Details", caption: "Across 470,000+ open access works." },
  { variant: "details" as const, image: artworkInfo, title: "Learn More", caption: "Full provenance, medium and context.", artworkTitle: "Water Lilies" },
  { variant: "categories" as const, image: categories, title: "Categories", caption: "Browse by department and culture." },
  { variant: "favorites" as const, image: favorites, title: "Favorites", caption: "Mark works. Return to them anytime." },
  { variant: "visit" as const, image: visit, title: "Visit", caption: "Find all the info about visiting the museum." },
];

export const Screens = () => (
  <section id="screens" className="py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
            §04 — Plates
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
            Six surfaces. <span className="italic">One quiet system.</span>
          </h2>
        </div>
        <p className="text-ink-soft max-w-sm text-pretty">
          Every screen follows the same typographic rhythm and restraint —
          the artwork stays the subject.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {screens.map((s, i) => (
          <figure
            key={s.title}
            className="group relative bg-gradient-paper rounded-3xl border border-border p-8 pb-6 flex flex-col items-center transition-all hover:shadow-elevated hover:-translate-y-1 duration-500"
          >
            <div className="absolute top-5 left-6 font-mono text-[10px] text-muted-foreground tracking-wider">
              PL. {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-4 mb-6 transform-gpu group-hover:scale-[1.02] transition-transform duration-700">
              <div className="w-[180px]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-auto block rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <figcaption className="text-center">
              <div className="font-display text-xl text-ink">{s.title}</div>
              <div className="text-sm text-ink-soft mt-1.5 text-pretty">{s.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
