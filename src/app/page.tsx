"use client";

import { useRef } from "react";
import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import SpecialOffers from "@/sections/home/SpecialOffers";
import Contacts from "@/sections/home/Contacts";

export default function Home() {
  const targetRef = useRef(null);

  return (
    <div className="space-y-16" ref={targetRef}>
      {/*Section Components */}
      <Hero />
      <About />
      <SpecialOffers />
      <Contacts />
    </div>
  );
}
