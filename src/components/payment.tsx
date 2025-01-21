"use client"

import React, { useState } from "react";

export default function Payment() {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (
      paymentDetails.name &&
      paymentDetails.cardNumber.length === 16 &&
      paymentDetails.expiry &&
      paymentDetails.cvv.length === 3
    ) {
      setPaymentSuccess(true);
    } else {
      alert("Please fill in valid payment details.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 border-y-2 border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 border border-gray-200 mb-6 text-center">
        Payment Details
      </h1>

      {paymentSuccess ? (
        <div className="text-center">
          <h2 className="text-2xl font-medium text-green-600">
            Payment Successful!
          </h2>
          <p className="mt-4 text-gray-600">
            Thank you for your purchase. Your order has been processed.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handlePayment}
          className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={paymentDetails.name}
              onChange={handleChange}
              placeholder="Add  Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              placeholder="*************"
              maxLength={16}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={paymentDetails.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-teal-600 py-2 px-4 text-white text-sm font-medium shadow hover:bg-teal-700 transition-colors"
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
}
