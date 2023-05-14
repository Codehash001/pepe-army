import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import FAQ from "../components/FAQs";
import Header from "../components/header";
import Midcontent from "../components/midcontent";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Starts from "../components/starts";
import Mint from "../components/mint";

export default function Index() {

const [ArrowClicked , setArrowClicked ] = useState(false)

const ArrowClickedHnadler= () => {
    setArrowClicked(!ArrowClicked);
  };

  return (
    <>
      <Head>
        <title>The Pepe Army</title>
        <meta name="Description" content="template" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
        <div className="min-h-autto bg-cover bg- bg-center md:px-16 px-4 md:py-8 py-4 flex flex-col items-center md:justify-start justify-center">
        <img src='/ThePepeArmy/thepepearmy-logo.png' className="md:w-[250px] w-[180px] h-auto mb-5"/>
        {/* <h1 className="text-white text-lg md:mb-[100px] font-semibold"> Welcome to a web3 experience</h1> */}
          <div className="flex flex-col items-center">
          {/* mint section */}
            <div className='flex flex-col items-center justify-center'>
            <Mint/>
            </div>
          </div>
          </div>
        {/* <img src='/TurboToads/turbotads-character-banner-1.png' className="w-screen h-auto"/> */}
        <Midcontent/>
        {/* <img src='/TurboToads/turbotads-character-banner-2.png' className="w-screen h-auto"/> */}
        <FAQ/>
        <img className='w-auto min-h-screen  md:mb-0 font-Kanit fixed bottom-0 -z-10'
      src="/ThePepeArmy/thepepearmy-header-bg.png"/>
    </>
  );
}
