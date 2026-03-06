import Image from "next/image";
import { Inter_Tight, Barlow_Condensed } from "next/font/google";
import { SocialCard as SocialCardType } from "../types/social.types";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["900"],
});

export function SocialCard({ card }: { card: SocialCardType }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 lg:gap-4 rounded-[20px] overflow-hidden group hover:shadow-md
        transition-shadow duration-300 p-2.5 lg:p-3 flex-1"
      style={{ background: card.color }}
    >
      {/* Imagen */}
      <div className="relative w-[75px] sm:w-[80px] lg:w-[90px] flex-shrink-0 rounded-[12px] lg:rounded-[14px] overflow-hidden self-stretch">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 75px, (max-width: 1024px) 80px, 200px"
          quality={90}
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col justify-between gap-1 min-w-0 py-1">
        <div className="flex flex-col gap-1">
          {/* Badge plataforma */}
          <span
            className={`${interTight.className} self-start text-xs sm:text-sm font-extrabold px-2 py-0.5 rounded-full text-white`}
            style={{ background: card.tagColor }}
          >
            {card.label}
          </span>

          <h3 className={`${barlow.className} text-black py-1 lg:py-2 uppercase leading-none text-base sm:text-lg lg:text-xl`}>
            {card.title}
          </h3>

          <p className={`${interTight.className} text-black/60 text-xs sm:text-sm py-1 lg:py-2 leading-snug line-clamp-2`}>
            {card.description}
          </p>
        </div>

        {/* CTA → */}
        <span
          className={`${interTight.className} text-xs sm:text-sm py-0.5 font-bold flex items-center gap-1 mt-1
            transition-colors duration-200`}
          style={{ color: card.tagColor }}
        >
          {card.cta}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}