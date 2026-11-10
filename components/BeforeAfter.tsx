"use client";
import Image from "next/image";
import { useId, useState } from "react";
import type { Pair } from "@/lib/services";

export default function BeforeAfter({ pair, sizes }: { pair: Pair; sizes: string }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className="relative overflow-hidden rounded-xl bg-carbon select-none" style={{ aspectRatio: "4 / 5" }}>
      <Image src={pair.after} alt={`${pair.alt} — po myciu`} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={pair.before} alt={`${pair.alt} — przed myciem`} fill sizes={sizes} className="object-cover" />
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-carbon/85 px-2.5 py-1 text-sm font-semibold text-white">Przed</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-green px-2.5 py-1 text-sm font-semibold text-white">Po</span>
      <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-carbon shadow-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      <label htmlFor={id} className="sr-only">Przesuń, żeby porównać zdjęcie przed i po: {pair.alt}</label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </figure>
  );
}
