"use client";
import React from "react";
import Image from "next/image";


const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl font-bold mb-6">Bag</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-4">
            
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded">
              
              {/* Product Details */}
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-1">
                <h3 className="font-bold text-lg">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">Size: L</p>
                <p className="text-base font-semibold mt-2">MRP: $99</p>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 hover:underline mt-4 sm:mt-0">
                Remove
              </button>
            </div>

            {/* Additional Items */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded">
              {/* Product Image */}
              
              {/* Product Details */}
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-1">
                <h3 className="font-bold text-lg">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">Size: L</p>
                <p className="text-base font-semibold mt-2">MRP: $99</p>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 hover:underline mt-4 sm:mt-0">
                Remove
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white p-6 shadow rounded space-y-4">
            <h3 className="text-lg font-bold">Summary</h3>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$198</span>
            </div>

            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold border-t pt-4">
              <span>Total</span>
              <span>$198</span>
            </div>

            <button className="bg-[#029FAE] text-white w-full py-2 rounded-full hover:bg-[#007e88] transition">
              Member Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;