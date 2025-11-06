"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Serviceleft = () => {
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
         WEB EXPERT
        </div>

        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white md:text-black leading-snug">
          Secure, Scalable, and User-Focused{" "}
          <span className="text-blue-900">Web Experiences</span>
        </h2>
      </div>

      {/* 🔹 Back Side */}
      <motion.div
  onClick={(e) => e.stopPropagation()} // 🧠 prevent clicks from closing the card
  className={`absolute top-0 left-0 w-full h-full flex-col justify-center 
    items-center md:items-start gap-0 sm:gap-2 md:gap-6 p-4 sm:p-6 md:p-8
     bg-blue-100/90 backdrop-blur-sm rounded-xl transition-all duration-300 
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
        
        <h3 className="font-bold text-2xl sm:text-xl md:text-4xl text-center md:text-left leading-snug">
          Custom Web Solutions That Drive{" "}
          <span className="text-blue-900">Results</span>
        </h3>

        <motion.p
          className="text-gray-700 text-sm sm:text-sm  md:text-[17px] leading-relaxed text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional, responsive, and scalable websites tailored to your
          business needs — built for performance, security, and user experience,
          powered by modern technologies to ensure growth and digital success.
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

export default Serviceleft;
