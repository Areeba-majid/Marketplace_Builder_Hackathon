"use client";

import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.reduce((total: number, item: any) => total + item.quantity, 0));
  }, []);

  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/header/logo.png"
            alt="Comforty Logo"
            width={40}
            height={23}
            className="ml-3"
          />
          <h2 className="text-[26px] font-medium">Comforty</h2>
        </div>

        {/* Cart Button with Dynamic Count */}
        <Link href="/cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            {cartCount > 0 && (
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                {cartCount}
              </div>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
