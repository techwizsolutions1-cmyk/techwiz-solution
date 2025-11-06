"use client";

import React from "react";
import Image from "next/image";

const Success = () => {
  return (
    <div
      className="w-full flex flex-col-reverse lg:flex-row items-center md:items-start 
      gap-10 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20  md:py-16"
    >
      {/* ✅ LEFT SECTION (Text) */}
      <div className="w-full md:w-full lg:w-1/2 flex flex-col justify-center text-center md:pt-12
       lg:text-left space-y-2 sm:space-y-6 md:space-y-2" >
        <div className="text-blue-400 font-semibold text-base sm:text-lg md:text-center">
          Fuel Your Curiosity
        </div>

        <h4 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-3xl leading-snug">
          Your Goals, Our Commitment
        </h4>

        <p className="text-gray-700 text-sm sm:text-base text-center  max-w-[600px] mx-auto md:mx-0">
          Your success is our priority. We align every strategy with your goals,
          delivering tailored digital marketing solutions built on trust,
          transparency, and measurable results to ensure lasting partnerships
          and business growth.
        </p>
      </div>

      {/* ✅ RIGHT SECTION (Image) */}
      <div className="w-full md:w-full  lg:w-1/2 relative flex justify-center">
        {/* Decorative Dot Image */}
        <Image
          src="/dot.png"
          alt="background dots"
          width={150}
          height={100}
          className="absolute top-0 left-5 md:left-20 lg:left-16 -z-10 animate-pulse opacity-70"
        />

        {/* Main Image */}
        <Image
          src="/cde.png"
          alt="Success Image"
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

export default Success;
