

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-4 md:px-8">
      <div className="w-full max-w-7xl bg-[#F0F2F3] flex flex-col md:flex-row justify-between items-center p-6 md:p-12 rounded-lg">
        {/* Left */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-sm md:text-base font-normal text-[#272343]">
            WELCOME TO CHAIRY
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md flex items-center gap-4 hover:bg-blue-700 transition-all duration-300">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Right  */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/hero/chair.png" 
            alt="Product Image"
            width={434}
            height={584}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
