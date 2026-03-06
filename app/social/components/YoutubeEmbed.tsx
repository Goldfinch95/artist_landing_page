"use client";
import { useState } from "react";

interface YoutubeEmbedProps {
  videoId: string;
}

export function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full rounded-[24px] overflow-hidden"
      style={{ height: 600 }}
    >
      {!playing ? (
        <>
          {/* Thumbnail — object-cover para llenar sin barras */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay oscuro — z-10 */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Botón play — z-20 para estar encima del overlay */}
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center z-20 cursor-pointer border-none bg-transparent"
          >
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#F5E642] flex items-center justify-center
                shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <svg
                viewBox="0 0 24 24"
                fill="black"
                className="w-7 h-7 lg:w-9 lg:h-9 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </>
      ) : (
        /* iframe que llena todo el contenedor sin barras negras */
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-none z-10"
        />
      )}
    </div>
  );
}
