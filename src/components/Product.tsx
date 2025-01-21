import Image from "next/image";

export default function Product() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        {/* Vertical text */}
        <div
          className="hidden text-xs text-center font-medium tracking-wider text-zinc-900 md:block pt-6"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xs font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src="/featured/l3.jpeg"
              alt="Orange modern chair"
              className="aspect-square h-auto w-auto object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/featured/l1.jpeg"
                alt="White tufted chair"
                className="aspect-square h-auto w-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/featured/l4.jpeg"
                alt="Gray upholstered chair"
                className="aspect-square h-auto w-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/ourproduct/p6.jpeg"
                alt="Vintage white chair"
                className="aspect-square h-auto w-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/featured/l1.jpeg"
                alt="Vintage white chair duplicate"
                className="aspect-square h-auto w-auto object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
