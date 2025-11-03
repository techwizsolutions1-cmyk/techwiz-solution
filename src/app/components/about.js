"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, UserCircle } from "lucide-react";

export default function About() {
  return (
    <div
     
      className="flex flex-col md:flex-row md:space-x-16 px-5 md:px-10 pt-10 md:pt-16  items-center md:items-start"
    >
      {/* ✅ Left Section (Image) */}
      <div className="relative w-full md:w-[480px] h-[45vh] md:h-[74vh] mb-8 md:mb-0">
        <Image
          src="/about.avif"
          alt="TechWiz team working"
          className="rounded-2xl object-cover"
          fill
          priority
        />
      </div>

      {/* ✅ Right Section (Text) */}
      <div className="flex flex-col w-full md:w-[520px] space-y-4 text-center md:text-left">
        {/* Animated Heading */}
        <motion.div
          className="font-bold text-blue-600 text-lg md:text-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Company
        </motion.div>

        {/* Title */}
        <h4 className="font-bold text-2xl md:text-4xl leading-snug text-gray-800">
          We Design{" "}
          <span className="text-blue-600">Digital Solutions</span> That Are
          Simple, Affordable,
        </h4>

        {/* Text Content */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
          <div className="hidden md:block w-1 bg-blue-500"></div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            At <span className="font-semibold">TechWizPK</span>, we deliver
            reliable IT solutions that keep your business running seamlessly.
            Our expert team ensures your digital presence is fast, secure, and
            efficient — empowering your brand to thrive in today’s
            tech-driven world.
          </p>
        </div>

        {/* ✅ Feature Cards - Always in One Row */}
        <div className="flex flex-row  justify-center md:justify-start items-center gap-6 md:gap-10 pt-4 flex-wrap">
          {/* Card 1 */}
          <div className=" pl-10 pr-4 flex items-center space-x-3.5 bg-blue-50 rounded-xl px-4 py-3 hover:shadow-md transition">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Settings className="text-blue-900 stroke-[1.5]" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-black leading-tight">
              Tailored <br /> Solutions
            </h3>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-3.5 bg-blue-50 rounded-xl px-4 py-3 hover:shadow-md transition">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <UserCircle className="text-blue-900 stroke-[1.5]" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-black leading-tight">
              Client-Centric <br /> Approach
            </h3>
          </div>
        </div>

        {/* ✅ Button */}
        <Link href="/free-quates" className="flex justify-center md:justify-start">
          <button
            className="mt-6 px-6 md:px-8 py-3 md:py-4 font-bold border-2 border-blue-900 rounded-2xl text-blue-900 hover:bg-blue-900 cursor-pointer hover:text-white hover:scale-105 transition"
            id="btn"
          >
            Get a Quote Now →
          </button>
        </Link>
      </div>
    </div>
  );
}
