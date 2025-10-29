"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function FlipCard({pic}) {
  return (
    <motion.div className="flex justify-center items-center min-h-screen"
    initial={{
    }}
    animate={{x:100}}
    transition={{duration:1,
      
    }}
    
    
    >
      <div className="group [perspective:1000px] w-55 h-55 rounded-full border-4 border-amber-50">
        <div
          className="relative w-full h-full transition-transform duration-700
          [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-white shadow-lg rounded-full flex
            justify-center items-center backface-hidden"
          >
            <Image
              src="/ai.png"
              alt="pic"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-blue-500 text-white rounded-full flex
            flex-col justify-center items-center [transform:rotateY(180deg)] backface-hidden"
          >
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="px-4 text-center text-sm">
              Passionate about building modern, responsive websites using React
              and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
