"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

// Product Interface
interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  quantity: number;
}

// Product List
const products: Product[] = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/ourproduct/p01.jpeg", isNew: true, quantity: 100 },
  { id: 2, title: "Wardrobe", price: 250, image: "/cartbuy/wb.jpg", quantity: 1 },
  { id: 3, title: "Study Desk", price: 130, image: "/cartbuy/st.jpg", quantity: 1 },
  { id: 4, title: "Bed Frame", price: 400, image: "/cartbuy/bf.jpg", isSale: true, originalPrice: 450, quantity: 1 },
  { id: 5, title: "Bar Stool", price: 45, image: "/cartbuy/bars.jpg", quantity: 1 },
  { id: 6, title: "Shoe Rack", price: 70, image: "/cartbuy/sr.jpg", quantity: 1 },
  { id: 7, title: "Outdoor Lounge Chair", price: 90, image: "/cartbuy/lc.jpg", quantity: 1 },
  { id: 8, title: "Folding Table", price: 60, image: "/cartbuy/ft.jpg", quantity: 1 },
  { id: 9, title: "Rocking Chair", price: 110, image: "/cartbuy/rc.jpg", isNew: true, quantity: 1 },
  { id: 10, title: "Glass Dining Table", price: 280, image: "/cartbuy/gt.jpg", quantity: 1 },
  { id: 11, title: "Side Table", price: 55, image: "/cartbuy/sidet.jpg", quantity: 1 },
  { id: 12, title: "L-Shaped Sofa", price: 600, image: "/cartbuy/ls.jpg", isSale: true, originalPrice: 650, quantity: 10 },
  { id: 13, title: "Office Chair", price: 25, originalPrice: 35, image: "/ourproduct/p2.jpeg", isSale: true, quantity: 1 },
  { id: 14, title: "Gaming Chair", price: 40, image: "/ourproduct/p3.jpeg", quantity: 1 },
  { id: 15, title: "Wooden Dining Table", price: 150, image: "/ourproduct/p4.jpeg", quantity: 1 },
  { id: 16, title: "Leather Recliner", price: 200, image: "/ourproduct/p5.jpeg", isNew: true, quantity: 1 },
  { id: 17, title: "Modern Sofa", price: 300, image: "/ourproduct/p6.jpeg", isSale: true, originalPrice: 350, quantity: 1 },
  { id: 18, title: "Coffee Table", price: 80, image: "/ourproduct/p7.jpeg", quantity: 1 },
  { id: 19, title: "TV Stand", price: 120, image: "/cartbuy/tv.webp", quantity: 1 },
  { id: 20, title: "Bookshelf", price: 100, image: "/cartbuy/bs.jpg", isNew: true, quantity: 1 },
];

// 🛍️ Product List Page
export default function ProductList() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  // Handle "Buy Now" Click
  const handleBuyNow = (product: Product) => {
    router.push(`/payment?productId=${product.id}&quantity=${product.quantity}`);
  };

  // Handle "Add to Cart" Click
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* 🛒 Cart Summary */}
      <div className="flex justify-end p-4">
        <span className="text-lg font-medium text-gray-700">Cart: {cart.length} items</span>
      </div>

      <h1 className="text-5xl text-center font-semibold text-gray-800 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white shadow-md hover:shadow-lg transition">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && <span className="absolute left-3 top-3 bg-emerald-500 px-2 py-1 text-xs text-white">New</span>}
              {product.isSale && <span className="absolute left-3 top-3 bg-orange-500 px-2 py-1 text-xs text-white">Sale</span>}
              <Image src={product.image} alt={product.title} height={400} width={400} className="h-full w-full object-cover group-hover:scale-105" />
            </div>
            <div className="mt-4 px-3">
              <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-800">${product.price}</span>
                {product.originalPrice && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
              </div>
              <div className="flex justify-between items-center gap-2 mt-2">
                <button onClick={() => handleBuyNow(product)} className="bg-teal-500 px-4 py-2 text-sm text-white hover:bg-teal-700 rounded-lg">
                  Buy Now
                </button>
                <button onClick={() => handleAddToCart(product)} className="bg-gray-500 px-4 py-2 text-sm text-white hover:bg-gray-700 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
