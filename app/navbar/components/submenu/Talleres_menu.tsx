"use client";
import { ArrowRight } from "lucide-react";
import {
  TALLERES_BOTTOM_LINKS,
  TALLERES_CATEGORIES,
  TALLERES_HERO_TAGS,
} from "../../data/nav.data";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"], // Asegúrate de agregar el peso que necesites
});

/* ── Organic blob SVG background ── */
function OrganicBg({ color = "#000" }: { color?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] opacity-[0.18] pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320,80 Q380,120 370,200 Q360,290 280,330 Q190,370 120,310 Q40,250 60,160 Q80,70 170,50 Q260,30 320,80Z"
          fill={color}
        />
        <circle cx="60" cy="320" r="60" fill={color} opacity="0.6" />
        <circle cx="350" cy="60" r="40" fill={color} opacity="0.4" />
        <path
          d="M30,150 Q80,100 120,160 Q160,220 100,250 Q40,280 20,220 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

/* ── Rainbow dashed border overlay ── */
function RainbowBorder({ bg }: { bg: string }) {
  return (
    <div
      className="absolute inset-0 rounded-[20px] pointer-events-none"
      style={{
        border: "3px dashed transparent",
        backgroundImage: `linear-gradient(${bg},${bg}), linear-gradient(135deg,#ff6b6b,#ffd700,#90ee90,#87ceeb,#9370db,#ff69b4)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    />
  );
}

function BlobBorder() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Esquina top-left */}
      <ellipse cx="0" cy="12" rx="14" ry="11" fill="#FF8C69" opacity="0.95" />
      <ellipse cx="8" cy="0" rx="12" ry="9" fill="#FFB347" opacity="0.9" />
      {/* Esquina top-right */}
      <ellipse cx="100" cy="10" rx="13" ry="11" fill="#90EE90" opacity="0.95" />
      <ellipse cx="88" cy="0" rx="12" ry="8" fill="#87CEEB" opacity="0.9" />
      {/* Lado izquierdo */}
      <ellipse cx="0" cy="40" rx="12" ry="13" fill="#87CEEB" opacity="0.9" />
      <ellipse cx="0" cy="65" rx="13" ry="12" fill="#DDA0DD" opacity="0.9" />
      {/* Lado derecho */}
      <ellipse cx="100" cy="38" rx="12" ry="13" fill="#FF8C69" opacity="0.9" />
      <ellipse cx="100" cy="65" rx="11" ry="12" fill="#90EE90" opacity="0.9" />
      {/* Esquina bottom-left */}
      <ellipse cx="0" cy="90" rx="13" ry="11" fill="#FFB347" opacity="0.95" />
      <ellipse cx="10" cy="100" rx="13" ry="9" fill="#87CEEB" opacity="0.9" />
      {/* Esquina bottom-right */}
      <ellipse cx="100" cy="88" rx="13" ry="12" fill="#DDA0DD" opacity="0.95" />
      <ellipse cx="88" cy="100" rx="12" ry="9" fill="#FF8C69" opacity="0.9" />
      {/* Top center */}
      <ellipse cx="50" cy="0" rx="14" ry="8" fill="#90EE90" opacity="0.85" />
      {/* Bottom center */}
      <ellipse cx="50" cy="100" rx="14" ry="8" fill="#FFB347" opacity="0.85" />
    </svg>
  );
}

/* ── Card 1: Hero oscura con imagen de fondo ── */
function HeroCard() {
  return (
    <div
      className="rounded-[20px] overflow-hidden relative flex flex-col justify-center p-5 min-h-[450px] group"
      style={{ background: "linear-gradient(160deg,#1a0a2e,#2a1a1a)" }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 rounded-[20px] transition-opacity duration-300  group-hover:opacity-40"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80') center/cover",
        }}
      />
      {/* Gradiente oscuro uniforme */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.40) 50%, rgba(0,0,0,.15) 100%)",
        }}
      />

      {/* Contenido centrado verticalmente */}
      <div className="text-center relative z-10 flex flex-col gap-3">
        <h2
          className={`${barlow.className} text-white text-5xl leading-none tracking-wide font-bold uppercase`}
        >
          DESCUBRE TU
          <br />
          TALENTO
          <br />
          ARTÍSTICO
        </h2>

        <div className="flex justify-center flex-wrap gap-1.5">
          {TALLERES_HERO_TAGS.map((t) => (
            <span
              key={t}
              className={`${interTight.className} inline-block px-3 py-1 rounded-full text-sm font-bold
                bg-orange-200 text-black border border-white/30
                cursor-pointer hover:bg-orange-950 hover:text-white transition-all whitespace-nowrap`}
            >
              {t}
            </span>
          ))}
        </div>

        <button
          className={`${interTight.className} self-center bg-yellow-300 text-black font-extrabold rounded-full px-5 py-2.5 mt-2 text-sm
            border-2 border-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-black
            transition-all duration-200 cursor-pointer`}
        >
          Ver el calendario
        </button>
      </div>
    </div>
  );
}

/* ── Card 2: PINTURA — blob border + panel pastel ── */
function PinturaCard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[380px]"
      style={{ background: "#f0f0f0" }}
    >
      {/* Capa 1: blobs de colores en los bordes */}
      <BlobBorder />

      {/* Capa 2: panel pastel con margen */}
      <div className="absolute bg-[#fdcdc5] inset-[10px] rounded-[16px] flex flex-col gap-2.5 p-[18px] overflow-hidden">
        <OrganicBg color="#e05070" />
        <h2
          className={`${barlow.className} font-display text-black text-4xl relative z-10`}
        >
          PINTURA
        </h2>
        <div className="flex flex-wrap gap-1.5 flex-1 relative z-10 content-start">
          {TALLERES_CATEGORIES[0].tags.map((t) => (
            <span
              key={t}
              className="inline-block px-3 py-1 rounded-full text-black text-sm font-bold
              bg-[#f5816e] cursor-pointer hover:text-white hover:bg-[#620f33] transition-colors whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative z-10 pb-20">
          <button
            className="bg-black text-white font-extrabold rounded-full px-5 py-2.5 text-sm
            hover:opacity-80 transition-opacity border-none cursor-pointer"
          >
            Ver ofertas
          </button>
        </div>
        {/* Person cutout */}
        {/* Persona — imagen real con máscara que desvanece el fondo */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[55%] z-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 90% at 60% 80%, black 40%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 85% 90% at 60% 80%, black 40%, transparent 80%)",
              filter: "drop-shadow(-6px 0px 0px #F5E642)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: CERÁMICA — lavanda + person ── */
function CeramicaCard() {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden min-h-[380px]"
      style={{ background: "#f0f0f0" }}
    >
      {/* Capa 1: blobs de colores en los bordes */}
      <BlobBorder />

      {/* Capa 2: panel pastel con margen */}
      <div className="absolute bg-[#d3d0f2] inset-[10px] rounded-[16px] flex flex-col gap-2.5 p-[18px] overflow-hidden">
        <OrganicBg color="#e05070" />
        <h2
          className={`${barlow.className} font-display text-black text-4xl relative z-10`}
        >
          PINTURA
        </h2>
        <div className="flex flex-wrap gap-1.5 flex-1 relative z-10 content-start">
          {TALLERES_CATEGORIES[1].tags.map((t) => (
            <span
              key={t}
              className="inline-block px-3 py-1 rounded-full text-black text-sm font-bold
              bg-[#948fe0] cursor-pointer hover:text-white hover:bg-[#0c2246] transition-colors whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative z-10 pb-20">
          <button
            className="bg-black text-white font-extrabold rounded-full px-5 py-2.5 text-sm
            hover:opacity-80 transition-opacity border-none cursor-pointer"
          >
            Ver ofertas
          </button>
        </div>
        {/* Person cutout */}
        {/* Persona — imagen real con máscara que desvanece el fondo */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[55%] z-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 90% at 60% 80%, black 40%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 85% 90% at 60% 80%, black 40%, transparent 80%)",
              filter: "drop-shadow(-6px 0px 0px #F5E642)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Small card con rainbow dashed border ── */
function SmallCard({
  title,
  bg,
  tags,
  blobColor,
}: {
  title: string;
  bg: string;
  tags: string[];
  blobColor: string;
}) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden flex-1"
      style={{ minHeight: 180 }}
    >
      {/* Capa 1: blobs de colores en los bordes */}
      <BlobBorder />

      {/* Capa 2: panel pastel con margen */}
      <div
        className="bg-red-500 absolute inset-[8px] rounded-[16px] flex flex-col gap-2 p-4 overflow-hidden"
      >
        <h2 className={`${barlow.className} text-black text-2xl relative z-10`}>
          {title}
        </h2>
        <div className="flex flex-wrap gap-1 flex-1 relative z-10">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold
              bg-black/10 cursor-pointer hover:bg-black/20 transition-colors whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          className="bg-black text-white font-extrabold rounded-full px-4 py-1.5 text-xs
          self-start hover:opacity-80 transition-opacity border-none cursor-pointer relative z-10"
        >
          Ver ofertas
        </button>
      </div>
    </div>
  );
}

/* ── Bottom links ── */
function BottomLinks() {
  return (
    <div className="flex gap-8 py-3.5 border-t border-black/8">
      {TALLERES_BOTTOM_LINKS.map((l) => (
        <button
          key={l.label}
          className="flex items-center gap-2 group bg-transparent border-none cursor-pointer text-left p-0"
        >
          <div>
            <p className="text-[13px] font-extrabold">{l.label}</p>
            {l.sub && <p className="text-xs text-gray-500">{l.sub}</p>}
          </div>
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      ))}
    </div>
  );
}

/* ── MAIN EXPORT ── */
export function TalleresMenu() {
  return (
     <div className="relative">
      <div
        className="grid gap-5 py-[18px]"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "100vw",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          paddingLeft: "7rem",
          paddingRight: "7rem",
        }}
      >
        <HeroCard />
        <PinturaCard />
        <CeramicaCard />

        <div className="flex flex-col gap-3">
          
          <SmallCard
            title="MANUALIDADES"
            bg="#A8F0D0"
            blobColor="#1a7a50"
            tags={TALLERES_CATEGORIES[2].tags}
          />
          <SmallCard
            title="PIE NIÑOS"
            bg="#FFD6E0"
            blobColor="#c0507a"
            tags={TALLERES_CATEGORIES[3].tags}
          />
        </div>
      </div>

      <BottomLinks />
    </div>
  );
}
