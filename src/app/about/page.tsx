"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });
const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const fontInter600 = Inter({ weight: "600", subsets: ["latin"] });

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <div className="bg-[#007580] w-[672px] h-[478px] ml-[10rem] ">
          <h1
            className={`${fontInter700.className} text-[32px] text-[#FFFFFF] w-[325px] h-[39px] ml-[4rem] pt-[4rem] `}
          >
            About Us- Comforty
          </h1>
          <p
            className={`${fontInter400.className} text-[18px] text-[#FFFFFF] w-[495px] h-[110px] ml-[4rem] pt-[4rem]`}
          >
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.{" "}
          </p>
          <button className="w-[179px] h-[56px] text-[#FFFFFF] text-[16px] bg-[#029FAE]  ml-[4rem] mt-[13rem]">
            View collection
          </button>
        </div>

        <div className="mr-8">
          <Image src={"/ourproduct/p01.jpeg"} alt="about_img" width={619} height={478} />
        </div>
      </div>

      <div>
        <h1
          className={`${fontInter600.className} text-[32px] text-[#272343] text-center  h-[100px] mt-[6rem] `}
        >
          What Makes Our Brand Different
        </h1>
        <div className="flex items-center justify-center bg-[#F9F9F9]">
          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] mt-9">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-5"
            >
              <rect
                width="24"
                height="24"
                fill="white"
                style={{ mixBlendMode: "multiply" }}
              />
              <path d="M12 12H3V13.5H12V12Z" fill="#007580" />
              <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#007580" />
              <path
                d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z"
                fill="#007580"
              />
            </svg>
            <h1 className="text-[#007580] text-[20px] mb-5">
              Next day as standard
            </h1>
            <p className="text-[#007580] text-[16px] ">
              Order before 3pm and get <br /> your order the next day as <br />{" "}
              standard
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] mt-9">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0.87793)"
                fill="white"
                style={{ color: "#007580", fontSize: "20px" }}
              />
              <path
                d="M11.3779 16.0605L7.62793 12.3097L8.68769 11.25L11.3779 13.9395L17.0667 8.25L18.1279 9.31125L11.3779 16.0605Z"
                fill="#007580"
              />
              <path
                d="M12.8779 1.5C10.8012 1.5 8.77116 2.11581 7.04445 3.26957C5.31773 4.42332 3.97192 6.0632 3.1772 7.98182C2.38248 9.90045 2.17454 12.0116 2.57969 14.0484C2.98483 16.0852 3.98486 17.9562 5.45331 19.4246C6.92176 20.8931 8.79269 21.8931 10.8295 22.2982C12.8663 22.7034 14.9775 22.4955 16.8961 21.7007C18.8147 20.906 20.4546 19.5602 21.6084 17.8335C22.7621 16.1068 23.3779 14.0767 23.3779 12C23.3779 9.21523 22.2717 6.54451 20.3026 4.57538C18.3334 2.60625 15.6627 1.5 12.8779 1.5ZM12.8779 21C11.0979 21 9.35785 20.4722 7.8778 19.4832C6.39776 18.4943 5.24421 17.0887 4.56302 15.4442C3.88183 13.7996 3.7036 11.99 4.05087 10.2442C4.39813 8.49836 5.2553 6.89471 6.51397 5.63604C7.77265 4.37737 9.37629 3.5202 11.1221 3.17293C12.868 2.82567 14.6776 3.0039 16.3221 3.68508C17.9666 4.36627 19.3722 5.51983 20.3612 6.99987C21.3501 8.47991 21.8779 10.22 21.8779 12C21.8779 14.3869 20.9297 16.6761 19.2419 18.364C17.5541 20.0518 15.2649 21 12.8779 21Z"
                fill="#007580"
              />
            </svg>
            <h1 className="text-[#007580] text-[20px] mb-5">
              Made by true artisans
            </h1>
            <p className="text-[#007580] text-[16px] ">
              Handmade crafted goods <br /> made with real passion and <br />{" "}
              craftmanship
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] mt-9">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0.696289)"
                fill="white"
                style={{ mixBlendMode: "multiply" }}
              />
              <path
                d="M21.6963 4.5H3.69629C3.29846 4.5 2.91693 4.65804 2.63563 4.93934C2.35432 5.22064 2.19629 5.60218 2.19629 6V18C2.19629 18.3978 2.35432 18.7794 2.63563 19.0607C2.91693 19.342 3.29846 19.5 3.69629 19.5H21.6963C22.0941 19.5 22.4756 19.342 22.7569 19.0607C23.0383 18.7794 23.1963 18.3978 23.1963 18V6C23.1963 5.60218 23.0383 5.22064 22.7569 4.93934C22.4756 4.65804 22.0941 4.5 21.6963 4.5ZM21.6963 6V8.25H3.69629V6H21.6963ZM3.69629 18V9.75H21.6963V18H3.69629Z"
                fill="#007580"
              />
              <path d="M12.6963 15H5.19629V16.5H12.6963V15Z" fill="#007580" />
            </svg>
            <h1 className="text-[#007580] text-[20px] mb-5">
              Unbeatable prices
            </h1>
            <p className="text-[#007580] text-[16px] ">
              For our materials and <br /> quality you wont find better <br />{" "}
              prices anywhere
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] mt-9">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0.544922)"
                fill="white"
                style={{ mixBlendMode: "multiply" }}
              />
              <path
                d="M19.2949 1.5C17.6327 1.50275 16.01 2.00708 14.6391 2.94704C13.2682 3.887 12.2128 5.21881 11.6111 6.7683C11.1291 6.06903 10.4844 5.49727 9.73259 5.10216C8.98077 4.70705 8.14424 4.50041 7.29492 4.5H5.04492V6.75C5.04647 8.14191 5.60009 9.47637 6.58432 10.4606C7.56855 11.4448 8.90301 11.9985 10.2949 12H11.0449V18.787C9.32222 18.9554 7.7121 19.7191 6.49167 20.9465L7.55217 22.0071C8.17956 21.3798 8.93826 20.8995 9.77361 20.6006C10.609 20.3018 11.5002 20.192 12.3831 20.279C13.266 20.3661 14.1186 20.6478 14.8796 21.104C15.6405 21.5602 16.2908 22.1794 16.7836 22.9172L18.0298 22.0826C17.415 21.1638 16.6043 20.3926 15.6559 19.8244C14.7075 19.2562 13.6451 18.9052 12.5449 18.7965V12H13.2949C15.4822 11.9975 17.5792 11.1275 19.1258 9.58089C20.6725 8.03425 21.5424 5.93727 21.5449 3.75V1.5H19.2949ZM10.2949 10.5C9.30071 10.4989 8.34754 10.1034 7.64452 9.4004C6.9415 8.69738 6.54605 7.74421 6.54492 6.75V6H7.29492C8.28915 6.00107 9.24236 6.3965 9.94539 7.09953C10.6484 7.80256 11.0438 8.75577 11.0449 9.75V10.5H10.2949ZM20.0449 3.75C20.0429 5.5396 19.3311 7.25534 18.0657 8.52078C16.8003 9.78622 15.0845 10.498 13.2949 10.5H12.5449V9.75C12.5469 7.9604 13.2587 6.24466 14.5241 4.97922C15.7896 3.71378 17.5053 3.00199 19.2949 3H20.0449V3.75Z"
                fill="#007580"
              />
            </svg>
            <h1 className="text-[#007580] text-[20px] mb-5">
              Recycled packaging
            </h1>
            <p className="text-[#007580] text-[16px] ">
              We use 100% recycled to <br /> ensure our footprint is more <br />{" "}
              manageable
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1
          className={`${fontInter600.className} text-[#272343] text-[32px] ml-[13rem] mt-[6rem]`}
        >
          Our Popular Products
        </h1>
        <div className="flex mb-[6rem] ">
          <div>
            <Image
              src={"/about/a1.jpeg"}
              alt="about_img2"
              width={630}
              height={462}
              className="mt-9 ml-[9rem]"
            />
          </div>
          <div>
            <Image
              src={"/about/a2.jpeg"}
              alt="about_img3"
              width={305}
              height={462}
              className="mt-9 ml-9"
            />
          </div>
          <div>
            <Image
              src={"/about/a3.jpeg"}
              alt="about_img4"
              width={305}
              height={462}
              className="mt-9 ml-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;