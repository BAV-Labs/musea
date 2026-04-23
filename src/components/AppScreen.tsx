import { ReactNode } from "react";
import { Search, Heart, FolderOpen, LayoutGrid } from "lucide-react";

interface AppScreenProps {
  variant: "discover" | "search" | "details" | "favorites" | "collections" | "categories";
  image: string;
  title?: string;
  meta?: string;
}

const Chrome = ({ children, title }: { children: ReactNode; title?: string }) => (
  <div className="absolute inset-0 flex flex-col">
    <div className="pt-7 pb-2 px-4 flex items-center justify-between text-[9px] text-ink/70 font-medium">
      <span>9:41</span>
      <span className="flex gap-1">
        <span className="w-3 h-1.5 bg-ink/60 rounded-sm" />
        <span className="w-3 h-1.5 bg-ink/60 rounded-sm" />
        <span className="w-4 h-1.5 border border-ink/60 rounded-sm" />
      </span>
    </div>
    {title && (
      <div className="px-4 pb-2">
        <div className="font-display text-base font-semibold text-ink">{title}</div>
      </div>
    )}
    {children}
  </div>
);

export const AppScreen = ({ variant, image, title, meta }: AppScreenProps) => {
  if (variant === "discover") {
    return (
      <Chrome title="Discover">
        <div className="px-3 flex-1 overflow-hidden">
          <div className="rounded-2xl overflow-hidden h-[55%] relative shadow-soft">
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-ink/80 to-transparent">
              <div className="text-paper text-[11px] font-medium">{title || "Featured"}</div>
              <div className="text-paper/70 text-[9px]">{meta || "Curated today"}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="aspect-[3/4] rounded-xl bg-beige/60 overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover scale-110" loading="lazy" />
            </div>
            <div className="aspect-[3/4] rounded-xl bg-beige/60 overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover scale-125 -translate-y-2" loading="lazy" />
            </div>
          </div>
        </div>
      </Chrome>
    );
  }

  if (variant === "search") {
    return (
      <Chrome title="Search">
        <div className="px-3">
          <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-2 mb-3">
            <Search className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">Vermeer, sculpture, ukiyo-e…</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["Paintings", "Sculpture", "Asian Art", "Egyptian"].map((t) => (
              <span key={t} className="text-[9px] px-2 py-1 rounded-full bg-paper-deep border border-border text-ink">
                {t}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-muted overflow-hidden">
                <img src={image} alt="" className="w-full h-full object-cover" style={{ transform: `scale(1.${i + 1}) translateY(-${i * 4}px)` }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Chrome>
    );
  }

  if (variant === "details") {
    return (
      <Chrome>
        <div className="flex-1 flex flex-col">
          <div className="h-[55%] relative">
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-paper/90 backdrop-blur flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
            </button>
          </div>
          <div className="p-3 flex-1">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Oil on canvas · 1665</div>
            <div className="font-display text-sm font-semibold text-ink mt-1 leading-tight">{title || "Portrait Study"}</div>
            <div className="text-[10px] text-ink-soft mt-1">European Paintings · Gallery 614</div>
            <div className="mt-3 space-y-1">
              {["Medium", "Dimensions", "Accession"].map((l) => (
                <div key={l} className="flex justify-between text-[9px] py-1 border-b border-border/60">
                  <span className="text-muted-foreground">{l}</span>
                  <span className="text-ink">—</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Chrome>
    );
  }

  if (variant === "favorites") {
    return (
      <Chrome title="Favorites">
        <div className="px-3 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-2.5 p-2 rounded-xl bg-paper-deep">
              <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                <img src={image} alt="" className="w-full h-full object-cover" style={{ transform: `scale(1.${i + 1})` }} loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium text-ink truncate">Artwork title {i + 1}</div>
                <div className="text-[9px] text-muted-foreground">Saved 2 days ago</div>
              </div>
              <Heart className="w-3 h-3 text-accent fill-accent flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </Chrome>
    );
  }

  if (variant === "collections") {
    return (
      <Chrome title="Collections">
        <div className="px-3 space-y-2">
          {[
            { name: "Renaissance", count: 12, icon: image },
            { name: "Sculpture Hall", count: 8, icon: image },
            { name: "Asian Art", count: 24, icon: image },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-paper-deep border border-border/60">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FolderOpen className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-medium text-ink">{c.name}</div>
                <div className="text-[9px] text-muted-foreground">{c.count} works</div>
              </div>
            </div>
          ))}
        </div>
      </Chrome>
    );
  }

  // categories
  return (
    <Chrome title="Categories">
      <div className="px-3 grid grid-cols-2 gap-2">
        {["Paintings", "Sculpture", "Drawings", "Photography", "Asian Art", "Egyptian"].map((c, i) => (
          <div key={c} className="aspect-[4/3] rounded-xl overflow-hidden relative">
            <img src={image} alt="" className="w-full h-full object-cover" style={{ transform: `scale(1.${i + 2}) translate(-${i * 2}px, -${i * 3}px)` }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-1.5 left-2 right-2">
              <div className="text-paper text-[9px] font-medium">{c}</div>
            </div>
          </div>
        ))}
      </div>
    </Chrome>
  );
};

export { LayoutGrid };
