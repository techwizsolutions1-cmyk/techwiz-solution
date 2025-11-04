"use client";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaCog } from "react-icons/fa";
import Serviceleft2 from "./serviceleft2";

const Seo = () => {
  return (
    <div
      id="seo"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-20"
    >
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-8 md:gap-12">
        {/* ✅ LEFT SECTION */}
        <div className="w-full lg:w-[45%]">
          <Serviceleft2 />
        </div>

        {/* ✅ RIGHT SECTION */}
        <div className="w-full lg:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* 1️⃣ GEO / AEO */}
            <div className="flex flex-col justify-start items-center text-center border-2 border-gray-200 rounded-xl p-3 sm:p-4 md:p-4 hover:bg-blue-100/60 hover:shadow-md transition-all duration-300 min-h-[180px] sm:min-h-[200px]">
              <FaSearch className="text-blue-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" />
              <h4 className="font-bold text-base sm:text-lg text-blue-800 mb-1">
                GEO / AEO
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed lg:text-base">
                Optimize for AI-driven search engines and large language models to ensure your brand appears in conversational answers and voice queries.
              </p>
            </div>

            {/* 2️⃣ Local SEO */}
            <div className="flex flex-col justify-start items-center text-center border-2 border-gray-200 rounded-xl p-3 sm:p-4 md:p-4 hover:bg-blue-100/60 hover:shadow-md transition-all duration-300 min-h-[180px] sm:min-h-[200px]">
              <FaMapMarkerAlt className="text-blue-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" />
              <h4 className="font-bold text-base sm:text-lg text-blue-800 mb-1">
                Local SEO
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed lg:text-base">
                Enhance visibility in global search and Google Business Profile optimization, securing higher rankings in local and AI-powered results.
              </p>
            </div>

            {/* 3️⃣ Ecommerce SEO */}
            <div className="flex flex-col justify-start items-center text-center border-2 border-gray-200 rounded-xl p-3 sm:p-4 md:p-4 hover:bg-blue-100/60 hover:shadow-md transition-all duration-300 min-h-[180px] sm:min-h-[200px]">
              <FaShoppingCart className="text-blue-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" />
              <h4 className="font-bold text-base sm:text-lg text-blue-800 mb-1">
                Ecommerce SEO
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed lg:text-base">
                Boost online sales with product page optimization, structured data, and conversion-focused strategies built for growth.
              </p>
            </div>

            {/* 4️⃣ Traditional SEO */}
            <div className="flex flex-col justify-start items-center text-center border-2 border-gray-200 rounded-xl p-3 sm:p-4 md:p-4 hover:bg-blue-100/60 hover:shadow-md transition-all duration-300 min-h-[180px] sm:min-h-[200px]">
              <FaCog className="text-blue-600 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" />
              <h4 className="font-bold text-base sm:text-lg text-blue-800 mb-1">
                Traditional SEO
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed lg:text-base">
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
