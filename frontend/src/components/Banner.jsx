import React, { useState } from "react";
import photo from "../assets/photo.png";
import moneyIcon from "../assets/money.png";
import Modal from "./Modal";

const Banner = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 py-6 sm:py-8" id="refer">
      <div className="flex flex-col-reverse lg:flex-row items-center bg-[#eff6ff] shadow-xl rounded-3xl w-full max-w-5xl relative overflow-hidden">
        <img src={moneyIcon} alt="Money" className="absolute top-4 left-4 w-12 sm:w-16 opacity-40 rotate-12" />
        <img src={moneyIcon} alt="Money" className="absolute top-12 right-6 sm:right-24 w-10 sm:w-12 opacity-30 -rotate-12" />
        <img src={moneyIcon} alt="Money" className="absolute bottom-20 left-1/4 w-10 sm:w-14 opacity-30 rotate-6" />
        <img src={moneyIcon} alt="Money" className="absolute bottom-12 right-1/3 w-12 sm:w-16 opacity-40 -rotate-12" />
        <div className="px-4 sm:px-8 py-6 sm:py-12 w-full lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-10">
            Let's Learn <br /> & Earn
          </h1>
          <div className="mb-6 sm:mb-10">
            <p className="text-lg sm:text-xl font-medium text-gray-800 mb-2">Get a chance to earn</p>
            <p className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">₹10,000</p>
            <p className="text-lg sm:text-xl font-medium text-gray-800">for every friend who enrolls!</p>
          </div>
          <button 
            onClick={() => setOpen(true)} 
            className="px-6 sm:px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Refer Now
          </button>
        </div>
        {open && <Modal isOpen={open} onClose={() => setOpen(false)} />}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={photo} 
            alt="People with phone showing Accredian app" 
            className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-cover scale-110 lg:scale-125 lg:rounded-l-none lg:rounded-r-3xl hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
