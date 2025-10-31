"use client";

import React from "react";
import Serviceleft from "./serviceleft";
import { FaWordpress, FaShopify, FaStore, FaCode } from "react-icons/fa";

const Serviceright = () => {
  return (
    <div className="w-full flex pr-3 pl-3 flex-col md:flex-row md:pl-10 md:pr-10 pt-10 mt-10 items-center md:items-start gap-8">
      {/* ✅ Left Section */}
      <div className="w-full md:w-1/2">
        <Serviceleft />
      </div>

      {/* ✅ Right Section */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 1️⃣ Wordpress */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaWordpress className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Wordpresss
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Improve visibility, attract traffic, and grow your online presence.
          </p>
        </div>

        {/* 2️⃣ E-commerce Store */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaStore className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              E-commerce Store
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Strategic solutions to achieve sustainable business growth.
          </p>
        </div>

        {/* 3️⃣ Shopify Solutions */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaShopify className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Shopify Solutions
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Creative, user-friendly designs that enhance digital experiences.
          </p>
        </div>

        {/* 4️⃣ Custom Development */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaCode className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Custom Development
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Secure, scalable, and efficient solutions for modern businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serviceright;
