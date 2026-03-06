"use client";
import { ArrowRight } from "lucide-react";

import { BottomLink } from "../../types/nav.types";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});



interface BottomLinksProps {
  links: BottomLink[];
}

export function BottomLinks({ links }: BottomLinksProps) {
  return (
    <div
      className={`${interTight.className} grid border-t border-black/10`}
      style={{ gridTemplateColumns: `repeat(${links.length}, 1fr)` }}
    >
      {links.map((l, i) => (
        <button
          key={l.label}
          className={`flex flex-col items-center text-center gap-1 px-4 py-5
            group bg-transparent border-none cursor-pointer
             transition-colors duration-200
            ${i < links.length - 1 ? "border-r border-black/10" : ""}`}
        >
          <p className={`${barlow.className} text-lg font-extrabold text-black`}>{l.label}</p>
          {l.sub && <p className="text-sm text-gray-500">{l.sub}</p>}
          <span className="flex items-center gap-1 text-sm font-bold mt-1 text-black/70
            group-hover:text-black transition-colors duration-200">
            Saber más
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      ))}
    </div>
  );
}