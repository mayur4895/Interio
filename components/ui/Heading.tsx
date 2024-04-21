import { cn } from '@/lib/utils';
import React from 'react'


interface HeadingProps{
    title:string;
    subtitle:string
   className?:string
}
const Heading = ({
    title,
    subtitle,
    className,
}:HeadingProps) => {
  return (
    <div className={cn('flex flex-col ',className)}>
       <span className='text-zinc-600'>{title}</span>
       <h2 className='lg:text-3xl md:text-2xl  max-w-xs'>{subtitle}</h2>
    </div>
  )
}

export default Heading
