"use client";
import { CAFES_LOCATIONS, CAFES_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

export function MegaCafes() {
  return (
    <div>
      <div className="grid gap-3 p-5" style={{ gridTemplateColumns: "1.2fr 1fr 1fr" }}>
        {/* Hero card */}
        <div className="rounded-2xl relative flex flex-col justify-between p-6 overflow-hidden"
          style={{ background: "linear-gradient(150deg,#2a4a3a,#1a2a4a)", minHeight: 260 }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at 70% 30%,#ffd700,transparent 60%)" }} />
          <h2 className="font-display text-white leading-tight text-xl relative z-10">
            PINTÁ CERÁMICA,<br />TOMÁ ALGO Y<br />CELEBRÁ EN<br />NUESTROS CAFÉS
          </h2>
          <button className="bg-[#F5E642] text-black font-extrabold rounded-full px-5 py-2 text-sm
            self-start relative z-10 hover:scale-105 hover:shadow-lg transition-all">
            Reservar una mesa
          </button>
        </div>

        {CAFES_LOCATIONS.map((l) => (
          <div key={l.title} className="rounded-2xl p-4 flex flex-col gap-3" style={{ background: l.bg }}>
            <h3 className="font-display text-base whitespace-pre-line">{l.title}</h3>
            <div className="flex flex-wrap gap-1 flex-1">
              {l.tags.map((t) => (
                <span key={t} className="inline-block px-3 py-1 rounded-full text-xs font-bold
                  bg-black/10 cursor-pointer hover:bg-black/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>
            <button className="bg-black text-white font-extrabold rounded-full px-4 py-2 text-xs
              self-start hover:opacity-80 transition-opacity">
              Descubrir más
            </button>
          </div>
        ))}
      </div>
      <BottomLinks links={CAFES_BOTTOM_LINKS} />
    </div>
  );
}
