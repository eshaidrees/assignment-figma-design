import React from 'react'
import Image from 'next/image'

export default function WorkTogether() {
  return (
     <div className="flex items-center justify-center min-h-screen px-6 md:px-16 lg:px-32 md:py-20 2xl:px-32 2xl:py-32">  
       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-10 md:gap-0 ">
         {/* Image Section   */}
         <div>
         <Image 
          src="/images/Work Together Image.png" 
          alt="Image" 
          width={528} 
          height={491.56} 
          className="object-contain" 
           />
     
         </div>
            
             {/* Text Section */}
             <div className="flex flex-col gap-4 justify-center text-center md:text-left max-w-[520px] min-h-[344px]">
             <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-black ">
               Work
               <span
                 style={{
                  backgroundImage: "url('/images/Element-1.png')",
                  backgroundPosition: "bottom",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
               >
               together
               </span>
            </h2>
     
             <p className="font-normal text-sm  md:text-base leading-relaxed text-black">
             With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.
             </p>
             <button className="flex items-center justify-center gap-2 w-full md:w-[219px] h-[50px] md:h-[63px] mt-6 md:mt-14 text-base md:text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
             Try it now 
             <Image src="/images/icon.png" alt="icon" height="15" width="15" className='m-2' />
             </button>
          </div>
        </div>
    </div>
)
}
