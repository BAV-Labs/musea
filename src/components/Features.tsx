import { Compass, Search, LayoutGrid, Heart, FolderOpen, FileText } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { AppScreen } from "./AppScreen";
import portrait from "@/assets/art-portrait.jpg";
import sculpture from "@/assets/art-sculpture.jpg";
import ukiyoe from "@/assets/art-ukiyoe.jpg";
import impressionist from "@/assets/art-impressionist.jpg";

const features = [
  { icon: Compass, title: "Discover", text: "Hand-curated openings into the collection — fresh works each visit." },
  { icon: Search, title: "Search", text: "Find by artist, period, medium or keyword across 470,000+ works." },
  { icon: LayoutGrid, title: "Categories", text: "Browse by department, classification and culture." },
  { icon: Heart, title: "Favorites", text: "Mark works that move you. Return to them anytime, offline-aware." },
  { icon: FolderOpen, title: "Collections", text: "Build personal galleries — Renaissance, sculpture, your own thread." },
  { icon: FileText, title: "Details", text: "Full metadata, provenance and gallery context, presented beautifully." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-20">
          <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
            §02 — Capabilities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
            Built for the way you actually <span className="italic">look at art.</span>
          </h2>
        </div>

        {/* Editorial layout: left visual composition + right feature list */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Visual composition */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative h-[540px] bg-gradient-paper rounded-3xl border border-border overflow-hidden grain">
              <div className="absolute top-10 left-8">
                <PhoneFrame size="md" className="rotate-[-4deg]">
                  <AppScreen variant="search" image={ukiyoe} />
                </PhoneFrame>
              </div>
              <div className="absolute bottom-8 right-6">
                <PhoneFrame size="md" className="rotate-[6deg]">
                  <AppScreen variant="categories" image={impressionist} />
                </PhoneFrame>
              </div>
              <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
                <PhoneFrame size="sm" className="rotate-[-8deg]">
                  <AppScreen variant="collections" image={portrait} />
                </PhoneFrame>
              </div>
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Plate i
              </div>
              <div className="absolute bottom-6 left-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Search · Categories · Collections
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="lg:col-span-6">
            <ul className="divide-y divide-border">
              {features.map((f, i) => (
                <li key={f.title} className="py-7 group flex gap-6">
                  <div className="text-[10px] font-mono text-muted-foreground pt-1 w-6">
                    0{i + 1}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-paper-deep border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                    <f.icon className="w-5 h-5 text-ink group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-ink mb-1.5">{f.title}</h3>
                    <p className="text-ink-soft text-[15px] leading-relaxed text-pretty">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
