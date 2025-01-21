"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductList() {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p01.jpeg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/ourproduct/p2.jpeg",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p3.jpeg",
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        alert("Product is already in the cart.");
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  return (
    <div id="productList" className="container mx-auto px-4 py-20">
      <h1 className="text-5xl text-center font-semibold text-gray-800 tracking-tight mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2 py-1 text-xs text-white">
                  New
                </span>
              )}
              {product.isSale && (
                <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2 py-1 text-xs text-white">
                  Sale
                </span>
              )}
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <h3 className="text-sm font-medium text-gray-800">
                {product.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-800">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => addToCart(product)}
                  className="rounded-lg bg-[#F0F2F3] p-2 text-white transition-colors hover:bg-teal-600"
                >
                  <CiShoppingCart className="h-8 w-8 text-black" />
                  <span className="sr-only">Add to cart</span>
                </button>
                <Link href="/payment">
                  <button
                    className="rounded-lg bg-teal-500 px-4 py-2 text-sm text-white hover:bg-teal-700 transition-colors"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Cart</h2>
        {cart.length === 0 ? (
          <p className="mt-2 text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-600">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}