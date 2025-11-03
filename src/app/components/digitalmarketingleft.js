"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Digitalmarketingleft = () => {
  const { val, setVal } = useContext(abc);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // tailwind's md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-[100vh] bg-[url('/service.png')] bg-cover bg-center group"
      onClick={() => isMobile && setShow(!show)}
    >
      {/* Front Side */}
      <div className="pt-20 flex flex-col gap-y-7 pl-5 pr-5">
        <div className="font-semibold text-xl text-blue-300">Our Services</div>
        <h4 className="font-bold text-2xl md:text-4xl">
 Strengthen Your Brand With Proven Digital Marketing

          <span className="text-blue-900 ml-2"> Growth</span>
        </h4>
      </div>

      {/* Back Side */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-full flex-col justify-center items-start gap-2 md:gap-6 p-5 bg-blue-200 transition-all duration-300
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
        <div className="font-semibold text-xl text-blue-600">Our Services</div>
        <h4 className="font-bold text-2xl md:text-4xl">
       Grow your Brand with Powerful 
          <span className="text-blue-900">Digital Strategies</span>
        </h4>

        <motion.p className="text-sm">
    Strengthen your brand with proven digital marketing strategies designed to deliver measurable impact. From advanced SEO and content marketing to social media management and paid advertising, we create tailored solutions that amplify your visibility and connect you with the right audience. Our data-driven approach ensures every campaign
     is optimized for maximum reach, engagement, and conversions.
     
        </motion.p>

        <div className="flex flex-row gap-2 w-full">
          <input
            type="text"
            placeholder="Enter your Website"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="border-2 border-blue-600  md:py-3 md:px-2 text-center flex-1"
            required
          />
          <Link
            href={`abc/forms`}
            className="font-bold bg-blue-900 text-white px-3 py-3 flex items-center"
          >
            Send me a proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Digitalmarketingleft;
