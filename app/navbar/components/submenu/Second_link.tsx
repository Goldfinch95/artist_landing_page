"use client";
import { FIESTAS_CATEGORIES, FIESTAS_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";

export function MegaFiestas() {
  const left  = FIESTAS_CATEGORIES.slice(0, 3);
  const right = FIESTAS_CATEGORIES.slice(3);

  return (
    <div>
      <div className="grid gap-3 p-5" style={{ gridTemplateColumns: "1.4fr 1fr 1fr" }}>
        {/* Hero card */}
        <div className="rounded-2xl relative flex flex-col justify-between p-6 overflow-hidden"
          style={{ background: "linear-gradient(150deg,#3a2a1a,#1a1a3a)", minHeight: 280 }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at 30% 60%,#ff6b6b,transparent 55%)" }} />
          <h2 className="font-display text-white leading-tight text-2xl relative z-10">
            CELEBRACIONES<br />Y EVENTOS<br />INOLVIDABLES
          </h2>
          <button className="bg-[#F5E642] text-black font-extrabold rounded-full px-5 py-2 text-sm
            self-start relative z-10 hover:scale-105 hover:shadow-lg transition-all">
            Planificar ahora
          </button>
        </div>

        {/* Columna izquierda */}
        <div className="flex flex-col gap-2">
          {left.map((c) => (
            <div key={c.title} className="rounded-2xl p-3 flex flex-col justify-between flex-1"
              style={{ background: c.bg }}>
              <h3 className="font-display text-sm mb-2">{c.title}</h3>
              <button className="bg-black text-white font-extrabold rounded-full px-3 py-1.5 text-[11px]
                self-start hover:opacity-80 transition-opacity">
                Ver ofertas
              </button>
            </div>
          ))}
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-2">
          {right.map((c) => (
            <div key={c.title} className="rounded-2xl p-3 flex flex-col justify-between flex-1"
              style={{ background: c.bg }}>
              <h3 className="font-display text-sm mb-2">{c.title}</h3>
              <button className="bg-black text-white font-extrabold rounded-full px-3 py-1.5 text-[11px]
                self-start hover:opacity-80 transition-opacity">
                Ver ofertas
              </button>
            </div>
          ))}
        </div>
      </div>
      <BottomLinks links={FIESTAS_BOTTOM_LINKS} />
    </div>
  );
}
