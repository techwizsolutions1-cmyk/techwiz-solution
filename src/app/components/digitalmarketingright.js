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
      className="w-full flex pr-3 pl-3 flex-col
       md:flex-row md:pl-10 md:pr-10 pt-10 md:mt-10 items-center 
       md:items-start gap-8"
    >
      {/* ✅ Left Section */}
      <div className="w-full md:w-1/2">
        <Digitalmarketingleft />
      </div>

      {/* ✅ Right Section */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:mb-20">
        {/* 1️⃣ Social Media Ads */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaBullhorn className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Social Media Ads
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Run high-performing campaigns on platforms like Facebook, Instagram, and LinkedIn to expand reach and conversions.
          </p>
        </div>

        {/* 2️⃣ Email Marketing */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaEnvelopeOpenText className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Email Marketing
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Engage, nurture, and retain customers through automated, personalized campaigns that build long-term loyalty.
          </p>
        </div>

        {/* 3️⃣ Influencer Marketing */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaUserFriends className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Influencer Marketing
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Leverage trusted voices in your industry to boost credibility, visibility, and sales through authentic promotion.
          </p>
        </div>

        {/* 4️⃣ Video Marketing */}
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-md p-6 md:p-8 hover:shadow-2xl hover:bg-blue-200 transition-all">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaVideo className="text-blue-600 text-4xl" />
            <h4 className="font-bold text-lg md:text-xl text-blue-800">
              Video Marketing
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold mt-4 text-center">
            Create impactful video content optimized for SEO and engagement to capture attention and drive results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Digitalmarketingright;
