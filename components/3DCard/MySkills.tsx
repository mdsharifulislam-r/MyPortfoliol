import React from 'react'
import { ThreeDCardDemo } from './CardComponent'
import ui from '@/assets/do/ux.jpg'
import design from '@/assets/do/design.jpg'
import psd from '@/assets/do/psdtohtml.webp'
import development from '@/assets/do/development.webp'
const contents = [
  {
    title:"UI/UX Designer",
    subTitle:"Design beutiful ui and ux for website",
    image:ui
  },
  {
    title:"Web Designer",
    subTitle:"Design beutiful components for website",
    image:design
  },
  {
    title:"Web Develpent",
    subTitle:"Develop Website using MERN stack",
    image:development
  },
  {
    title:"PSD to HTML",
    subTitle:"Convert PSD or Figma File to HTML or React",
    image:psd
  },
]

export default function MySkills() {
  const shows = contents?.map(item=>(
    <ThreeDCardDemo title={item.title} subTitle={item.subTitle} image={item?.image} key={item.subTitle}/>
  ))
  return (
    <div className=' max-w-7xl mx-auto w-full overflow-x-hidden'>
        <div className='text-center pt-10'>
            <h1 className='text-5xl font-bold text-white'>What I do</h1>
        </div>
   <div className='grid md:grid-cols-2 grid-cols-1'>
    {shows}
    </div>
    </div>
 
  )
}
