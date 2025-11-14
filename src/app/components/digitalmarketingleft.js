"use client";

import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abcde } from "./contextprovider3";

const Digitalmarketingleft = () => {
  const { val3, setVal3 } = useContext(abcde);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        relative 
        h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh] 
        bg-[url('/service.png')] bg-cover bg-center
        group rounded-xl overflow-hidden cursor-pointer
        flex flex-col justify-center
      "
      onClick={() => isMobile && setShow(!show)}
    >
      {/* FRONT SIDE */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 gap-y-4 sm:gap-y-6 md:gap-y-7 w-full h-full bg-black/30 md:bg-transparent">
        <div className="font-semibold text-blue-500 text-base sm:text-lg md:text-2xl">
          DIGITAL SOLUTIONS
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white md:text-black leading-snug">
          Strengthen Your Brand With Proven Digital{" "}
          <span className="text-blue-900">Growth</span>
        </h2>
      </div>

      {/* BACK SIDE */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute inset-0 flex flex-col justify-center items-center md:items-start
          gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8
          bg-blue-300/90 backdrop-blur-sm rounded-xl
          transition-opacity duration-300
          ${isMobile ? (show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none") : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
          Grow your Brand with Powerful{" "}
          <span className="text-blue-900">Digital Strategies</span>
        </h3>

        <motion.p
          className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl text-gray-700 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Strengthen your brand with proven digital marketing strategies designed
          to deliver measurable impact. From advanced SEO and content marketing to
          social media management and paid advertising, we create tailored
          solutions that amplify your visibility and connect you with the right
          audience. Our data-driven approach ensures every campaign is optimized
          for maximum reach, engagement, and conversions.
        </motion.p>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mt-4">
          <input
            type="text"
            placeholder="Enter your Website"
            value={val3}
            onChange={(e) => setVal3(e.target.value)}
            className="border-2 border-blue-600 rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-center sm:text-left flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
          <Link
            href="/forms/digital-quot"
            className="font-bold bg-blue-900 text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-center hover:bg-blue-800 transition-all duration-200"
          >
            Send Me a Proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Digitalmarketingleft;
