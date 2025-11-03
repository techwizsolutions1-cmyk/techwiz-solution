"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Growth from "./growth";
import Success from "./success";
import Technology from "./technology";

const Chooseus = () => {
  const [val, setval] = useState(1);

  const newcontain = [
    { id: 1, component: <Growth /> },
    { id: 2, component: <Success /> },
    { id: 3, component: <Technology /> },
  ];

  return (
    <div className="w-full pb-10 px-4 md:px-10 lg:px-20">
      {/* ✅ Header Section */}
      <div className="max-w-[800px] mx-auto text-center mt-10 space-y-3 px-4">
        <div className="text-blue-300 font-semibold text-base md:text-lg">
          Why Choose Us?
        </div>
       
       <div className="flex flex-col">
         <h4 className="text-2xl md:text-4xl font-bold leading-snug">
         We Partner With Businesses 
        </h4>
        <h4 className="text-2xl md:text-4xl font-bold leading-snug">
          <span className="text-blue-800"> Across </span> Diverse {" "}
          <br className="hidden md:block" />
        Industries
        </h4>
       </div>
      </div>

      {/* ✅ Tab Navigation */}
      <div className="flex flex-col mt-10 space-y-4">
        {/* Top Line */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 md:gap-20 text-center">
          {/* 1️⃣ */}
          <div
            className={`relative flex flex-col items-center transition-all ease-in cursor-pointer ${
              val === 1 ? "text-blue-800" : "text-gray-600"
            }`}
            onClick={() => setval(1)}
          >
            <div className="font-bold text-sm md:text-base">
            Fueling Business Growth
            </div>
            {val === 1 && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-[90%] h-1 mt-2 rounded-full"></div>
            )}
          </div>

          {/* 2️⃣ */}
          <div
            className={`relative flex flex-col items-center transition-all ease-in cursor-pointer ${
              val === 2 ? "text-blue-800" : "text-gray-600"
            }`}
            onClick={() => setval(2)}
          >
            <div className="font-bold text-sm md:text-base">
              Your Goals, Our Commitment
            </div>
            {val === 2 && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-[90%] h-1 mt-2 rounded-full"></div>
            )}
          </div>

          {/* 3️⃣ */}
          <div
            className={`relative flex flex-col items-center transition-all ease-in cursor-pointer ${
              val === 3 ? "text-blue-800" : "text-gray-600"
            }`}
            onClick={() => setval(3)}
          >
            <div className="font-bold text-sm md:text-base">
            Smart Technology, Real Results
            </div>
            {val === 3 && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-[90%] h-1 mt-2 rounded-full"></div>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      {/* ✅ Content Section */}
      <div className="md:mt-8 ">
        {newcontain
          .filter((e) => e.id === val)
          .map((e) => (
            <div key={e.id}>{e.component}</div>
          ))}
      </div>
    </div>
  );
};

export default Chooseus;
