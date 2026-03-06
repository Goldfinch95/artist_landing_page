import Image from "next/image";
import { BlobBorder } from "./Blob_border";
import { CARD_HEIGHT, CARD_WIDTH } from "../data/hero.data";

interface PhotoCardProps {
  src: string;
  blobColors: string[];
  cardWidth?: number;
  cardHeight?: number;
}

export function PhotoCard({ src, blobColors, cardWidth, cardHeight }: PhotoCardProps) {
  const w = cardWidth  ?? CARD_WIDTH;
  const h = cardHeight ?? CARD_HEIGHT;

  return (
    <div
      className="relative rounded-[20px] overflow-hidden flex-shrink-0"
      style={{ width: w, height: h }}
    >
      <BlobBorder colors={blobColors} />
      <div className="absolute inset-[8px] rounded-[14px] overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes={`${w}px`}
        />
      </div>
    </div>
  );
}