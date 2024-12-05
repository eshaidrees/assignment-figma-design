import Image from "next/image";
import React from "react";
import { Sheet, SheetContent,SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { LuAlignJustify } from "react-icons/lu";


export default function Header() {
  return (
    <div className="flex items-center h-[92px] justify-between bg-[#043873] text-white border-b border-blue-900 px-[30px] w-full max-w-[1920px]">
      <div className="flex items-center gap-2 ">
        {/* Logo  */}
        <Image src="/images/Logo.png" alt="Logo" height="20" width="40" />
        <h3 className="font-bold text-[28px] leading-[33.89px]">whitepace</h3>
      </div>

      {/* Navigations  */}
      <ul className="hidden lg:flex items-center justify-center gap-[40px] ml-auto">
        <li className="flex items-center gap-[8px]">
          Products
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
        <li className="flex items-center gap-[8px]">
          Solutions
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
        <li className="flex items-center gap-[8px]">
          Resources
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
        <li className="flex items-center gap-[8px]">
          Prices
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
      </ul>
       {/* button  */}
       <div className="hidden sm:flex lg:flex md:flex gap-4 p-2">
        <button className="w-full  min-w-[106px] h-[60px] bg-orange-300 rounded-lg text-black font-medium text-[18px] leading-[23px] tracking-[-0.02px]">
          Login
        </button>
        <button className="bg-blue-400 w-full min-w-[207px] h-[60px] flex items-center justify-center gap-[10px] rounded-lg font-medium text-[18px] leading-[23px] tracking-[-0.02px]">
          Try Whitepace free
           <Image src="/images/Icon.png" alt="icon" height="20" width="20" />
        </button>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <LuAlignJustify className="size-9"/>
        </SheetTrigger>
        <SheetContent>
        <SheetTitle>Menu</SheetTitle>

          <ul className="flex flex-col gap-1 mt-5 list-none ">
          <li>
          Products
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
          <li>
          Solutions
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
          <li>
          Resources
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
          <li>
          Prices
          <Image src="/images/down-arrow.png" alt="icon" height="40" width="40" />
          </li>
          </ul>
        </SheetContent>
      </Sheet>
     
      </div>
  );
}

