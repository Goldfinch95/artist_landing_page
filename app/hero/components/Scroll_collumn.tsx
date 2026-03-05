"use client";
import { PhotoCard } from "./Photo_card";
import { BLOB_SETS, CARD_GAP, CARD_HEIGHT } from "../data/hero.data";

interface ScrollColumnProps {
  images: string[];
  direction: "up" | "down";
}

export function ScrollColumn({ images, direction }: ScrollColumnProps) {
  const doubled = [...images, ...images];
  const totalHeight = images.length * (CARD_HEIGHT + CARD_GAP);
  const duration = images.length * 4;
  const animName = direction === "up" ? "scrollUp" : "scrollDown";

  return (
    <div
      className="h-full overflow-hidden relative"
      
    >
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-${totalHeight}px); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-${totalHeight}px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div
        className="flex flex-col"
        style={{
          gap: CARD_GAP,
          animation: `${animName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <PhotoCard
            key={i}
            src={src}
            blobColors={BLOB_SETS[i % BLOB_SETS.length]}
          />
        ))}
      </div>
    </div>
  );
}