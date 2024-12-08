// import { ShoppingCart } from "lucide-react";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
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
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p4.jpeg",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p5.jpeg",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/ourproduct/p6.jpeg",
      isSale: true,
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p7.jpeg",
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      image: "/ourproduct/p01.jpeg",
    },
  ];

  return (
    <div id="ourProduct" className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-gray-800 tracking-tight mb-8">
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
              <Link href="/components/productDescription/description">
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between px-3">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {product.title}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-gray-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-lg bg-[#F0F2F3] p-2 text-white transition-colors hover:bg-teal-600">
                 <CiShoppingCart   className="h-8 w-8 text-black " />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
