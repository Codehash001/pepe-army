import { useState, Fragment } from "react";
import Footer from "../components/footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { opacity:1 },
    unmount: { opacity:0 },
  };
 
  return (
  <div className='w-screen h-screen md:mb-0 font-Kanit relative md:space-y-20 space-y-10 pt-10'>
      <h1 className="text-center md:text-7xl text-6xl font-bold tracking-wide text-white">FAQ</h1>

    <div id='faqs'className='md:px-16 px-8 text-white flex flex-col items-center'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What is The Pepe Army?</h1>
            <div>{open == 1 ?
            (
              <svg onClick={() => handleOpen(1)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <Link onClick={() => handleOpen(1)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            </Link>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         <p className={open==1? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
         Created for the community, and the holders of $PEPE, “The PEPE Army '' was born! Unite together, and MEME ALL DAY! THIS IS FINE ART! A handcrafted AAA collection of 15,000 characters developed by artist DEXXETH. Join The Pepe Army and MEME OUT!
         </p>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What are the Official Collection Links for The Pepe Army?</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==2? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
          <a href="https://opensea.io/collection/thepepearmy" className="hover:text-blue-300">https://opensea.io/collection/thepepearmy</a>
         </p>
        </AccordionBody>
      </Accordion>

      
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What are the details for The Pepe Army mint?</h1>
            <div>{open == 3 ?
            (
              <svg onClick={() => handleOpen(3)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(3)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==3? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
          <u1>
            <li>Supply : 15K</li>
            <li>Mint Price : .06969 eth</li>
            <li>Mint amount per transaction : 10 </li>
            <li>Max mint amount per wallet : None</li>
            <li>Mint type : Stealth</li>

          </u1>
         </p>
        </AccordionBody>
      </Accordion>

      
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What is the total supply of The Pepe Army PFPs?</h1>
            <div>{open == 4?
            (
              <svg onClick={() => handleOpen(4)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(4)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==4? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
         The maximum possible supply of Turbo Toad NFT PFPs is 15,000.
         </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>How can I mint my Pepe Army Character?</h1>
            <div>{open == 5?
            (
              <svg onClick={() => handleOpen(5)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(5)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==5? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
         Every holder of The Pepe Army will be given the opportunity to mint a maximum of 10 NFT’s per purchase on the The Pepe Army site, thepepearmy.xyz. All holders when complete will be able to download their 3D NFT characters of The Pepe Army for future gaming and MEME EVENTS IN THE METAVERSE!
         </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Will there be a Metaverse for The Pepe Army? </h1>
            <div>{open == 5?
            (
              <svg onClick={() => handleOpen(6)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(6)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==6? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
         Yes </p>
        </AccordionBody>
      </Accordion>
      
      {/* <Accordion open={open === 7} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white md:text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Where can I find other works by artist DexxETH</h1>
            <div>{open == 7?
            (
              <svg onClick={() => handleOpen(7)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(7)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==7? 'md:pr-4 text-gray-200' : 'h-0 hidden'}>
         Check out his discord and Twitter         </p>
        </AccordionBody>
      </Accordion> */}


      </div>
      <div className="w-screen flex flex-col items-center space-y-10">
      <a href="https://opensea.io/collection/thepepearmy">
      <button className="border-4 border-white px-8 py-4 rounded-3xl flex justify-center items-center">
        <h1 className="text-white font-semibold text-xl md:text-2xl">View On Opensea</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-white"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      </button>
      </a>
      
      <h1 className="text-gray-400 font-semibold text-sm text-center py-4">
        This is an Web3 Experience
        <br/>
        Created by Dexx and The Internet Gallery
      </h1>

      </div>
      
    </div>
  );
}
