 
import About from '@/components/About'
import Banner from '@/components/Banner' 
import { CardStackDemo } from '@/components/CardStackServices'
import Services from '@/components/Services' 
import { BentoGridDemo } from '@/components/bentogridDemo'
import { BentoGrid } from '@/components/ui/bento-grid.tsx'
import Image from 'next/image'
import React from 'react'
 
 const Home = () => {
   return (
    
  <>
        <Banner/>
        <About/> 
        <Services/>
       
        
  </>
 
   )
 }
 
 export default Home
 