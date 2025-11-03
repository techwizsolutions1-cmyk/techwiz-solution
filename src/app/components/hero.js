"use client";
import React from "react";
import FlipCard from "./flipcard";
import FlipCard2 from "./flipcard2";
import FlipCard3 from "./flipcard3";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[url('/hero.png')] bg-cover bg-center w-full h-[100vh] relative mt-1">
      <div
        className="flex flex-col md:flex-row pt-10 w-full justify-between md:pt-20 md:pl-20 px-5 md:pr-10"
      >
        {/* ✅ Left Side */}
        <div className="flex flex-col space-y-4 md:space-y-8 md:w-1/2 text-center md:text-left">
          <h4 className="font-semibold text-blue-300 text-lg md:text-xl">
            Welcome to Techwiz Solutions
          </h4>

          <h1
            className="font-bold text-xl md:text-3xl  text-white leading-snug"
          >
          Full-Stack Digital Marketing for B2B, B2C, and SAAS Growth
          </h1>

          <p className="text-white text-sm md:text-base leading-relaxed">
         Level up your growth with custom web development, performance SEO, and full-funnel digital marketing. We design fast, responsive websites, improve search visibility and organic traffic with technical/on-page SEO, and run data-driven campaigns that attract qualified leads and lift revenue. 
         Partner with TechWizPK to turn a stronger online presence into measurable results.
          </p>

          <button
            className="px-6 md:px-10 py-3 md:py-4 bg-white font-bold border-2 w-max border-blue-400 rounded-2xl text-blue-900 hover:bg-blue-900 cursor-pointer hover:text-white mx-auto md:mx-0"
            id="btn"
          >
          <Link href="https://wa.me/+923156540669">  Book a Strategy Now →</Link>
          </button>
        </div>

        {/* ✅ Right Side */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
          {/* Desktop FlipCards - positioned absolutely */}
          {/* 2 */}
           <div className="  hidden md:block md:absolute  md:-top-2 md:right-50  ">
            <FlipCard3 pic="/hero.png" />
          </div>
          <div className="hidden md:block absolute  left-50">
            <FlipCard2 pic="/hero.png" />
          </div>
          
          <div className="hidden md:block  absolute bottom-22 right-80">
            <FlipCard pic="/hero.png" />
          </div>
         

          {/* ✅ Mobile FlipCards - stacked vertically */}
          
        </div>
      </div>
    </div>
  );
}
