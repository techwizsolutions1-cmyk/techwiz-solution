"use client";

import React from "react";
import Serviceleft from "./serviceleft";
import { FaWordpress, FaShopify, FaStore, FaCode } from "react-icons/fa";

const Serviceright = () => {
  return (
    <div
      id="web"
      className=" lg:items-center w-full flex flex-col lg:flex-row items-stretch gap-8  
      px-4 sm:px-6 md:px-10 lg:px-14 pt-8 md:pt-12 lg:pt-9"
    >
      {/* ✅ Left Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[80vh] flex">
        <Serviceleft />
      </div>

      {/* ✅ Right Section */}
      <div
        className="w-full lg:w-1/2 h-auto lg:h-[80vh] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 content-between"
      >
        {/* 🔹 Common Card Style */}
        {[
          {
            icon: <FaWordpress className="text-blue-600 text-3xl sm:text-5xl mb-2" />,
            title: "WordPress",
            desc: "Build fast, secure, and SEO-optimized websites that strengthen your brand and deliver measurable results."
          },
          {
            icon: <FaStore className="text-blue-600 text-3xl sm:text-5xl mb-2" />,
            title: "E-commerce Store",
            desc: "Launch conversion-ready online stores with smart integrations designed to increase sales and customer loyalty."
          },
          {
            icon: <FaShopify className="text-blue-600 text-3xl sm:text-5xl mb-2" />,
            title: "Shopify Solutions",
            desc: "Custom Shopify themes and apps tailored for seamless shopping experiences and long-term scalability."
          },
          {
            icon: <FaCode className="text-blue-600 text-3xl sm:text-5xl mb-2" />,
            title: "Custom Development",
            desc: "End-to-end web solutions engineered to match your workflows, goals, and growth plans."
          },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center border border-gray-200 rounded-xl p-3
             sm:p-4 md:p-5
              hover:shadow-md hover:bg-blue-100/60 transition-all duration-300 text-center h-full"
          >
            {service.icon}
            <h4 className="font-bold text-base lg:text-2xl sm:text-lg text-blue-800 mt-1">
              {service.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-snug lg:text-lg">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviceright;
