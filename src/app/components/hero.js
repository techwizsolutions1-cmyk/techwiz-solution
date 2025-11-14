"use client";
import React from "react";
import FlipCard from "./flipcard";
import FlipCard2 from "./flipcard2";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative bg-[url('/hero.png')] 
        bg-cover bg-center bg-no-repeat
        w-full h-[90vh] lg:h-[100vh] 
        flex items-center justify-center
        overflow-hidden
      "
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      {/* Main Content */}
      <div
        className="
          relative z-10 
          flex flex-col lg:flex-row 
          items-center justify-between 
          w-full max-w-7xl mx-auto
          px-6 sm:px-10 xl:px-20 
          gap-16
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col text-center lg:text-left space-y-6 lg:w-1/2 animate-fadeIn">
          <h4 className="text-blue-300 font-semibold text-lg sm:text-xl tracking-wide">
            Welcome to Techwiz Solutions
          </h4>

          <h1
            className="
              text-white font-extrabold 
              text-3xl sm:text-4xl lg:text-5xl 
              leading-tight drop-shadow-md
            "
          >
            Full-Stack Digital Marketing  
            <span className="text-blue-400"> That Drives Growth</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Grow your business with high-performance websites, conversion-focused 
            SEO, and full-funnel digital marketing tailored for modern brands.
          </p>

          <Link href="https://wa.me/+923214661100">
            <button
              className="
                mt-4 px-8 py-3 
                bg-blue-600 hover:bg-blue-800 
                text-white font-semibold 
                rounded-xl shadow-xl
                transition-all duration-300
                hover:scale-105
              "
            >
              Book a Strategy Call →
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE — 2 CARD PREMIUM DESIGN */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center gap-10 pr-20">

          {/* Card 1 — Lifted Left */}
          <div className="w-44 xl:w-52 transform -translate-y-25 transition-all duration-500">
            <FlipCard pic="/hero.png" />
          </div>

          {/* Card 2 — Slightly Down Right */}
          <div className="w-44 xl:w-52 transform translate-y-6 hover:translate-y-2 transition-all duration-500">
            <FlipCard2 pic="/hero.png" />
          </div>

        </div>

      </div>
    </section>
  );
}
