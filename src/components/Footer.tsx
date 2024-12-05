import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function() {
  return (
      <div className='w-full max-w-[1920px] h-auto md:h-[350px] bg-[#043873] flex flex-col md:flex-row justify-end items-end px-20 py-10 '>
        <div className='w-full max-w-[1100px] h-auto md:h-[300px]  text-white '>
            {/* footer top */}
            <div className='flex flex-col md:flex-row justify-center gap-14 '>
            
            <div className=" w-52 h-48">
                <h1 className='flex text-2xl font-bold pb-2 gap-2'>
                <Image src="/images/Logo Icon.png" alt="Logo" height="10" width="30" className='mt-2'/>
                 whitepace</h1>
                <p className=' text-gray-300'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className=" w-52 h-48">
                <h1 className='font-bold pb-2 '>Product</h1>
                <p className='text-gray-300 pb-2'>Overview</p>
                <p className='text-gray-300 pb-2'>Pricing</p>
                <p className='text-gray-300 pb-2'>Customer stories</p>

            </div>
            <div className=" w-52 h-48">
                <h1 className='font-bold pb-2 '>Resources</h1>
                <p className='text-gray-300 pb-2'>Blog</p>
                <p className='text-gray-300 pb-2'>Guide & tutorials</p>
                <p className='text-gray-300 pb-2'>Help center</p>

            </div>
            <div className=" w-52 h-48">
                <h1 className='font-bold pb-2 '>Company</h1>
                <p className='text-gray-300 pb-2'>About us</p>
                <p className='text-gray-300 pb-2'>Careers</p>
                <p className='text-gray-300 pb-2'>Media kit</p>

            </div>
            <div className=" w-52 h-48 gap-2">
                <h1 className='text-2xl font-bold pb-3'>Try It Today</h1>
                <p className='text-gray-300 pb-3'>Get started for free.Add your whole team as your needs grow.</p>
                 <button className='flex p-3  rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-sm md:text-base lg:text-lg'>Start today
                 <Image src="/images/icon.png" alt="icon" height="15" width="15" className='m-1 md:m-2' />

                 </button>
            </div>

            </div>

            {/* footer bottom */}
            <div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-10 mt-12 px-4 md:px-0 '>
               <ul className='flex flex-wrap justify-center gap-4 md:gap-14  '>
                <li>English</li>
                <li>Terms & pricacy</li>
                <li>Security</li> 
                <li>Status</li>
                <li>©2021Whitepace LLC.</li>
               </ul>
               
               {/* Icons */}
               <div className='flex justify-center gap-6  mt-4 md:mt-0 mb-2'>
               <FaFacebookF />
               <FaTwitter />
               <FaLinkedinIn />
               </div>
                
            </div>
        </div>
     </div>
  )
}
