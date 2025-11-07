"use client";
import React from "react";
import FlipCard from "./flipcard";
import FlipCard2 from "./flipcard2";
import FlipCard3 from "./flipcard3";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[url('/hero.png')] bg-cover bg-center w-full 
    h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 🔹 Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col  lg:flex-row items-center
       justify-between w-full max-w-7xl px-6 sm:px-10 xl:px-20 gap-10">
        
        {/* ✅ Left Side (Text Content) */}
        <div className="flex flex-col text-center lg:text-left space-y-5 lg:w-1/2">
          <h4 className="text-blue-300 font-semibold text-lg sm:text-xl">
            Welcome to Techwiz Solutions
          </h4>

          <h1 className="text-white font-extrabold text-2xl sm:text-2xl lg:text-5xl leading-tight">
            Full-Stack Digital Marketing for B2B, B2C & SaaS Growth
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Level up your growth with custom web development, performance SEO, and full-funnel digital marketing. 
            We build fast, responsive websites and run data-driven campaigns that attract qualified leads and boost revenue. 
            Partner with TechWizPK to transform your online presence into measurable results.
          </p>

          <div>
            <Link href="https://wa.me/+923214661100">
              <button className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition duration-300">
                Book a Strategy Call →
              </button>
            </Link>
          </div>
        </div>

        {/* ✅ Right Side (Three FlipCards — visible only on laptops/desktops) */}
        <div className="hidden  lg:flex lg:flex-row justify-center items-center lg:w-1/2 gap-6 relative">
          <div className="w-48 xl:w-56 lg:absolute lg:-bottom-40 lg:left-0 ">
            <FlipCard pic="/hero.png" />
          </div>
          <div className="w-48 xl:w-56  lg:absolute lg:right-30">
            <FlipCard2 pic="/hero.png" />
          </div>
          <div className="w-48 xl:w-56 lg:absolute lg:right-60 ">
            <FlipCard3 pic="/hero.png" />
          </div>
        </div>

      </div>
    </section>
  );
}
