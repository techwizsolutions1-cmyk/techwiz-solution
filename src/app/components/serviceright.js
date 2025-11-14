"use client";

import React from "react";
import Serviceleft from "./serviceleft";
import { FaWordpress, FaShopify, FaStore, FaCode } from "react-icons/fa";

export default function Serviceright() {
  const services = [
    {
      icon: <FaWordpress className="text-blue-600 text-4xl lg:text-5xl mb-2" />,
      title: "WordPress",
      desc: "Build fast, secure, and SEO-optimized websites that strengthen your brand.",
    },
    {
      icon: <FaStore className="text-blue-600 text-4xl lg:text-5xl mb-2" />,
      title: "E-commerce Store",
      desc: "Conversion-ready online stores with smart integrations that boost sales.",
    },
    {
      icon: <FaShopify className="text-blue-600 text-4xl lg:text-5xl mb-2" />,
      title: "Shopify Solutions",
      desc: "Custom Shopify themes and apps crafted for seamless shopping experiences.",
    },
    {
      icon: <FaCode className="text-blue-600 text-4xl lg:text-5xl mb-2" />,
      title: "Custom Development",
      desc: "End-to-end solutions tailored to your workflows and scalable goals.",
    },
  ];

  return (
   <section
  id="web"
  className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-10 md:py-14 lg:py-16"
>
  <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-14">

    {/* LEFT */}
    <div className="w-full lg:w-1/2 flex items-center">
      <Serviceleft />
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-center text-center 
          border border-gray-200 rounded-xl p-5 sm:p-6 md:p-7 
          hover:shadow-lg hover:bg-blue-100/60 transition-all duration-300"
        >
          {service.icon}

          <h4 className="text-blue-800 text-lg sm:text-xl lg:text-2xl font-bold mt-2">
            {service.title}
          </h4>

          <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium mt-2 leading-snug">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
