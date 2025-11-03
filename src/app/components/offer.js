"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Headphones, Hammer } from "lucide-react"; // imported icons

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
      icon: <Briefcase size={50} className="text-blue-300" />,
      title: "Consulting",
      desc: "TechWizPK provides expert consulting in web development, SEO, and digital strategy, helping brands strengthen their online visibility, reach the right audience, and unlock consistent business growth with data-backed decisions and actionable insights.",
    },
    {
      id: 2,
      icon: <Headphones size={50} className="text-blue-300" />,
      title: "Support",
      desc: "Our dedicated support team ensures your digital platforms stay secure, fast, and reliable. From troubleshooting and updates to proactive monitoring, TechWizPK delivers seamless assistance that keeps your business running without disruptions.",
    },
    {
      id: 3,
      icon: <Hammer size={50} className="text-blue-300" />,
      title: "Production",
      desc: "We craft high-impact digital production services, from custom websites and eCommerce platforms to content creation and ad campaigns. TechWizPK focuses on delivering quality outputs that engage audiences, build trust, and accelerate business success.",
    },
  ];

  return (
    <motion.div
      id="colr"
      className="flex flex-col md:flex-row mt-10 md:space-x-10 py-4 text-white bg-[#010024] pt-20 md:px-10 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* LEFT SECTION */}
      <motion.div
        className="flex flex-col items-center md:items-start space-y-6 md:w-1/2"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h4
          className="font-bold text-4xl md:text-5xl text-blue-300"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h4>

        <motion.div
          className="relative w-[320px] md:w-[550px] h-[400px] md:h-[475px] rounded-2xl overflow-hidden md:mt-5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/larki.jpg"
            alt="offer-image"
            fill
            className="object-fill rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="flex flex-col space-y-6 md:w-1/2 mt-10 md:mt-0 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((item, i) => (
          <motion.div
            key={item.id}
            className="border-2 border-white rounded-2xl px-3 py-3 md:p-4 hover:bg-blue-900/10 transition-transform"
            variants={cardVariants}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            custom={i}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-row items-center space-x-4 mb-2">
              <div>{item.icon}</div>
              <h4 className="text-blue-300 text-xl font-bold  hover:text-blue-900 transition-colors">
                {item.title}
              </h4>
            </div>
            <p className="text-sm md:text-normal text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Offer;
