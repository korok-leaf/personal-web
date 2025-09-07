"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/app/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => window.open(card.cardLink, "_blank")}
      className={cn(
        "group rounded-2xl relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden h-80 md:h-[420px] w-full transition-all duration-500 ease-out hover:cursor-pointer hover:shadow-2xl hover:shadow-purple-500/25",
        hovered !== null && hovered !== index && "blur-sm scale-[0.96] opacity-60",
        hovered === index && "scale-105 shadow-2xl shadow-purple-500/30"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Tech Stack Pills */}
        {card.tech && (
          <div className={cn(
            "flex flex-wrap gap-2 mb-4 transition-all duration-500",
            hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {card.tech.map((tech: string, techIndex: number) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
                style={{ transitionDelay: `${techIndex * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-purple-200">
          {card.title}
        </h3>

        {/* Description */}
        {card.description && (
          <p className={cn(
            "text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-500",
            hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {card.description}
          </p>
        )}

        {/* Hover Indicator */}
        <div className={cn(
          "absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300",
          hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}>
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Animated Border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-all duration-500",
        hovered === index ? "bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 p-[1px]" : ""
      )}>
        <div className="w-full h-full rounded-2xl bg-transparent" />
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
