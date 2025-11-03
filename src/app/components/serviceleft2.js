"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Serviceleft2 = () => {
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
      className="relative h-[90vh] bg-[url('/service.png')] bg-cover bg-center group"
      onClick={() => isMobile && setShow(!show)}
    >
      {/* Front Side */}
      <div className="pt-20 flex flex-col justify-center md:justify-start gap-y-7 pl-5 pr-5 ">
        <div className="font-semibold text-xl text-blue-300 text-center md:text-start">Our Services</div>
        <h4 className="font-bold text-3xl  text-center md:text-start md:text-4xl">
   Advanced SEO Solutions That Drive Visibility & 

          <span className="text-blue-900 ml-2"> Growth</span>
        </h4>
      </div>

      {/* Back Side */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-full flex-col justify-center items-start
           gap-2 md:gap-6 p-5 bg-blue-200 transition-all duration-300
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
        Custom SEO Solution that Business
          <span className="text-blue-900">Strong</span>
        </h4>

        <motion.p className="text-sm">
     From optimizing site architecture and improving page 
     speed to implementing structured data and mobile-first indexing,
      these solutions ensure search engines can easily crawl, understand,
       and rank your website. Incorporating AI-driven keyword research and 
       predictive analytics also allows brands to stay ahead of search trends,
      targeting high-value opportunities before competitors.
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

export default Serviceleft2;
