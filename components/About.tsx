import React from 'react'
import Heading from './ui/Heading'
import { Button } from './ui/button'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { BentoGridDemo } from './bentogridDemo'

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
        <BentoGridDemo/>
    </div>
  )
}

export default About
