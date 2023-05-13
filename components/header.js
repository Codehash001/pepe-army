import React from "react";

function header() {
  return (
    <div className="flex flex-row justify-center items-center md:px-16 px-6 py-8 text-white" id ='head'>
      <div className="text-center flex flex-col items-center font-Kanit w-full">
        <h1 className="text-white text-2xl md:text-[60px] mt-16">Collection Name</h1>
        <h1 className="text-white text-lg md:text-[28px] mt-5 mb-6">Tagline</h1>
        
        <button className='text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-lg px-8 py-4 text-center'>
        View on Opensea &gt;
        </button>
      </div>
    </div>
  );
}

export default header;
