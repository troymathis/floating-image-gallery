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
import Image from "next/image";


export default function Home() {
  return <main className="h-screen w-screen overflow-hidden relative">
    <div className="plane w-full h-full absolute brightness-[0.7]">
      <Image alt="image" src={Floating1} width={200} className="absolute left-[90%] top-[70%]"/>
      <Image alt="image" src={Floating2} width={300} className="absolute left-[5%] top-[65%]"/>
      <Image alt="image" src={Floating7} width={225} className="absolute left-[35%] top-[0%]"/>
    </div>
    <div className="plane2 w-full h-full absolute brightness-[0.6]">
    <Image alt="image" src={Floating4} width={250} className="absolute left-[5%] top-[10%]"/>
    <Image alt="image" src={Floating6} width={200} className="absolute left-[80%] top-[5%]"/>
    <Image alt="image" src={Floating8} width={225} className="absolute left-[60%] top-[60%]"/>
    </div>
    <div className="plane3 w-full h-full absolute brightness-50">
    <Image alt="image" src={Floating3} width={150} className="absolute left-[65%] top-[2.5%]"/>
    <Image alt="image" src={Floating5} width={200} className="absolute left-[40%] top-[75%]"/>
    </div>
  </main>;
}
