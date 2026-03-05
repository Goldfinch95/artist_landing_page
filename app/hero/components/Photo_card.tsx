import Image from "next/image";
import { BlobBorder } from "./Blob_border";
import { CARD_HEIGHT, CARD_WIDTH } from "../data/hero.data";

interface PhotoCardProps {
  src: string;
  blobColors: string[];
}

export function PhotoCard({ src, blobColors }: PhotoCardProps) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden flex-shrink-0"
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      <BlobBorder colors={blobColors} />
      <div className="absolute inset-[8px] rounded-[14px] overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes={`${CARD_WIDTH}px`}
        />
      </div>
    </div>
  );
}