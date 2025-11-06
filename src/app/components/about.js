"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, UserCircle } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:space-x-16 px-4 sm:px-6 md:px-10 pt-10
    md:pt-20 items-center lg:items-start">
      {/* ✅ Left Section (Image) */}
      <div className="relative w-full sm:w-[90%] md:w-[480px] h-[40vh] sm:h-[50vh] md:h-[70vh] mb-8 lg:mb-0 rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/about.avif"
          alt="TechWiz team working"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* ✅ Right Section (Text) */}
      <div className="flex flex-col w-full lg:w-[520px] space-y-4 text-center lg:text-left lg:justify-center lg:pt-5">
        {/* Animated Heading */}
        <motion.div
          className="font-bold text-blue-600 text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Company
        </motion.div>

        {/* Title */}
        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-800">
          We Design{" "}
          <span className="text-blue-600">Digital Solutions</span> That Are
          Simple, Affordable,
        </h4>

        {/* Text Content */}
        <div className="flex  flex-col sm:flex-row sm:space-x-6 space-y-3 lg:justify-start lg:items-start
        sm:space-y-0 items-center sm:items-start">
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-[600px] ">
            At <span className="font-semibold">TechWizPK</span>, we deliver
            reliable IT solutions that keep your business running seamlessly.
            Our expert team ensures your digital presence is fast, secure, and
            efficient — empowering your brand to thrive in today’s tech-driven
            world.
          </p>
        </div>

        {/* ✅ Feature Cards (Stack on mobile, row on tablet/laptop) */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-10 pt-6">
          {/* Card 1 */}
          <div className="flex items-center space-x-3 bg-blue-50 rounded-xl px-5 py-3 w-full sm:w-auto hover:shadow-md transition">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Settings className="text-blue-900 stroke-[1.5]" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black leading-tight">
              Tailored <br /> Solutions
            </h3>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-3 bg-blue-50 rounded-xl px-5 py-3 w-full sm:w-auto hover:shadow-md transition">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <UserCircle className="text-blue-900 stroke-[1.5]" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black leading-tight">
              Client-Centric <br /> Approach
            </h3>
          </div>
        </div>

        {/* ✅ Button */}
      
      </div>
    </div>
  );
}
