"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

 
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
   
    content: (
        <AspectRatio ratio={5/5} className=" fixed">
        <Image src={"/service1.jpg"} alt="Image" fill className="  border-4 border-gray-200 shadow-md rounded-md object-cover object-center" />
      </AspectRatio>
    ),
  },
  {
    id: 1,
    content: (
        <AspectRatio ratio={5/5} className=" fixed">
    <Image src={"/service2.jpg"} alt="Image" fill className="  border-4 border-gray-200 shadow-md rounded-md object-cover object-center" />
  </AspectRatio>
    ),
  },
  {
    id: 2,  
    content: (
        <AspectRatio ratio={5/5} className=" fixed">
        <Image src={"/service3.jpg"} alt="Image" fill className="  border-4 border-gray-200 shadow-md rounded-md object-cover object-center" />
      </AspectRatio>
    ),
  },
];
