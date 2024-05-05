"use client";

import React, { useEffect, useState } from "react"; 
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { TbBrandWikipedia } from "react-icons/tb";
import { SiBlueprint, SiSlint } from "react-icons/si";
import { BiPaintRoll } from "react-icons/bi";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    logo:<TbBrandWikipedia  size={86} className="p-4 border rounded-lg opacity-60 "/>
  },
  {
     logo:<BiPaintRoll   size={86} className="p-4 border rounded-lg opacity-60 "/>
  },
  {
     logo:<SiBlueprint   size={86} className="p-4 border rounded-lg opacity-60 "/>
  },
  {
   logo:<SiSlint   size={86} className="p-4 border rounded-lg opacity-60 "/>
  },
 
];
