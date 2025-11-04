"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Serviceleft2 = () => {
  const { val, setVal } = useContext(abc);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] bg-[url('/service.png')] bg-cover bg-center 
      group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
      onClick={() => isMobile && setShow(!show)}
    >
      {/* ✅ FRONT SIDE */}
      <div className="pt-16 sm:pt-20 flex flex-col justify-center md:justify-start gap-y-5 sm:gap-y-6 px-5 sm:px-6 md:px-10 text-center md:text-left">
        <div className="font-semibold text-lg sm:text-xl text-blue-300">
          Our Services
        </div>
        <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
          Advanced SEO Solutions That Drive Visibility &
          <span className="text-blue-900 ml-2">Growth</span>
        </h4>
      </div>

      {/* ✅ BACK SIDE */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-blue-100/95 backdrop-blur-sm transition-all duration-500
        ${isMobile ? (show ? "flex" : "hidden") : "hidden group-hover:flex"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="font-semibold text-lg sm:text-xl text-blue-600">
          Our Services
        </div>

        <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-gray-800">
          Custom SEO Solutions that Make Businesses{" "}
          <span className="text-blue-900">Stronger</span>
        </h4>

        <motion.p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          From optimizing site architecture and improving page speed to implementing structured data
          and mobile-first indexing, these strategies ensure your website is easily crawled and ranked.
          AI-driven keyword research and predictive analytics keep your brand ahead of competitors.
        </motion.p>

        {/* ✅ FORM SECTION */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full mt-2">
          <input
            type="text"
            placeholder="Enter your Website"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="border-2 border-blue-600 rounded-lg py-2 sm:py-3 px-3 text-sm sm:text-base text-center flex-1 focus:outline-none focus:border-blue-900"
            required
          />
          <Link
            href={`abc/forms`}
            className="font-bold bg-blue-900 hover:bg-blue-800 text-white text-sm sm:text-base rounded-lg px-4 sm:px-5 py-2 sm:py-3 flex items-center justify-center transition-all duration-300"
          >
            Send me a proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Serviceleft2;
