"use client";
import React from "react";
import FlipCard from "./flipcard";
import FlipCard2 from "./flipcard2";
import FlipCard3 from "./flipcard3";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[url('/hero.png')] bg-cover bg-center w-full h-screen relative mt-1">
      <div
        className="flex flex-col md:flex-row pt-10 w-full justify-between md:pt-20 md:pl-20 px-5 md:pr-10"
      >
        {/* ✅ Left Side */}
        <div className="flex flex-col space-y-4 md:space-y-8 md:w-1/2 text-center md:text-left">
          <h4 className="font-semibold text-blue-300 text-lg md:text-xl">
            Welcome to Techwiz Solutions
          </h4>

          <h4
            className="font-bold text-3xl md:text-5xl text-white leading-snug"
          >
            Power Growth with Proven Digital Services like
          </h4>

          <p className="text-white text-sm md:text-base leading-relaxed">
            Take your business to the next level with our expert Web Development,
            SEO, and Digital Marketing services. We help you build a strong online
            presence, attract the right audience, and scale smarter with strategies
            designed for growth and success. Partner with us today and turn your
            vision into reality…
          </p>

          <button
            className="px-6 md:px-10 py-3 md:py-4 bg-white font-bold border-2 w-max border-blue-400 rounded-2xl text-blue-900 hover:bg-blue-900 cursor-pointer hover:text-white mx-auto md:mx-0"
            id="btn"
          >
          <Link href="#contact">  Book a strategy now →</Link>
          </button>
        </div>

        {/* ✅ Right Side */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Desktop FlipCards - positioned absolutely */}
          <div className="hidden md:block absolute top-20 right-74">
            <FlipCard pic="/hero.png" />
          </div>
          <div className="hidden md:block absolute right-30">
            <FlipCard2 pic="/hero.png" />
          </div>
          <div className="hidden md:block absolute bottom-44 right-54">
            <FlipCard3 pic="/hero.png" />
          </div>

          {/* ✅ Mobile FlipCards - stacked vertically */}
          
        </div>
      </div>
    </div>
  );
}
