"use client";
import React from "react";
import { Inter } from "next/font/google";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });
const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });

// FAQs Data Array
const faqsData = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

const Faqs = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 py-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1
          className={`${fontInter700.className} text-[32px] md:text-[48px] text-[#333333]`}
        >
          Questions Looks Here
        </h1>
        <p
          className={`${fontInter400.className} text-[14px] md:text-[16px] text-[#333333] mt-2`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md bg-[#F7F7F7] hover:shadow-lg transition-shadow"
          >
            <h1 className="text-[18px] font-semibold flex justify-between items-center">
              {faq.question}
              <span className="text-[#333333] text-[24px] cursor-pointer">+</span>
            </h1>
            <p className="text-[14px] text-[#666666] mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;