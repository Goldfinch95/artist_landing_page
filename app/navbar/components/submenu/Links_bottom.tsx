"use client";
import { ArrowRight } from "lucide-react";
import { BottomLink } from "../../types/nav.types";

interface BottomLinksProps {
  links: BottomLink[];
}

export function BottomLinks({ links }: BottomLinksProps) {
  return (
    <div className="flex gap-8 px-6 py-4 border-t border-black/8">
      {links.map((l) => (
        <button key={l.label}
          className="flex items-center gap-2 group text-left bg-transparent border-none cursor-pointer p-0">
          <div>
            <p className="text-[13px] font-extrabold">{l.label}</p>
            {l.sub && <p className="text-xs text-gray-500">{l.sub}</p>}
          </div>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      ))}
    </div>
  );
}
