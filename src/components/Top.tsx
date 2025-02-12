import React from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const Top = () => {
  return (
    <div className="w-full bg-[#272343] py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between text-white text-sm md:text-base">
        
        {/* Left Section */}
        <p className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          <FaCheck className="text-lg" />
          <span>Free shipping on all orders over $50</span>
        </p>

        {/* Right Section */}
        <ul className="flex items-center gap-3 md:gap-6 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
          <li className="cursor-pointer">Eng</li>
          <li className="cursor-pointer">FAQs</li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaExclamationCircle className="text-lg" />
            <span>Need Help</span>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Top;
