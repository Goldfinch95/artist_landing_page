"use client";
import { ArrowRight } from "lucide-react";
import { TALLERES_CATEGORIES, TALLERES_BOTTOM_LINKS, TALLERES_HERO_TAGS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

export function TalleresMenu() {
  return (
    <div>
      <div className="grid gap-3 p-5" style={{ gridTemplateColumns: "1fr 1fr 1fr 0.7fr" }}>
        {/* Hero card izquierda */}
        <div className="rounded-2xl relative flex flex-col justify-between p-5 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#3b1050,#1a3560)", minHeight: 260 }}>
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(circle at 30% 70%,#ff6b6b,transparent 55%)" }} />
          <h2 className="font-display text-white leading-tight text-xl relative z-10">
            6 FORMAS<br />DE SER<br />ARTISTA
          </h2>
          <div className="relative z-10">
            <div className="flex flex-wrap gap-1 mb-3">
              {TALLERES_HERO_TAGS.map((t) => (
                <span key={t} className="inline-block px-3 py-1 rounded-full text-[11px] font-bold
                  bg-white/15 text-white cursor-pointer hover:bg-white/25 transition-colors whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            <button className="bg-[#F5E642] text-black font-extrabold rounded-full px-5 py-2 text-sm
              hover:scale-105 hover:shadow-lg transition-all">
              Ver el calendario
            </button>
          </div>
        </div>

        {/* Pintura + Cerámica */}
        {TALLERES_CATEGORIES.slice(0, 2).map((c) => (
          <div key={c.title} className="rounded-2xl p-4 flex flex-col gap-3" style={{ background: c.bg }}>
            <h3 className="font-display text-lg">{c.title}</h3>
            <div className="flex flex-wrap gap-1 flex-1">
              {c.tags.map((t) => (
                <span key={t} className="inline-block px-3 py-1 rounded-full text-xs font-bold
                  bg-black/10 cursor-pointer hover:bg-black/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>
            <button className="bg-black text-white font-extrabold rounded-full px-4 py-2 text-xs
              self-start hover:opacity-80 transition-opacity">
              Ver ofertas
            </button>
          </div>
        ))}

        {/* Manualidades + PIE Niños apilados */}
        <div className="flex flex-col gap-3">
          {TALLERES_CATEGORIES.slice(2).map((c) => (
            <div key={c.title} className="rounded-2xl p-4 flex flex-col gap-2 flex-1" style={{ background: c.bg }}>
              <h3 className="font-display text-base">{c.title}</h3>
              <div className="flex flex-wrap gap-1 flex-1">
                {c.tags.map((t) => (
                  <span key={t} className="inline-block px-3 py-1 rounded-full text-xs font-bold
                    bg-black/10 cursor-pointer hover:bg-black/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              <button className="bg-black text-white font-extrabold rounded-full px-4 py-2 text-xs
                self-start hover:opacity-80 transition-opacity">
                Ver ofertas
              </button>
            </div>
          ))}
        </div>
      </div>
      <BottomLinks links={TALLERES_BOTTOM_LINKS} />
    </div>
  );
}
