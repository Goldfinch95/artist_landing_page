"use client";
import { PhotoCard } from "./Photo_card";
import { BLOB_SETS, CARD_GAP, CARD_HEIGHT, CARD_WIDTH } from "../data/hero.data";

interface ScrollColumnProps {
  images: string[];
  direction: "up" | "down";
  cardWidth?: number;
  cardHeight?: number;
}

export function ScrollColumn({ images, direction, cardWidth, cardHeight }: ScrollColumnProps) {
  const w = cardWidth  ?? CARD_WIDTH;
  const h = cardHeight ?? CARD_HEIGHT;

  const doubled = [...images, ...images];
  const totalHeight = images.length * (h + CARD_GAP);
  const duration = images.length * 4;
  const animName = direction === "up" ? `scrollUp_${h}` : `scrollDown_${h}`;

  return (
    <div
      className="h-full relative"
      style={{ overflow: "hidden", paddingLeft: 6, paddingRight: 6 }}
    >
      <style>{`
        @keyframes scrollUp_${h} {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-${totalHeight}px); }
        }
        @keyframes scrollDown_${h} {
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
            cardWidth={w}
            cardHeight={h}
          />
        ))}
      </div>
    </div>
  );
}