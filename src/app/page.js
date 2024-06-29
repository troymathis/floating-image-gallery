"use client";

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
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const speed = 0.005;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  let requestAnimationFrameId = null;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce > 0 || yForce > 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-black">
      <div
        ref={plane1}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="plane w-full h-full absolute brightness-[0.7]"
      >
        <Image
          alt="image"
          src={Floating1}
          width={200}
          className="absolute left-[90%] top-[70%]"
        />
        <Image
          alt="image"
          src={Floating2}
          width={300}
          className="absolute left-[5%] top-[65%]"
        />
        <Image
          alt="image"
          src={Floating7}
          width={225}
          className="absolute left-[35%] top-[0%]"
        />
      </div>
      <div
        ref={plane2}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="plane2 w-full h-full absolute brightness-[0.6]"
      >
        <Image
          alt="image"
          src={Floating4}
          width={250}
          className="absolute left-[5%] top-[10%]"
        />
        <Image
          alt="image"
          src={Floating6}
          width={200}
          className="absolute left-[80%] top-[5%]"
        />
        <Image
          alt="image"
          src={Floating8}
          width={225}
          className="absolute left-[60%] top-[60%]"
        />
      </div>
      <div
        ref={plane3}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="plane3 w-full h-full absolute brightness-50"
      >
        <Image
          alt="image"
          src={Floating3}
          width={150}
          className="absolute left-[65%] top-[2.5%]"
        />
        <Image
          alt="image"
          src={Floating5}
          width={200}
          className="absolute left-[40%] top-[75%]"
        />
      </div>
      <div className="title m-0 text-center h-auto absolute top-[45%] left-[45%]  text-2xl text-white flex flex-col items-center gap-4">
        <h1 className="font-extrabold">Floating Images Gallery</h1>
        <p className="font-light">Next.js & GSAP</p>
      </div>
    </main>
  );
}
