"use client";

import { useRef } from "react";
import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import SpecialOffers from "@/sections/home/SpecialOffers";
import MapBlock from "@/components/MapBlock";

export default function Home() {
  const targetRef = useRef(null);

  return (
    <div className="space-y-16" ref={targetRef}>
      <Hero />
      <About />
      <SpecialOffers />
      <MapBlock />
    </div>
  );
}
