"use client";
import { FIESTAS_CATEGORIES, FIESTAS_BOTTOM_LINKS } from "../../data/nav.data";
import { BottomLinks } from "./Links_bottom";
import { Barlow_Condensed, Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

export function MegaFiestas() {
  const left  = FIESTAS_CATEGORIES.slice(0, 3);
  const right = FIESTAS_CATEGORIES.slice(3);

  return (
    <div>
      <div className="grid gap-3 p-5" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
        {/* Hero card */}
        <div
          className="rounded-[20px] overflow-hidden relative flex flex-col justify-center p-5 group
                min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[450px]"
          style={{ background: "linear-gradient(160deg,#1a0a2e,#2a1a1a)" }}
        >
          <div
            className="absolute inset-0 rounded-[20px] transition-opacity duration-300 group-hover:opacity-40"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80') center/cover",
            }}
          />
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.40) 50%, rgba(0,0,0,.15) 100%)",
            }}
          />
          <div className="text-center relative z-10 flex flex-col gap-2 lg:gap-3">
            <h2
              className={`${barlow.className} text-white leading-none tracking-wide font-bold uppercase
                  text-3xl sm:text-4xl lg:text-5xl`}
            >
              Arte que inspira
              <br />
              creaciones que se comparten.
            </h2>
            <button
              className={`${interTight.className} self-center bg-yellow-300 text-black font-extrabold rounded-full
                    px-4 py-2 lg:px-5 lg:py-2.5 mt-1 lg:mt-2 text-xs lg:text-sm
                    border-2 border-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-black
                    transition-all duration-200 cursor-pointer`}
            >
              Ver mas...
            </button>
          </div>
        </div>

        {/* aqui info sobre mi */}
      
      </div>
      <BottomLinks links={FIESTAS_BOTTOM_LINKS} />
    </div>
  );
}
