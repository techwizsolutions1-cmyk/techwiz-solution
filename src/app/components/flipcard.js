"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
export default function FlipCard({pic}) {
   const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 30) setIsSticky(true);
          else setIsSticky(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <motion.div className="flex justify-center items-center min-h-screen"
    initial={{
      x:0,
      y:20
    }}
    animate={{x:100}}
    transition={{duration:1,
      
    }}
    
    
    >
      <div className="group [perspective:1000px] w-55 h-55 rounded-full border-4 border-amber-50">
       <div
          className={`relative w-full h-full transition-transform duration-700
          [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isSticky ?"[transform:rotateY(180deg)] duration-200":"[transform:rotateY(0deg)]"} `}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-white shadow-lg rounded-full flex
            justify-center items-center backface-hidden"
          >
            <Image
              src="/websolution.png"
              alt="pic"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-blue-500 text-white rounded-full flex space-y-2
            flex-col justify-center items-center [transform:rotateY(180deg)] backface-hidden"
          >
            <h1 className="text-center font-bold text-xl">Web Solution</h1>
            <p className="px-4 text-center text-sm">
            Build intelligent, secure, and seamless websites users truly trust
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
