"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlipCard3() {
  const [isSticky, setIsSticky] = useState(false);

  // Flip when scroll passes 30px (same as FlipCard2)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ x: 0 }}
      animate={{ x: 10, y: 100 }}
      transition={{ duration: 1 }}
    >
      {/* Perspective container */}
      <div className="group [perspective:1000px]">
        {/* Flip container */}
        <div
          className={`relative w-56 h-56 rounded-full border-4 border-amber-50 shadow-lg
            transition-transform duration-700 [transform-style:preserve-3d]
            ${isSticky ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
            group-hover:[transform:rotateY(180deg)]`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-white rounded-full overflow-hidden flex justify-center items-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/aitechnology.png"
              alt="AI Technology"
              fill
              className="object-cover rounded-full"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-blue-500 border-4 border-white text-white rounded-full flex flex-col justify-center items-center px-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="font-bold text-lg text-center mb-2">
              AI Technology
            </h2>
            <p className="text-sm text-center leading-snug">
              Empower your business with next-gen automation and smart insights.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
