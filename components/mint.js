import Head from 'next/head';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  publicMint          } from '../ulits/interact'

//REMEMBER TO ADD A LOGO

export default function Mint(){
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      const isPublicSale = await isPublicSaleState()
      setIsPublicSale(isPublicSale)

      setMaxMintAmount(
        isPublicSale ? config.maxMintAmount : '0'
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }


  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  return (
    <div className='flex flex-col items-start justify-start mt-5 mb-10 text-white border border-white rounded-lg filter md:backdrop-blur-md '>
      {/* <h1 className='text-white'>mint section</h1> */}

      <div className='md:w-[1000px] w-full h-full flex md:flex-row flex-col items-center justify-between rounded-lg'>
<div>
<img src='/ThePepeArmy/thepepearmy-reveal-image-setup.gif'
className='w-[400px] md:w-[600px] h-auto rounded-lg'/>
</div>

<div className='flex flex-col items-center justify-start w-full md:px-6 px-2 py-3 filter backdrop-blur-md rounded-lg '>
<div className='md:flex justify-center w-full items-center'>
<h1 className='text- md:text-4xl text-center uppercase md:mt-0 mt-4 font-Kanit font-bold'>Minting is now open</h1>
</div>

<div className='flex w-full justify-center font-medium mt-4 px-6'>

</div>

<div className='flex justify-between w-full font-medium mt-4 md:px-4'>
<h1 className='md:text-2xl text-center'><span className='font-semibold'>Mint Price</span><br/>.06969 ETH</h1>
<h1 className='md:text-2xl text-center'><span className='font-semibold'>Total Supply</span><br/>6969</h1>
<h1 className='md:text-2xl text-center'><span className='font-semibold'>Reveal Time</span><br/>May 2023</h1>

</div>
{/* mobile section */}

{/* <div className='flex justify-between w-full font-medium mt-4 px-4'>
<h1 className='text-lg text-center'>Mint Price<br/>.25 ETH</h1>
<h1 className='text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div> */}

{!walletAddress?
(
<button className='md:px-16 px-6 py-3 bg-black rounded-lg mt-8 md:mt-16 hover:bg-white hover:text-black md:text-2xl'
onClick={connectWalletHandler}>Connect Wallet</button>
):(
<>
            <div className="font-Kanit flex items-center justify-center w-full mt-5">
                  <button
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-black font-bold rounded-full p-2"
                    onClick={decrementMintAmount}
                    >
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p className="font-LuckiestGuy flex items-center justify-center text-center font-bold text-white text-2xl md:text-3xl p-2 mx-10">
                  {mintAmount}  
                  </p>
                  <button
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-black font-bold rounded-full"
                    onClick={incrementMintAmount} 
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button> 
                  <button className='px-10 py-3 bg-black rounded-lg mt-8 md:mt-16 hover:bg-white hover:text-black ml-16 md:text-2xl'
onClick={publicMintHandler}>Mint</button>
                </div>
                </>
                
                
            )    
           } 
           
           <div className="font-Kanit max-w-screen-sm mt-4">
              {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-white'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-5"`}
              >
                <p className="flex flex-col w-auto">
                  {status.message}
                </p>
              </div>
            )}
            </div> 
</div>    

</div>

      </div>
  )
} 
