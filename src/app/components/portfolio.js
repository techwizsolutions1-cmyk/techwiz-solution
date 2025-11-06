"use client";
import React, { useState } from "react";
import Pseo from "./pseo"; // ✅ Your SEO portfolio component
import Pweb from "./pweb"; // ✅ Your Web Solutions component
import Digitalmarketing from "./digitalmarketing";
const Portfolio = () => {
  const [active, setActive] = useState("Seo");

  // ✅ Define your categories
  const items = ["SEO", "Digital Marketing", "Web Solutions"];

  // ✅ Map each tab to its component
  const components = {
    Seo: <Pseo />,
    "Digital Marketing": <Digitalmarketing/>,
    "Web Solutions": <Pweb />,
   
  };

  return (
    <div className="w-full mt-0 px-4 md:px-10 lg:px-20">
      {/* ✅ Header */}
      <div className="flex flex-col items-center space-y-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Portfolio
        </h2>

        {/* ✅ Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-lg md:text-2xl font-semibold">
          {items.map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className="flex flex-col items-center cursor-pointer group transition-transform duration-300"
            >
              {/* Tab Text */}
              <h3
                className={`${
                  active === item
                    ? "text-blue-600 scale-105"
                    : "text-gray-700 hover:text-blue-400"
                } transition-transform duration-300`}
              >
                {item}
              </h3>

              {/* Underline */}
              <div
                className={`h-1 w-full mt-2 rounded-full transition-all duration-300 ${
                  active === item
                    ? "bg-blue-500"
                    : "bg-transparent group-hover:bg-blue-300"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Display Active Component */}
      <div className="mt-10">
        {components[active] || <p className="text-center">No content found</p>}
      </div>
    </div>
  );
};

export default Portfolio;
