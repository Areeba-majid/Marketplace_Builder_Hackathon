import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: 20,
    image: "/featured/l1.jpeg",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: 20,
    image: "/featured/l2.jpeg",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: 20,
    image: "/featured/l3.jpeg",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: 20,
    image: "/featured/l4.jpeg",
  },
];

export default function Featured() {
  return (
    <div className="w-full flex flex-col p-2 mt-10">
      {/* Title */}
      <h1 className="text-2xl font-bold p-2">Featured Products</h1>
      
      {/* Product Grid */}
      <div className="w-full flex flex-col items-center mt-5 gap-4 md:flex-row md:justify-center md:gap-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col w-full md:w-1/4 items-center">
            {/* Product Item */}
            <div className="relative">
              {/* "New" Tag */}
              <span className="absolute bg-[#01AD5A] p-1 text-white ml-2 mt-4 text-sm rounded-lg">
                New
              </span>
              {/* Product Image */}
              <Image
                alt={product.title}
                width={250}
                height={250}
                src={product.image}
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Product Title and Price */}
            <div className="flex flex-col items-center mt-4">
              <h2 className="font-bold">{product.title}</h2>
              <div className="flex justify-between p-2 items-center w-full">
                <span className="text-gray-500">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
