import React from "react";
import FAQs from "../components/FAQs";

function Midcontent() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src='/ThePepeArmy/thepepearmy-character section.png' className="hidden md:flex w-screen h-auto"/>
      <img src='/ThePepeArmy/thepepearmy-mobile-character section.png' className="md:hidden w-screen h-auto"/>
      <div className="flex flex-col items-center justify-center w-full">
      <img className='w-screen h-auto relative'
      src="/ThePepeArmy/thepepearmy-middlesection-bg.png"/>
      <div className="absolute px-16">
      <h1 className="text-white text-center md:text-3xl">
        <span className=" font-bold">THE PEPE ARMY NFT </span>holders will be granted a 3D character to come for future Augmented reality and gaming experiences.
      </h1>
      </div>
      </div>
      <img src='/ThePepeArmy/thepepearmy-character section-2-desktop.png' className="hidden md:flex w-screen h-auto"/>
      <img src='/ThePepeArmy/thepepearmy-mobile-character section-2.png' className="md:hidden w-screen h-auto"/>
    </div>
  );
}

export default Midcontent;
