import React from 'react'
import { TypewriterEffectSmooth } from './HireSection'

export default function Hire() {
  return (
    <div className='w-full h-screen flex justify-center place-items-center'>
      <div className='flex justify-center place-items-center flex-col'>
        <TypewriterEffectSmooth words={[{text:"You"},{text:"can"},{text:"Hire"},{text:"Me"},{text:"in"},{text:"MarketPlace",className:"text-blue-500"}]}/>
        <p className='text-white text-xl font-light'>You can give me opportunity to give service</p>
        <div className='mt-9 flex gap-4'>
            <a href="" className='px-4 py-2 bg-white text-black rounded-md text-xl'>Fiverr</a>
            <a href="" className='px-4 py-2 bg-white text-black rounded-md text-xl'>Upwork</a>
        </div>
      </div>
    </div>
  )
}
