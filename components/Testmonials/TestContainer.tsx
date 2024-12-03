'use client'
import React, { useEffect, useState } from 'react'
import { AnimatedTestimonials, Testimonial } from './Tesmonials'
import client1 from '@/assets/clients/client.webp'
import client2 from '@/assets/clients/client2.webp'
import client3 from '@/assets/clients/client3.webp'

export default function TestContainer() {
    const [hydred,setHydred]=useState(false)
    useEffect(()=>setHydred(true),[])
    const testimonials:Testimonial[] = [
        {
            quote:"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. ",
            name:"Mr Jhon",
            designation:"HR Google",
            src:client1,

        },
        {
            quote:"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. ",
            name:"Mrs Juila",
            designation:"HR Amazon",
            src:client2,

        },
        {
            quote:"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. ",
            name:"Mr Dabid",
            designation:"HR Google",
            src:client3,

        },
    ]
  return (
    <div className='h-screen flex flex-col justify-center place-items-center py-[100px]'>
        <div className='text-white text-4xl font-bold text-center'>What People <span>Saying</span></div>
      {hydred && <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>}
    </div>
  )
}
