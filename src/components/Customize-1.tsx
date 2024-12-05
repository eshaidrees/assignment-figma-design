import React from 'react'
import Image from 'next/image'

export default function Customize1() {
  return (
    <div className="flex items-center justify-center bg-[#043873] min-h-screen px-6 md:px-16 lg:px-32 md:py-20 2xl:px-32 2xl:py-32">
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10 md:gap-0 ">
        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center text-center md:text-left max-w-[520px] min-h-[344px]">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white">
        <span>Use as </span>
        <span
        style={{
          backgroundImage: "url('/images/Element-1.png')",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          marginTop: "10px",
        }}
      >
          Extention
      </span>
       </h2>

  <p className="font-normal text-sm  md:text-base lg:text-[18px] leading-relaxed text-white">
  Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
  </p>
  <button className="flex items-center justify-center gap-2 w-full md:w-[219px] h-[50px] md:h-[63px] mt-6 md:mt-14 text-base md:text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
   Lets Go 
   <Image src="/images/icon.png" alt="icon" height="15" width="15" className='m-2' />
  </button>
</div>

{/* Image Container */}
{/* <div className="w-[748px] h-[547px] gap-[4px] bg-blue-300"> */}
<div className="w-full h-auto max-w-[551px] min-h-[191px] md:w-[748px] md:h-[420px] gap-[4px] bg-[#C4DEFD]">

</div>
</div>
</div>
)
}
