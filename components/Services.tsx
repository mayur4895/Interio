"use client";
import React from "react";
import Heading from "./ui/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { CardStackDemo } from "./CardStackServices";

const Services = () => {
  return (
 
      <div className='py-10 md:grid md:gap-x-6 lg:gap-x-10  items-center justify-between gap-6 w-full grid-cols-2 '>
      <div>
        <Heading title="Services" subtitle="What We Provide For You" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>O1 Consultation</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>02 Layout Design</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>03 Concept Sketiching</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>04 3D Design</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>05 ArtWork installation</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    
    <div className="   w-full overflow-hidden   md:block  hidden   ">
    <CardStackDemo/>
 
</div>  
 

       </div>
 
 
  );
};

export default Services;
