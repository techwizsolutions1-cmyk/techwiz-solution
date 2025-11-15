"use client";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaCog } from "react-icons/fa";
import Serviceleft2 from "./serviceleft2";

const Seo = () => {
  const items = [
    {
      icon: FaSearch,
      title: "GEO / AEO",
      desc: "Optimize for AI-driven search engines and LLM-based search results.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local SEO",
      desc: "Boost rankings with Google Business Profile & AI-enhanced local visibility.",
    },
    {
      icon: FaShoppingCart,
      title: "Ecommerce SEO",
      desc: "Increase sales with optimized product pages & conversion-focused strategies.",
    },
    {
      icon: FaCog,
      title: "Traditional SEO",
      desc: "Strengthen on-page, off-page, and technical search fundamentals.",
    },
  ];

  return (
    <div
      id="seo"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-20"
    >
      <div className=" lg:mt-5 flex flex-col  lg:flex-row
       justify-between  gap-10 lg:h-[85vh]">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[45%] h-full flex">
          <Serviceleft2 />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[55%] h-full flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center text-center
                border-2 border-gray-200 rounded-xl px-5 py-6 
                hover:bg-blue-100/60 hover:shadow-md transition-all duration-300
                h-full"
              >
                <item.icon className="text-blue-600 text-5xl mb-3" />
                <h4 className="font-bold text-xl text-blue-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Seo;
