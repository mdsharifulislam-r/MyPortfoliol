
import { HeroParallax } from "@/components/Hero/Hero";
import React, { useEffect, useState } from "react";
import uiux from "@/assets/hero/uiux.jpg"
import backbuilder from "@/assets/hero/backbuilder.webp"
import shoeShop from "@/assets/hero/shoeShop.webp"
import coursify from "@/assets/hero/coursify.webp"
import superTyper from "@/assets/hero/supertyper.webp"

import { HeroHighlight } from "@/components/HeroHighLight/HeroHighLight";
import { ThreeDCardDemo } from "@/components/3DCard/CardComponent";
import MySkills from "@/components/3DCard/MySkills";
import dynamic from "next/dynamic";
import HorizontalScroll from "@/components/LinesBg/Projects";

import SlowScroll from "@/components/common/ScrollSlow";
import { BackgroundBeamsWithCollision } from "@/components/LinesBg/Bg";
import MainProject from "@/components/LinesBg/MainProject";
import { TypewriterEffect } from "@/components/HireSection/HireSection";
import Hire from "@/components/HireSection/Hire";
import TestContainer from "@/components/Testmonials/TestContainer";
import { Contact } from "@/components/Contacts/Contact";

export default function page() {
  const products: { title: string; link: string; thumbnail: any }[] = [
    {
      title:"BackBuilder",
      link:"https://back-builder.vercel.app/",
      thumbnail:backbuilder
    },
    {
      title:"Shoe Shop",
      link:"https://back-builder.vercel.app/",
      thumbnail:shoeShop
    },
    {
      title:"Coursify",
      link:"https://coursify-virid.vercel.app/",
      thumbnail:coursify
    },
    {
      title:"Super Typer",
      link:"https://supertyper.netlify.app/",
      thumbnail:superTyper
    },
    {
      title:"BackBuilder",
      link:"https://back-builder.vercel.app/",
      thumbnail:backbuilder
    },
    {
      title:"Shoe Shop",
      link:"https://back-builder.vercel.app/",
      thumbnail:shoeShop
    },
    {
      title:"Coursify",
      link:"https://coursify-virid.vercel.app/",
      thumbnail:coursify
    },
    {
      title:"Super Typer",
      link:"https://supertyper.netlify.app/",
      thumbnail:superTyper
    },
    {
      title:"BackBuilder",
      link:"https://back-builder.vercel.app/",
      thumbnail:backbuilder
    },
    {
      title:"Shoe Shop",
      link:"https://back-builder.vercel.app/",
      thumbnail:shoeShop
    },
    {
      title:"Coursify",
      link:"https://coursify-virid.vercel.app/",
      thumbnail:coursify
    },
    {
      title:"Super Typer",
      link:"https://supertyper.netlify.app/",
      thumbnail:superTyper
    },

 
  ];

  return (
    <>
     <div className="bg-black ">
      <HeroParallax products={products} />
      <HeroHighlight className="px-4 flex justify-center flex-col place-items-center gap-5">
        <h1 className="text-white md:text-6xl text-3xl font-bold">Make Your Aamazing Website</h1>
        <div className="md:text-4xl  text-sm text-white flex gap-3 flex-wrap mt-10 md:mt-0 ">
          <span className="block mb-5 md:mb-0">using</span> <span className="p-3 mx-4 bg-green-500 rounded-md font-bold">React</span><span className="p-3 bg-purple-500 rounded-md font-bold">Next</span><span className="p-3 bg-pink-500 rounded-md font-bold mx-5">Node</span><span className="p-3 bg-blue-500 rounded-md font-bold ">Express</span>
          <span className="p-3 bg-red-500 rounded-md font-bold mx-5 ">MongoDB</span>
        </div>
      </HeroHighlight>
    
      <MySkills/>

      <MainProject/>      
    <Hire/>
    <TestContainer/>
    <Contact>

    </Contact>
    </div>
    </>
 

 
  );
}
