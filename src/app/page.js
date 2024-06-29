"use client"

import {
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
} from "@/data";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";


export default function Home() {

  const plane1 = useRef(null)
  const plane2 = useRef(null)
  const plane3 = useRef(null)
  const speed = 0.1
  
  const manageMouseMove = (e) => {
    const {movementX, movementY} = e
    gsap.set(plane1.current, {x:`+=${movementX * speed}`, y:`+=${movementY * speed}`})
    gsap.set(plane2.current, {x:`+=${movementX * speed * 0.5}`, y:`+=${movementY * speed * 0.5}`})
    gsap.set(plane3.current, {x:`+=${movementX * speed * 0.25}`, y:`+=${movementY * speed * 0.25}`})

  }

  
  return <main className="h-screen w-screen overflow-hidden relative bg-black">
    <div ref={plane1} onMouseMove={(e) => {manageMouseMove(e)}} className="plane w-full h-full absolute brightness-[0.7]">
      <Image alt="image" src={Floating1} width={200} className="absolute left-[90%] top-[70%]"/>
      <Image alt="image" src={Floating2} width={300} className="absolute left-[5%] top-[65%]"/>
      <Image alt="image" src={Floating7} width={225} className="absolute left-[35%] top-[0%]"/>
    </div>
    <div ref={plane2} onMouseMove={(e) => {manageMouseMove(e)}} className="plane2 w-full h-full absolute brightness-[0.6]">
    <Image alt="image" src={Floating4} width={250} className="absolute left-[5%] top-[10%]"/>
    <Image alt="image" src={Floating6} width={200} className="absolute left-[80%] top-[5%]"/>
    <Image alt="image" src={Floating8} width={225} className="absolute left-[60%] top-[60%]"/>
    </div>
    <div ref={plane3} onMouseMove={(e) => {manageMouseMove(e)}} className="plane3 w-full h-full absolute brightness-50">
    <Image alt="image" src={Floating3} width={150} className="absolute left-[65%] top-[2.5%]"/>
    <Image alt="image" src={Floating5} width={200} className="absolute left-[40%] top-[75%]"/>
    </div>
    <div className="title m-0 text-center h-auto absolute top-[45%] left-[45%]  text-2xl text-white flex flex-col items-center gap-4">
      <h1 className="font-extrabold">Floating Images Gallery</h1>
      <p className="font-light">Next.js & GSAP</p>
    </div>
  </main>;
}
