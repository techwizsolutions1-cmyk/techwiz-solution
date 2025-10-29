"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const [active, setActive] = useState(1);

  const services = [
    { name: "Healthcare & Medical Services", id: 1 },
    { name: "Technology & Startups", id: 2 },
    { name: "Education & E-Learning", id: 3 },
    { name: "Corporate & Professional Services", id: 4 },
  ];

  const card = [
    {
      id: 1,
      name: "Healthcare & Medical Services",
      path: "/it1.jpg",
      details:
        "In the healthcare industry, trust and reliability are everything. We create secure, responsive, and patient-friendly websites supported by strong SEO and digital marketing strategies. From hospitals to clinics, we help providers improve their online presence, build stronger patient relationships, and make healthcare services more visible and accessible.",
    },
    {
      id: 2,
      name: "Technology & Startups",
      path: "/it2.jpeg",
      details:
        "For tech companies and fast-growing startups, we provide innovative, scalable solutions that blend modern web development, UI/UX design, and AI-powered strategies. We focus on helping new businesses establish credibility, attract investors and customers, and position themselves as leaders in the digital world. With TechWizPK, startups can grow smarter and faster.",
    },
    {
      id: 3,
      name: "Education & E-Learning",
      path: "/it3.jpeg",
      details:
        "We empower schools, colleges, and online learning platforms with creative and technology-driven solutions. From designing interactive websites to implementing AI tools for better learning experiences, we make education more engaging, accessible, and impactful. Our SEO and marketing strategies also ensure institutions connect with the right students worldwide.",
    },
    {
      id: 4,
      name: "Corporate & Professional Services",
      path: "/it4.webp",
      details:
        "We design customized digital strategies for professional businesses and enterprises to strengthen branding, generate high-quality leads, and expand market reach. Through expert SEO, advanced web solutions, and result-driven marketing, we help companies establish authority, grow consistently, and achieve long-term success in highly competitive industries.",
    },
  ];

  return (
    <div className="w-full py-10">
      {/* ✅ Header Section */}
      <div className="pt-10 pb-8 flex flex-col items-center w-[90vw] md:w-[70vw] mx-auto space-y-3 text-center">
        <div className="font-bold text-lg md:text-xl text-blue-500">
          Industries We Serve
        </div>
        <h4 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Tailored <span className="text-blue-900">IT Solutions</span> Backed by
        </h4>
        <h4 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          <span className="text-blue-900">Expertise</span> Serving a Wide Range
          of Industries
        </h4>
      </div>

      {/* ✅ Main Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center px-4 md:px-10 mt-5">
        {/* Left List (Scrollable on mobile) */}
        <div className="flex md:flex-col flex-col gap-3 md:gap-y-4 overflow-x-auto md:overflow-visible w-full md:w-auto pb-3 md:pb-0">
          {services.map((e) => (
            <button
              key={e.id}
              onClick={() => setActive(e.id)}
              className={`min-w-[250px] md:min-w-[auto] p-3 rounded-lg font-semibold text-sm md:text-lg transition text-center whitespace-nowrap ${
                active === e.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              }`}
            >
              {e.name}
            </button>
          ))}
        </div>

        {/* ✅ Right Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl shadow-xl md:w-[70%] w-full bg-white border-2 border-blue-900 overflow-hidden"
        >
          {card
            .filter((c) => c.id === active)
            .map((e) => (
              <div
                key={e.id}
                className="bg-cover bg-center flex flex-col items-center justify-center p-6 md:p-10 text-gray-800"
                style={{ backgroundImage: `url(${e.path})` }}
              >
                <div className="bg-white/85 p-5 md:p-8 rounded-xl text-center space-y-3 md:space-y-5 max-w-3xl">
                  <h3 className="text-lg md:text-2xl font-bold">{e.name}</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {e.details}
                  </p>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
