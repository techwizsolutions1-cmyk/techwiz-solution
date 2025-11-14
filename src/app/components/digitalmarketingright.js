"use client";

import React from "react";
import Digitalmarketingleft from "./digitalmarketingleft";
import { FaBullhorn, FaEnvelopeOpenText, FaUserFriends, FaVideo } from "react-icons/fa";

const Digitalmarketingright = () => {
  const cards = [
    {
      icon: <FaBullhorn className="text-3xl text-blue-700" />,
      title: "Social Media Ads",
      desc: "Run high-performing campaigns on Facebook, Instagram, and LinkedIn to expand reach and conversions.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-3xl text-blue-700" />,
      title: "Email Marketing",
      desc: "Engage and retain customers with automated, personalized email campaigns.",
    },
    {
      icon: <FaUserFriends className="text-3xl text-blue-700" />,
      title: "Influencer Marketing",
      desc: "Collaborate with trusted influencers to build credibility and increase conversions.",
    },
    {
      icon: <FaVideo className="text-3xl text-blue-700" />,
      title: "Video Marketing",
      desc: "Create powerful video content optimized for engagement and SEO.",
    },
  ];

  return (
    <div
      id="digital"
      className="
        w-full flex flex-col lg:flex-row 
        items-stretch gap-12 
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 
        lg:mb-20
      "
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-full self-stretch flex">
        <Digitalmarketingleft />
      </div>

      {/* Right Section */}
      <div className="
        w-full lg:w-1/2 
        grid grid-cols-1 sm:grid-cols-2 gap-6 
        h-full
      ">
        {cards.map((service, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-start text-center 
              border border-gray-200 rounded-2xl p-6 
              shadow-sm bg-white
              transition-all duration-300 
              hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50/70
              h-[38vh]
            "
          >
            {service.icon}

            <h4 className="text-blue-800 text-xl font-bold mt-2">
              {service.title}
            </h4>

            <p className="text-gray-600 text-sm mt-2  md:text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digitalmarketingright;
