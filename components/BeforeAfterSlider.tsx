"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

export const BeforeAfterSlider = ({ before, after }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video border-4 border-black group cursor-ew-resize overflow-hidden"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Edited) */}
      <div className="absolute inset-0">
        <img src={after} alt="After" className="w-full h-full object-cover" />
        <div className="absolute top-6 right-6 bg-[#FFDE59] border-4 border-black px-6 py-2 font-black text-lg uppercase z-10 shadow-brutalist-sm">
          Edited
        </div>
      </div>

      {/* Before Image (Raw) */}
      <div 
        className="absolute inset-0 border-r-4 border-black z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover grayscale" />
        <div className="absolute top-6 left-6 bg-white border-4 border-black px-6 py-2 font-black text-lg uppercase shadow-brutalist-sm">
          Raw
        </div>
      </div>

      {/* Slider Divider */}
      <div 
        className="absolute top-0 bottom-0 w-2 bg-black z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFDE59] border-4 border-black rounded-none flex items-center justify-center font-black shadow-brutalist text-2xl group-hover:scale-110 transition-transform">
          ↔
        </div>
      </div>
    </div>
  );
};
