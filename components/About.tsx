import React from 'react'
import Heading from './ui/Heading'
import { Button } from './ui/button'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-10 w-full'>
      <div className=' md:grid md:gap-x-6 lg:gap-x-10  w-full grid-cols-2 '>
      <Heading title="About Us"  className=" grid p-3"   subtitle="Discover The Power of Design"/>
      <div className=' p-3 flex justify-center flex-col   w-full'>
        <div>
        <p className='max-w-max mb-3'>We belive in the power of design for creating a beautiful and functional enviorment</p>
         <Button>View More</Button>
        </div>
      </div>
        </div>
        <div className='  flex flex-wrap  gap-8  justify-center  mt-5'>
        <div className="md:w-[200px]   w-[150px]  overflow-hidden ">
  <AspectRatio ratio={3 / 9} className=" fixed">
    <Image src={"/first.jpg"} alt="Image" fill className="border-4 border-gray-300 shadow-md  rounded-md object-cover object-center" />
  </AspectRatio>
</div>
  <div className="md:w-[200px] w-[150px] mt-10   overflow-hidden">
  <AspectRatio ratio={3 / 9} className=" fixed">
    <Image src={"/second.jpg"} alt="Image" fill className=" border-4 border-gray-300 shadow-md  rounded-md object-cover object-right" />
  </AspectRatio>
</div>

<div className="md:w-[200px] w-[150px]   overflow-hidden ">
  <AspectRatio ratio={3/ 9} className=" fixed">
    <Image src={"/third.jpg"} alt="Image" fill className="border-4 border-gray-300 shadow-md  rounded-md object-cover object-left" />
  </AspectRatio>
</div>

<div className="md:w-[200px] w-[150px] mt-10  overflow-hidden ">
  <AspectRatio ratio={3 /9} className=" fixed">
    <Image src={"/four.jpg"} alt="Image" fill className=" border-4 border-gray-300 shadow-md rounded-md object-cover object-center" />
  </AspectRatio>
</div>
        </div>
    </div>
  )
}

export default About
