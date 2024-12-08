import React from "react";
import Image from "next/image";

const Clogo = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 p-4">
      <div className="flex-shrink-0">
        <Image
          src="/logo/l1.png"
          alt="Zaphier Logo"
          width={85}
          height={87}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l2.png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l3.png"
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l4.png"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l5.png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l6.png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/logo/l7.png"
          alt="Moz Logo"
          width={84}
          height={87}
        />
      </div>
    </div>
  );
};

export default Clogo;
