"use client";
import { useState } from "react";
import Image from "next/image";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";
import { HERO_TABS, IMAGES_LEFT, IMAGES_RIGHT } from "../data/hero.data";
import { ScrollColumn } from "./Scroll_collumn";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["900"] });
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

function Tabs({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="flex gap-1.5 bg-white/10 rounded-full p-1 self-start">
      {HERO_TABS.map((t, i) => (
        <button
          key={t.id}
          onClick={() => setActive(i)}
          className={`${interTight.className} px-4 py-2 rounded-full text-sm font-bold
            transition-all duration-200 border-none cursor-pointer
            ${active === i
              ? "bg-white/15 text-white underline underline-offset-4"
              : "bg-transparent text-white/55 hover:text-white/85"
            }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <button
      className={`${interTight.className} bg-[#F5E642] text-black font-extrabold rounded-full
        px-8 py-3.5 text-sm border-2 border-[#F5E642]
        hover:bg-transparent hover:text-[#F5E642] transition-all duration-200 cursor-pointer`}
    >
      {label}
    </button>
  );
}

function ArrowLink({ label }: { label: string }) {
  return (
    <button
      className={`${interTight.className} group flex items-center gap-1.5 text-white
        font-extrabold text-sm bg-transparent border-none cursor-pointer`}
    >
      {label}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
        →
      </span>
    </button>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const tab = HERO_TABS[active];

  return (
    <section
      className="relative min-h-screen overflow-hidden transition-colors duration-700"
      style={{ background: tab.bg }}
    >
      {/* Background image */}
      <Image
        key={tab.id}
        src={tab.bgImage}
        alt=""
        fill
        className="object-cover opacity-15 z-0"
        priority
      />

      {/* Paint splatter shapes */}
      <svg className="absolute top-[-5%] left-[-5%] w-[40%] opacity-10 pointer-events-none z-0" viewBox="0 0 400 400">
        <path d="M320,80 Q380,120 370,200 Q360,290 280,330 Q190,370 120,310 Q40,250 60,160 Q80,70 170,50 Q260,30 320,80Z" fill="#fff" />
      </svg>
      <svg className="absolute bottom-[-5%] right-[30%] w-[28%] opacity-10 pointer-events-none z-0" viewBox="0 0 400 400">
        <path d="M200,30 Q300,0 370,80 Q420,180 350,280 Q280,360 160,340 Q60,320 30,220 Q0,120 80,60 Q140,10 200,30Z" fill="#fff" />
      </svg>

      {/* ── DESKTOP layout (lg+) ── */}
      <div className="relative hidden lg:block min-h-screen">

        {/* Scroll column izquierda — absolute, full height */}
        <div
          className="absolute top-0 bottom-0 z-10"
          style={{ right: "calc(296px + 20px)", width: 296 }}
        >
          <ScrollColumn images={IMAGES_LEFT} direction="up" />
        </div>

        {/* Scroll column derecha — absolute, full height */}
        <div
          className="absolute top-0 bottom-0 right-0 z-10"
          style={{ width: 296 }}
        >
          <ScrollColumn images={IMAGES_RIGHT} direction="down" />
        </div>

        {/* Content — ocupa el lado izquierdo dejando espacio para las columnas */}
        <div
          className="relative z-20 flex flex-col justify-center h-screen gap-6"
          style={{ paddingLeft: "clamp(2rem, 5vw, 4rem)", paddingRight: "calc(296px * 2 + 60px)" }}
        >
          <Tabs active={active} setActive={setActive} />

          <h1
            key={`title-${active}`}
            className={`${barlow.className} text-white leading-none uppercase animate-fadeUp`}
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", whiteSpace: "pre-line" }}
          >
            {tab.title}
          </h1>

          <p
            key={`sub-${active}`}
            className={`${interTight.className} text-white/85 text-[15px] leading-relaxed max-w-[480px] animate-fadeUp`}
            style={{ animationDelay: "60ms" }}
          >
            {tab.subtitle}
          </p>

          <div
            key={`cta-${active}`}
            className="flex flex-col gap-4 items-start animate-fadeUp"
            style={{ animationDelay: "120ms" }}
          >
            <CtaButton label={tab.btnLabel} />
            <ArrowLink label={tab.linkLabel} />
          </div>
        </div>
      </div>

      {/* ── MOBILE/TABLET layout (< lg) ── */}
      <div className="relative z-10 flex lg:hidden flex-col min-h-screen px-6 py-10 gap-6">
        <Tabs active={active} setActive={setActive} />

        <h1
          key={`title-m-${active}`}
          className={`${barlow.className} text-white leading-none uppercase animate-fadeUp`}
          style={{ fontSize: "clamp(2rem, 8vw, 3rem)", whiteSpace: "pre-line" }}
        >
          {tab.title}
        </h1>

        <p className={`${interTight.className} text-white/85 text-sm leading-relaxed`}>
          {tab.subtitle}
        </p>

        <div className="flex flex-col gap-4 items-start">
          <CtaButton label={tab.btnLabel} />
          <ArrowLink label={tab.linkLabel} />
        </div>

        <div className="grid grid-cols-2 gap-3 flex-1 min-h-[400px]">
          <ScrollColumn images={IMAGES_LEFT} direction="up" />
          <ScrollColumn images={IMAGES_RIGHT} direction="down" />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.4s ease both;
        }
      `}</style>
    </section>
  );
}