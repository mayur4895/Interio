'use client'
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";

import { ContainerScroll } from '@/components/ui/container-scroll-animation'
const Banner = () => {
  return (
    <div className=" flex flex-col text-center w-full items-center py-10 gap-y-3">
     

      <ContainerScroll  titleComponent={
       <div>
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold max-w-xl md:max-w-2xl lg:max-w-4xl">
          Beautify And Enhance Your Space With Our Expertise
        </h1>
        <p className=" text-xs md:text-sm md:max-w-2xl max-w-md lg:max-w-4xl">
          We Help You to Unloack the beautiy and comfort of your space that
          inspire and inriches your life
        </p>
       </div>
      }>
           
 
 <div className="flex items-center">
 <img src={"/serve1.jpg"} alt="Image"    className=" max-w-5xl -mt-12  -ml-12   h-[30rem] md:h-[40rem]    rounded-md  w-[580px] object-center  " />
    <img src={"/serve2.jpg"} alt="Image"    className=" max-w-5xl -mt-12  -mr-12 h-[30rem] md:h-[40rem]  rounded-md  w-[580px]   object-center  " />
 </div>
 
      </ContainerScroll>

    

    
    </div>
  );
};

export default Banner;
