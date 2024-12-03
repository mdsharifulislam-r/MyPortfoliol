'use client'
import React, { useEffect, useState } from 'react'
import { BackgroundBeamsWithCollision } from './Bg'
import HorizontalScroll from './Projects'


export default function MainProject() {
    const [hydred,setHydred]=useState(false)
    useEffect(()=>{
        setHydred(true)
    },[])
  return (
    <div className=' w-full relative'>
     
      
<HorizontalScroll/>
    </div>
  )
}
