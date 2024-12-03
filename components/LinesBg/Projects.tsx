'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import shoe from '@/assets/projects/shoeshop.webp'
import backbuilder from '@/assets/projects/backbuilder.webp'
import Coursify from '@/assets/projects/coursify.webp'
import typer from '@/assets/projects/supertyper.webp'

import { BackgroundBeamsWithCollision } from './Bg'
export default function Projects() {
  const containerRef =useRef(null)
  const {scrollYProgress} = useScroll({
    target:containerRef,
    offset: ["start start", "end start"]
  })
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useTransform(scrollYProgress,[0,1],['0%','-100%'])
  const [slide,setSlide]=useState({y:100,opacity:0})
  const func = (bool:boolean=false)=>{
   return !bool? setSlide({y:0,opacity:1}):setSlide({y:100,opacity:0})
  }
  return (
    <motion.div  ref={containerRef}  className="h-[600vh]">
      <motion.div

        className="flex h-screen  sticky top-0 overflow-x-hidden"
      >
        <div className='absolute top-0 left-0 w-full h-full'>
        <BackgroundBeamsWithCollision>
            <h1></h1>
        </BackgroundBeamsWithCollision>
        </div>
        <motion.div style={{translateX}} className='flex w-max  '>
        
     {/* Slide 1 */}
     <div className="slide w-screen h-full flex justify-center flex-col place-items-center ">
          <h1 className="md:text-6xl text-4xl font-bold text-white">Some of My works</h1>
          <p className=' md:text-3xl text-xl text-slate-200 md:mt-10'>Lets Check it out my creativaty</p>
        </div>

        {/* Slide 2 */}
        <motion.div onMouseEnter={()=>func()} onMouseLeave={()=>func(true)}   transition={{duration:.34,delay:0.2}} className="slide w-screen h-full flex flex-row items-center gap-3 justify-center">
          <div className='md:w-1/2 w-full'>
          <h1 className="md:text-5xl text-2xl font-bold text-white">Shoe <span className='px-3 py-2 bg-orange-500 rounded-lg'>Shop</span></h1>
          <p className='text-white md:text-xl  text-xs mt-4'>Its a e commerce site. A client can see products here. Order here products here. I use Next JS for frontend and Backbuilder for Backend</p>
          <div className='mt-5 flex gap-4'>
            <a href='https://github.com/mdsharifulislam-r/Shoe-Shop' className='bg-white text-black md:px-8  md:text-base text-sm p-3 rounded-md'>Github</a>
            <a href='https://shoe-shop-backbuilder.vercel.app/' className='bg-orange-500 text-white md:px-8  md:text-base text-sm p-3 rounded-md'>Live Link</a>
          </div>
        </div>
        <div>
          <Image src={shoe} alt='' width={500} height={500} className='w-1/2'/>
        </div>
          </motion.div>
          

        {/* Slide 3 */}
        <motion.div onMouseEnter={()=>func()} onMouseLeave={()=>func(true)}   transition={{duration:.34,delay:0.2}} className="slide w-screen h-full flex flex-row items-center gap-3 justify-center ">
          <div className='w-1/2'>
          <h1 className="md:text-5xl text-2xl font-bold text-white"><span className='px-3 md:py-2 bg-blue-500 rounded-lg'>Backbuilder</span> the GUI API maker</h1>
          <p className='text-white md:text-xl  text-xs mt-4'>Its a tool you can make api without any code and database connection.
            The Frontend and backend both made by Next js.
          </p>
          <div className='mt-5 flex gap-4'>
          <a href='https://github.com/mdsharifulislam-r/BackBuilder' className='bg-white text-black md:px-8  md:text-base text-sm p-3 rounded-md'>Github</a>
          <a href='https://back-builder.vercel.app/' className='bg-orange-500 text-white md:px-8  md:text-base text-sm p-3 rounded-md'>Live Link</a>
          </div>
        </div>
        <div>
          <Image src={backbuilder} alt='' width={500} height={500} className='md:w-[70%] w-1/2'/>
        </div>
          </motion.div>
          <motion.div onMouseEnter={()=>func()} onMouseLeave={()=>func(true)}   transition={{duration:.34,delay:0.2}} className="slide w-screen h-full flex flex-row-reverse items-center gap-3 justify-center">
          <div className='md:w-1/2'>
          <h1 className="md:text-5xl text-2xl font-bold text-white">Coursify</h1>
          <p className='text-white md:text-xl  text-xs mt-4'>Its a Educational E-commerce website. Where a user can buy or sell course and buy book also
            The Frontend and backend both made by Next js.
          </p>
          <div className='mt-5 flex gap-4'>
          <a href='https://github.com/mdsharifulislam-r/Coursify' className='bg-white text-black md:px-8  md:text-base text-sm p-3 rounded-md'>Github</a>
          <a href='https://coursify-virid.vercel.app/' className='bg-orange-500 text-white md:px-8  md:text-base text-sm p-3 rounded-md'>Live Link</a>
          </div>
        </div>
        <div>
          <Image src={Coursify} alt='' width={500} height={500} className='w-full'/>
        </div>
          </motion.div>
          <div className="slide w-screen h-full flex flex-row-reverse items-center gap-3 justify-center">
          <div className='md:w-1/2'>
          <h1 className="md:text-5xl text-2xl font-bold text-white">Super Typer</h1>
          <p className='text-white md:text-xl  text-xs mt-4'> Its a Typing testing Website . A user can test his typing speed here. Its made by React and Express and Mongodb
          </p>
          <div className='mt-5 flex gap-4'>
          <a className='bg-white text-black md:px-8  md:text-base text-sm p-2 rounded-md'>Github</a>
          <a className='bg-orange-500 text-white md:px-8  md:text-base text-sm p-2 rounded-md'>Live Link</a>
          </div>
        </div>
        <div className='flex justify-end'>
          <Image src={typer} alt='' width={500} height={500} className='md:w-1/2 w-[80%]'/>
        </div>
          </div>
        </motion.div>
   
      </motion.div>
    </motion.div>
  )
}
