"use client";

import React from "react";
import Image from "next/image";

const Growth = () => {
  return (
    <div
      className="w-full flex flex-col-reverse lg:flex-row items-center md:items-start 
      gap-10 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16"
    >
      {/* ✅ LEFT SECTION (Text) */}
      <div className="w-full  md:w-full lg:w-1/2 flex flex-col justify-center text-center md:text-center space-y-4 sm:space-y-6">
        <div className="text-blue-400 font-semibold text-base sm:text-lg">
          Touching Lives Through Technologies
        </div>

        <h4 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
          Fueling Business Growth
        </h4>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto md:mx-0">
          We craft data-driven strategies that fuel consistent business growth.
          From brand visibility to lead generation, our solutions empower
          companies to expand their reach, strengthen engagement, and unlock
          long-term profitability.
        </p>
      </div>

      {/* ✅ RIGHT SECTION (Image) */}
      <div className="w-full md:w-full lg:w-1/2 relative flex justify-center md:justify-center">
        {/* Decorative Dots */}
        <Image
          src="/dot.png"
          alt="decorative dots"
          width={150}
          height={100}
          className="absolute top-0 left-5 md:left-10 lg:left-16 -z-10 animate-pulse opacity-70"
        />

        {/* Main Image */}
        <Image
          src="/abc.jpg"
          alt="Growth Image"
          width={500}
          height={500}
          className="rounded-2xl shadow-xl object-cover"
          style={{
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </div>
  );
};

export default Growth;
