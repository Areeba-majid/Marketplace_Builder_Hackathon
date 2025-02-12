"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white pt-3 pb-3 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
      
        <div className="text-[#007580] font-bold text-lg">
          <Link href={"/"}>Comforty🌸</Link>
        </div>

        
        <div className="hidden md:flex gap-8 ml-3">
          <Link href={"/"} className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={"/cart"} className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href={"/product"} className="text-[14px] font-medium">
            Product
          </Link>
          <Link href={"/contact"} className="text-[14px] font-medium">
            Contact Us
          </Link>
          <Link href={"/about"} className="text-[14px] font-medium">
            About
          </Link>
        </div>

        
        <button
          className="md:hidden text-[#007580] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        
        <div className="hidden md:flex items-center">
          <span className="font-normal text-[#636270] text-[14px]">
            Contact:
          </span>
          <span className="font-medium text-[#272343] text-[14px] ml-2">
            (808) 555-0111
          </span>
        </div>
      </div>

 
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <Link
            href={"#"}
            className="block py-2 px-4 text-[#007580] text-[14px] font-medium"
          >
            Home
          </Link>
          <Link
            href={"/cart"}
            className="block py-2 px-4 text-[14px] font-medium"
          >
            Shop
          </Link>
          <Link
            href={"/product"}
            className="block py-2 px-4 text-[14px] font-medium"
          >
            Product
          </Link>
          <Link
            href={"/contact"}
            className="block py-2 px-4 text-[14px] font-medium"
          >
            Contact Us
          </Link>
          <Link
            href={"/about"}
            className="block py-2 px-4 text-[14px] font-medium"
          >
            About
          </Link>

          
          <div className="border-t border-gray-200 mt-2">
            <p className="py-2 px-4 text-[#636270] text-[14px]">Contact:</p>
            <p className="py-2 px-4 text-[#272343] text-[14px] font-medium">
              (808) 555-0111
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
