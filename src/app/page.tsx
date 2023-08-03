import Gamecard from "@/components/Cards/gamecard";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-midnight-900 w-full h-full bg-blend-overlay bg-cover backdrop-brightness-75 bg-[url('/BTGBGImage1.png')]">
          <Navbar/>
        <div className="w-full mx-auto pb-20 flex container">
          <h1 className="text-midnight-100 mx-auto font-IBM font-bold pt-80 pb-60 md:text-6xl text-4xl">Glorsh globanab glinkport glibbybop gleebenop.</h1>
        </div>
      </div>
      <div id="Games" className="bg-midnight-950">
        <h1 className="text-midnight-100 mx-auto font-IBM font-bold text-5xl py-20 text-center">We make games an allat</h1>
        <div className="flex flex-wrap mx-auto w-fit pb-20">
          <Gamecard title="Two Words: I'm Burger" imageSource={'/TWIBImage.png'} description="What would you do if a fast food employee stole your credit card? Well, in Two Words: I'm Burger, Fregley is faced with this exact scenario and he takes action." alt="Cover art for Two Words: I'm Burger"/>
        </div>
      </div>
      <div className="bg-midnight-900">
        <h1 className="text-midnight-100 mx-auto font-IBM font-bold text-5xl py-20 text-center">About Us</h1>
      </div>
    </div>
  )
}