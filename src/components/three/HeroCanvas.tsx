"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroCanvas() {
  return (
    <div className="h-full w-full">
      <HeroScene />
    </div>
  );
}