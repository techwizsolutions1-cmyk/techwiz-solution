"use client";

import React from "react";
import Digitalmarketingleft from "./digitalmarketingleft";
import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";

const Digitalmarketingright = () => {
  return (
    <div
      id="digital"
      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 
      px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 lg:mb-20"
    >
      {/* ✅ Left Section */}
      <div className="w-full lg:w-1/2">
        <Digitalmarketingleft />
      </div>

      {/* ✅ Right Section */}
      <div
        className="
        w-full lg:w-1/2 grid 
        grid-cols-1 sm:grid-cols-2 
        gap-4 sm:gap-5 md:gap-6 
        lg:mt-0
        place-items-center
        "
      >
        {/* 🔹 Card Component */}
        {[
          {
            icon: <FaBullhorn className="text-blue-600 text-3xl sm:text-4xl mb-2" />,
            title: "Social Media Ads",
            desc: "Run high-performing campaigns on Facebook, Instagram, and LinkedIn to expand reach and conversions.",
          },
          {
            icon: <FaEnvelopeOpenText className="text-blue-600 text-3xl sm:text-4xl mb-2" />,
            title: "Email Marketing",
            desc: "Engage, nurture, and retain customers with automated, personalized email campaigns that build loyalty.",
          },
          {
            icon: <FaUserFriends className="text-blue-600 text-3xl sm:text-4xl mb-2" />,
            title: "Influencer Marketing",
            desc: "Collaborate with trusted voices in your industry to boost credibility, awareness, and conversions authentically.",
          },
          {
            icon: <FaVideo className="text-blue-600 text-3xl sm:text-4xl mb-2" />,
            title: "Video Marketing",
            desc: "Create powerful video content optimized for SEO and engagement to capture attention and drive results.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center text-center border border-gray-200 rounded-xl 
            p-3 sm:p-4 md:p-5 lg:p-6 lg:pb-8
            w-full max-w-[320px] h-auto 
            hover:shadow-xl hover:bg-blue-100/60 transition-all duration-300"
          >
            {card.icon}
            <h4 className="font-bold text-base sm:text-lg md:text-xl text-blue-800 mb-1 sm:mb-2">
              {card.title}
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digitalmarketingright;
