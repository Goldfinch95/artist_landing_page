"use client";
import { SEDES_LOCATIONS, SEDES_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

export function MegaSedes() {
  return (
    <div>
      <div className="grid gap-4 p-5" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {SEDES_LOCATIONS.map((l) => (
          <div key={l.title} className="rounded-2xl relative p-6 flex flex-col justify-between overflow-hidden"
            style={{ background: l.bg, minHeight: 220 }}>
            <div className="absolute inset-0 opacity-15"
              style={{ background: "radial-gradient(circle at 80% 20%,#ffd700,transparent 50%)" }} />
            <h2 className="font-display text-white text-2xl relative z-10">{l.title}</h2>
            <div className="relative z-10">
              
              <button className="bg-[#F5E642] text-black font-extrabold rounded-full px-5 py-2 text-sm
                hover:scale-105 hover:shadow-lg transition-all">
                {l.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
      <BottomLinks links={SEDES_BOTTOM_LINKS} />
    </div>
  );
}
