"use client";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaCog } from "react-icons/fa";
import Serviceleft2 from "./serviceleft2";

const Seo = () => {
  return (
    <div id="seo" className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-[45%]">
          <Serviceleft2 />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 1️⃣ GEO / AEO */}
            <div className="flex flex-col items-center border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-100 hover:shadow-xl transition-all duration-300">
              <FaSearch className="text-blue-600 text-4xl mb-4" />
              <h4 className="font-bold text-lg md:text-xl text-blue-800 mb-2">
                GEO / AEO
              </h4>
              <p className="text-sm md:text-base text-gray-700 font-medium text-center">
               Optimize for AI-driven search engines and large language models to ensure your brand 
               appears in conversational answers and voice queries.
              </p>
            </div>

            {/* 2️⃣ Local SEO */}
            <div className="flex flex-col items-center border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-100 hover:shadow-xl transition-all duration-300">
              <FaMapMarkerAlt className="text-blue-600 text-4xl mb-4" />
              <h4 className="font-bold text-lg md:text-xl text-blue-800 mb-2">
                Local SEO
              </h4>
              <p className="text-sm md:text-base text-gray-700 font-medium text-center">
               Enhance visibility in global search and Google Business Profile  optimization, securing higher rankings in local and AI-powered results.
              </p>
            </div>

            {/* 3️⃣ Ecommerce SEO */}
            <div className="flex flex-col items-center border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-100 hover:shadow-xl transition-all duration-300">
              <FaShoppingCart className="text-blue-600 text-4xl mb-4" />
              <h4 className="font-bold text-lg md:text-xl text-blue-800 mb-2">
                Ecommerce SEO
              </h4>
              <p className="text-sm md:text-base text-gray-700 font-medium text-center">
                Boost online sales with product page optimization, structured data, and conversion-focused strategies built for growth.
              </p>
            </div>

            {/* 4️⃣ Traditional SEO */}
            <div className="flex flex-col items-center border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-100 hover:shadow-xl transition-all duration-300">
              <FaCog className="text-blue-600 text-4xl mb-4" />
              <h4 className="font-bold text-lg md:text-xl text-blue-800 mb-2">
                Traditional SEO
              </h4>
              <p className="text-sm md:text-base text-gray-700 font-medium text-center">
              Refine on-page, off-page, and technical SEO to strengthen rankings, fix errors, and sustain organic performance.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
