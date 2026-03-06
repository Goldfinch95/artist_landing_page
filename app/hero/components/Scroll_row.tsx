"use client";
import { BLOB_SETS, CARD_GAP } from "../data/hero.data";

interface ScrollRowProps {
  images: string[];
}

const ROW_CARD_WIDTH  = 160;
const ROW_CARD_HEIGHT = 220;

export function ScrollRow({ images }: ScrollRowProps) {
  const doubled = [...images, ...images];
  const totalWidth = images.length * (ROW_CARD_WIDTH + CARD_GAP);
  const duration = images.length * 3;

  return (
    <div className="w-full overflow-hidden relative">
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>

      <div
        className="flex flex-row"
        style={{
          gap: CARD_GAP,
          animation: `scrollLeft ${duration}s linear infinite`,
          willChange: "transform",
          width: "max-content",
        }}
      >
        {doubled.map((src, i) => {
          const [c1, c2, c3, c4] = BLOB_SETS[i % BLOB_SETS.length];
          return (
            <div
              key={i}
              className="relative rounded-[16px] overflow-hidden flex-shrink-0"
              style={{ width: ROW_CARD_WIDTH, height: ROW_CARD_HEIGHT }}
            >
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <ellipse cx="0"   cy="0"   rx="22" ry="22" fill={c1}/>
                <ellipse cx="50"  cy="0"   rx="28" ry="16" fill={c2}/>
                <ellipse cx="100" cy="0"   rx="22" ry="22" fill={c3}/>
                <ellipse cx="0"   cy="35"  rx="16" ry="20" fill={c2}/>
                <ellipse cx="0"   cy="65"  rx="16" ry="20" fill={c4}/>
                <ellipse cx="100" cy="35"  rx="16" ry="20" fill={c4}/>
                <ellipse cx="100" cy="65"  rx="16" ry="20" fill={c1}/>
                <ellipse cx="0"   cy="100" rx="22" ry="22" fill={c3}/>
                <ellipse cx="50"  cy="100" rx="28" ry="16" fill={c4}/>
                <ellipse cx="100" cy="100" rx="22" ry="22" fill={c2}/>
              </svg>
              <div className="absolute inset-[6px] rounded-[12px] overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}