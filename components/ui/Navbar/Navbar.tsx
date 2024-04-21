"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
  
const Navbar = () => {
  const pathname = usePathname();
  const routes = [
    {
      url: "/",
      name: "Home",
      active: "/" === pathname,
    },
    {
      url: "/about",
      name: "About Us",
      active: "/about" === pathname,
    },
    {
      url: "/services",
      name: "Services",
      active: "/services" === pathname,
    },
    {
      url: "/portfolio",
      name: "Portfolio",
      active: "/portfolio" === pathname,
    },
    {
      url: "/contact",
      name: "Contact Us",
      active: "/contact" === pathname,
    },
  ];

  return (
    <>
    
    <div className="  lg:gap-x-8 md:gap-x-6 gap-x-4 hidden md:flex">
      {routes.map((route, index) => {
        return ( 
            <Link
               key={index}
              href={route.url}
              className={cn('text-gray-600  md:text-sm whitespace-nowrap',route.active?'text-zinc-800':'')}>
              {route.name}
            </Link> 
        );
      })}
    </div>
    <Sheet>
  <SheetTrigger className=" md:hidden  block"><HiOutlineMenuAlt3 size={22}/></SheetTrigger>
  <SheetContent className=" md:hidden block">
    <SheetHeader>
      <SheetTitle className="mb-5">LOGO</SheetTitle>
       

      <div className="  lg:gap-x-8 md:gap-x-6 gap-x-4 md:hidden flex flex-col gap-y-8">
      {routes.map((route, index) => {
        return ( 
            <Link
               key={index}
              href={route.url}
              className={cn('text-gray-600 text-sm md:text-sm whitespace-nowrap',route.active?'text-zinc-800':'')}>
              {route.name}
            </Link> 
        );
      })}
    </div>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </> 

    
  );
};

export default Navbar;
