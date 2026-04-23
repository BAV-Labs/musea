import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-[180px] h-[370px]",
  md: "w-[240px] h-[490px]",
  lg: "w-[290px] h-[590px]",
};

export const PhoneFrame = ({ children, className = "", size = "md" }: PhoneFrameProps) => (
  <div
    className={`relative ${sizes[size]} rounded-[2.5rem] bg-ink p-2 shadow-phone ${className}`}
  >
    {/* Notch */}
    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-b-2xl z-20" />
    {/* Screen */}
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-paper">
      {children}
    </div>
  </div>
);
