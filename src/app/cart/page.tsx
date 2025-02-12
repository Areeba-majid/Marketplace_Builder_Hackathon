"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  isSale?: boolean;
  originalPrice?: number;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/ourproduct/p01.jpeg", quantity: 1 },
  { id: 2, title: "Wardrobe", price: 250, image: "/cartbuy/wb.jpg", quantity: 1 },
  { id: 3, title: "Study Desk", price: 130, image: "/cartbuy/st.jpg", quantity: 1 },
  { id: 4, title: "Bed Frame", price: 400, image: "/cartbuy/bf.jpg", isSale: true, originalPrice: 450, quantity: 1 },
];

export default function ShopNow() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(Array.isArray(storedCart) ? storedCart : []);
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      setCart([]);
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = (product: Product) => {
    router.push(`/payment?productId=${product.id}&quantity=1`);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl text-center font-semibold text-gray-800 mb-8">Shop Now</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white shadow-md hover:shadow-lg transition p-4">
            <div className="w-full h-64 relative">
              <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-700">
              {product.isSale ? (
                <>
                  <span className="text-red-500 line-through">${product.originalPrice}</span> ${product.price}
                </>
              ) : (
                `$${product.price}`
              )}
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-teal-500 px-4 py-2 text-white rounded-lg hover:bg-teal-700"
              >
                Buy Now
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gray-500 px-4 py-2 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
