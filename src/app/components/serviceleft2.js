
"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Serviceleft2 = () => {
  const { val, setVal } = useContext(abc);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-[70vh] sm:h-[80vh] md:h-[96vh] bg-[url('/service.png')] bg-cover bg-center group rounded-xl overflow-hidden cursor-pointer"
      onClick={() => isMobile && setShow(!show)}
    >
      {/* 🔹 Front Side */}
      <div className="  flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-7
       px-4 sm:px-6 md:px-10 text-center md:text-center justify-center items-center 
       md:items-center h-full bg-black/30 md:bg-transparent">
        <div className="font-semibold text-blue-500 text-base sm:text-lg md:text-2xl md:text-center">
       SEARCH EXPERIENCE OPTIMIZATION
        </div>

        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white md:text-black leading-snug">
         Advanced SEO Solutions That Drive  & {""}
          <span className="text-blue-900">Growth</span>
        </h2>
      </div>

      {/* 🔹 Back Side */}
      <motion.div
  onClick={(e) => e.stopPropagation()} // 🧠 prevent clicks from closing the card
  className={`absolute top-0 left-0 w-full h-full flex-col justify-center 
    items-center md:items-start gap-0 sm:gap-2 md:gap-6 p-4 sm:p-6 md:p-8
  bg-blue-300 backdrop-blur-sm rounded-xl transition-all duration-300 
    ${
      isMobile
        ? show
          ? "flex"
          : "hidden"
        : "hidden group-hover:flex"
    }`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
        

       <h3 className="font-bold text-xl sm:text-3xl md:text-4xl text-gray-800">
          Custom SEO Solutions that Make Businesses {""}
         <span className="text-blue-900">Stronger</span>
       </h3>


       <motion.p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
         From optimizing site architecture and improving page speed to implementing structured data
        and mobile-first indexing, these strategies ensure your website is easily crawled and ranked.
        AI-driven keyword research and predictive analytics keep your brand ahead of competitors.
      </motion.p>
        {/* 🔹 Input + Button (Responsive Layout) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mt-3">
          <input
            type="text"
            placeholder="Enter your Website"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="border-2 border-blue-600 rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-center sm:text-left flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
          <Link
            href="/forms/proposal"
            className="font-bold bg-blue-900 text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-center hover:bg-blue-800 transition-all duration-200"
          >
            Send Me a Proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Serviceleft2;
