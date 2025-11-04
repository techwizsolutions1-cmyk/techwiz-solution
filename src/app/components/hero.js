"use client";
import React from "react";
import FlipCard from "./flipcard";
import FlipCard2 from "./flipcard2";
import FlipCard3 from "./flipcard3";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[url('/hero.png')] bg-cover bg-center w-full h-[100vh] relative mt-1">
      <div className="flex flex-col lg:flex-row pt-10 w-full justify-between lg:pt-20 lg:pl-20 px-5 lg:pr-10">
        
        {/* ✅ Left Side */}
        <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 lg:w-1/2 text-center lg:text-left">
          <h4 className="font-semibold text-blue-300 text-lg md:text-xl">
            Welcome to Techwiz Solutions
          </h4>

          <h1 className="font-bold text-2xl md:text-3xl text-white leading-snug">
            Full-Stack Digital Marketing for B2B, B2C, and SAAS Growth
          </h1>

          <p className="text-white text-sm md:text-base leading-relaxed">
            Level up your growth with custom web development, performance SEO, and full-funnel digital marketing. 
            We design fast, responsive websites, improve search visibility and organic traffic with technical/on-page SEO, 
            and run data-driven campaigns that attract qualified leads and lift revenue. 
            Partner with TechWizPK to turn a stronger online presence into measurable results.
          </p>

          <Link href="https://wa.me/+923156540669" className="mx-auto lg:mx-0">
            <button
              className="px-6 md:px-10 py-3 md:py-4 bg-white font-bold border-2 border-blue-400 rounded-2xl text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
              id="btn"
            >
              Book a Strategy Now →
            </button>
          </Link>
        </div>

        {/* ✅ Right Side */}
        <div className="flex relative justify-center items-center mt-10 md:mt-16 lg:mt-0 lg:w-1/2">
    
        

          {/* 💻 Laptop/Desktop Layout (original absolute-position cards) */}
          <div className="hidden lg:block md:absolute md:-top-2 md:right-50">
            <FlipCard3 pic="/hero.png" />
          </div>
          <div className="hidden lg:block absolute left-50">
            <FlipCard2 pic="/hero.png" />
          </div>
          <div className="hidden lg:block absolute bottom-22 right-80">
            <FlipCard pic="/hero.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
