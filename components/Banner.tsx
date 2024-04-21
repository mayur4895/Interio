'use client'
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";

const Banner = () => {
  return (
    <div className=" flex flex-col text-center w-full items-center py-10 gap-y-3">
      <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold max-w-xl md:max-w-2xl lg:max-w-4xl">
        Beautify And Enhance Your Space With Our Expertise
      </h1>
      <p className=" text-xs md:text-sm md:max-w-2xl max-w-md lg:max-w-4xl">
        We Help You to Unloack the beautiy and comfort of your space that
        inspire and inriches your life
      </p>

      <div className="w-full">
  <AspectRatio ratio={13 / 5} className=" fixed">
    <Image src={"/interior.jpg"} alt="Image" fill className=" rounded-md object-cover object-left" />
  </AspectRatio>
</div>

    
    </div>
  );
};

export default Banner;
