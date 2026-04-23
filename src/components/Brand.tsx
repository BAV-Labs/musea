import museaMark from "@/assets/musea-mark.jpg";
import { Link } from "react-router-dom";

interface BrandProps {
  variant?: "default" | "light";
}

export const Brand = ({ variant = "default" }: BrandProps) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <div className="w-9 h-9 rounded-xl overflow-hidden bg-paper border border-border/60 flex items-center justify-center">
      <img src={museaMark} alt="" className="w-full h-full object-cover scale-110" />
    </div>
    <div className="leading-none">
      <div className={`font-display text-lg font-semibold tracking-tight ${variant === "light" ? "text-paper" : "text-ink"}`}>
        MUSEA
      </div>
      <div className={`text-[10px] uppercase tracking-[0.18em] mt-0.5 ${variant === "light" ? "text-paper/60" : "text-muted-foreground"}`}>
        The Met Collection
      </div>
    </div>
  </Link>
);
