 
import About from '@/components/About' 
import { BackgroundBeamsDemo } from '@/components/BackgroundDemo'
import { Banner } from '@/components/Banner'
import { CardStackDemo } from '@/components/CardStackServices'
import Services from '@/components/Services' 
import { BentoGridDemo } from '@/components/bentogridDemo'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { BentoGrid } from '@/components/ui/bento-grid.tsx'
import Image from 'next/image'
import React from 'react'
 
 const Home = () => {
   return (
    
  <>
        <Banner/>
        <About/> 
        <Services/>  
        <BackgroundBeamsDemo/>
       
        
  </>
 
   )
 }
 
 export default Home
 