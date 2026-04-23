import { Button } from "./ui/button";
import { PhoneFrame } from "./PhoneFrame";
import { AppScreen } from "./AppScreen";
import { ArrowDown, Play } from "lucide-react";
import portrait from "@/assets/art-portrait.jpg";
import sculpture from "@/assets/art-sculpture.jpg";
import egyptian from "@/assets/art-egyptian.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-20 overflow-hidden">
      {/* Decorative editorial shapes */}
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-beige/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="h-px w-10 bg-ink/30" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-ink-soft font-medium">
            Vol. 01 · The Met Collection
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Headline */}
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-[5.5rem] leading-[0.95] font-light text-ink text-balance">
              Explore
              <span className="block italic font-normal text-accent">timeless art</span>
              <span className="block">in your pocket.</span>
            </h1>

            <p className="mt-8 text-lg text-ink-soft max-w-xl text-pretty leading-relaxed">
              MUSEA is a quiet, considered companion to The Metropolitan Museum
              of Art's open collection — built for curious minds and slow looking.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3" id="download">
              <Button size="lg" className="rounded-full bg-ink text-paper hover:bg-ink/90 h-12 px-7 text-sm">
                <Play className="w-4 h-4 mr-2 fill-paper" /> Download on Google Play
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-6 text-sm text-ink hover:bg-ink/5">
                <a href="#features">View features <ArrowDown className="w-4 h-4 ml-1.5" /></a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-ink">470K+</div>
                <div className="mt-1">Open access works</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-ink">17</div>
                <div className="mt-1">Curatorial departments</div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-2xl text-ink">∞</div>
                <div className="mt-1">Hours of slow looking</div>
              </div>
            </div>
          </div>

          {/* Phone composition */}
          <div className="lg:col-span-5 relative h-[520px] sm:h-[600px]">
            <div className="absolute top-8 left-4 sm:left-12 animate-float" style={{ animationDelay: "0s" }}>
              <PhoneFrame size="md" className="rotate-[-6deg]">
                <AppScreen variant="discover" image={portrait} title="Vermeer Study" meta="European Paintings" />
              </PhoneFrame>
            </div>
            <div className="absolute top-0 right-0 sm:right-4 animate-float" style={{ animationDelay: "1.5s" }}>
              <PhoneFrame size="md" className="rotate-[5deg]">
                <AppScreen variant="details" image={sculpture} title="Marble Bust" />
              </PhoneFrame>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-32 animate-float hidden sm:block" style={{ animationDelay: "0.8s" }}>
              <PhoneFrame size="sm" className="rotate-[-2deg]">
                <AppScreen variant="favorites" image={egyptian} />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
