"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Headphones, Hammer } from "lucide-react";

const Offer = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      id: 1,
      icon: <Briefcase size={42} className="text-blue-300" />,
      title: "Consulting",
      desc: "TechWizPK provides expert consulting in web development, SEO, and digital strategy, helping brands strengthen their online visibility and unlock consistent business growth.",
    },
    {
      id: 2,
      icon: <Headphones size={42} className="text-blue-300" />,
      title: "Support",
      desc: "Our dedicated support team ensures your digital platforms stay secure, fast, and reliable with proactive monitoring and seamless technical assistance.",
    },
    {
      id: 3,
      icon: <Hammer size={42} className="text-blue-300" />,
      title: "Production",
      desc: "We craft high-impact digital products — from websites to campaigns — delivering quality outputs that engage audiences and accelerate success.",
    },
  ];

  return (
    <motion.div
      id="offer"
      className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-10 lg:mt-35  
      gap-15 md:gap-12 lg:gap-16 px-2 sm:px-6 md:px-10 lg:px-16 py-16 bg-[#010024] text-white overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ✅ LEFT SECTION */}
      <motion.div
        className="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-1/2"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h4
          className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-300 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h4>

        <motion.div
          className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[520px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden mt-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/larki.jpg"
            alt="offer-image"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* ✅ RIGHT SECTION */}
      <motion.div
        className="flex flex-col space-y-5 w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((item, i) => (
          <motion.div
            key={item.id}
            className="border border-white/30 rounded-2xl px-4 sm:px-6 py-5 sm:py-6 
            hover:bg-blue-900/10 transition-transform duration-300 backdrop-blur-sm"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center space-x-4 mb-2">
              <div>{item.icon}</div>
              <h4 className="text-blue-300 text-lg sm:text-xl font-semibold hover:text-blue-500 transition-colors">
                {item.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Offer;
