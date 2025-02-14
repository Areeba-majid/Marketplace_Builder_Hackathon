"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

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
  { id: 1, title: "Library Stool Chair", price: 20, image: "/ourproduct/p01.jpeg", isNew: true, quantity: 1 },
  { id: 2, title: "Office Chair", price: 25, originalPrice: 35, image: "/ourproduct/p2.jpeg", isSale: true, quantity: 1 },
  { id: 3, title: "Gaming Chair", price: 40, image: "/ourproduct/p3.jpeg", quantity: 1 },
  { id: 4, title: "Wooden Dining Table", price: 150, image: "/ourproduct/p4.jpeg", quantity: 1 },
  { id: 5, title: "Leather Recliner", price: 200, image: "/ourproduct/p5.jpeg", isNew: true, quantity: 1 },
  { id: 6, title: "Modern Sofa", price: 300, image: "/ourproduct/p6.jpeg", isSale: true, originalPrice: 350, quantity: 1 },
  { id: 7, title: "Coffee Table", price: 80, image: "/ourproduct/p7.jpeg", quantity: 1 },
  { id: 8, title: "TV Stand", price: 120, image: "/ourproduct/p8.jpeg", quantity: 1 },
  { id: 9, title: "Bookshelf", price: 100, image: "/ourproduct/p9.jpeg", isNew: true, quantity: 1 },
  { id: 10, title: "Wardrobe", price: 250, image: "/ourproduct/p10.jpeg", quantity: 1 },
  { id: 11, title: "Study Desk", price: 130, image: "/ourproduct/p11.jpeg", quantity: 1 },
  { id: 12, title: "Bed Frame", price: 400, image: "/ourproduct/p12.jpeg", isSale: true, originalPrice: 450, quantity: 1 },
  { id: 13, title: "Bar Stool", price: 45, image: "/ourproduct/p13.jpeg", quantity: 1 },
  { id: 14, title: "Shoe Rack", price: 70, image: "/ourproduct/p14.jpeg", quantity: 1 },
  { id: 15, title: "Outdoor Lounge Chair", price: 90, image: "/ourproduct/p15.jpeg", quantity: 1 },
  { id: 16, title: "Folding Table", price: 60, image: "/ourproduct/p16.jpeg", quantity: 1 },
  { id: 17, title: "Rocking Chair", price: 110, image: "/ourproduct/p17.jpeg", isNew: true, quantity: 1 },
  { id: 18, title: "Glass Dining Table", price: 280, image: "/ourproduct/p18.jpeg", quantity: 1 },
  { id: 19, title: "Side Table", price: 55, image: "/ourproduct/p19.jpeg", quantity: 1 },
  { id: 20, title: "L-Shaped Sofa", price: 600, image: "/ourproduct/p20.jpeg", isSale: true, originalPrice: 650, quantity: 1 },
];

// 🛍️ Product List Page
export function ProductList() {
  const router = useRouter();

  // Handle "Buy Now" Click
  const handleBuyNow = (product: Product) => {
    router.push(`/payment?productId=${product.id}&quantity=${product.quantity}`);
  };

  return (
    <div className="container mx-auto px-4 py-20">
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
              <div className="flex justify-between items-center">
                <button onClick={() => handleBuyNow(product)} className="bg-teal-500 px-4 py-2 text-sm text-white hover:bg-teal-700 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}