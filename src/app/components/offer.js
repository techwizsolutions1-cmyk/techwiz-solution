"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Offer = () => {
  // Animation variants for right-side cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger effect
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      id="colr"
      className="flex flex-col md:flex-row mt-10 md:space-x-10 py-4 text-white bg-[#010024] pt-20  md:px-20 overflow-hidden"
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
          className="relative w-[320px] md:w-[550px] h-[400px] md:h-[475px] rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/larki.png"
            alt="offer-image"
            fill
            className=" object-fill  rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="flex flex-col space-y-6 md:w-1/2 mt-10 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            id: 1,
            img: "/agreement.png",
            title: "Consulting",
            desc: "TechWiz offers expert consulting in SEO, web solutions, and digital marketing, helping businesses build stronger online visibility and achieve sustainable growth.",
          },
          {
            id: 2,
            img: "/agrement1.png",
            title: "Support",
            desc: "TechWizPK provides reliable support services to keep your digital presence running smoothly, ensuring quick solutions, expert guidance, and uninterrupted growth.",
          },
          {
            id: 3,
            img: "/agreement.png",
            title: "Production",
            desc: "TechWiz delivers innovative digital production solutions, from web development to marketing campaigns, ensuring high-quality results that drive growth and impact.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.id}
            className="border-2 border-white rounded-2xl p-4 hover:bg-blue-900/10 transition-transform"
            variants={cardVariants}
            initial={{x:-200, }}
            animate={{x:0,
            
            }}
            transition={{duration:2}}
            custom={i}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-row items-center space-x-4 mb-2">
              <Image
                src={item.img}
                alt="icon"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <h4 className="text-blue-300 text-xl font-bold hover:text-blue-900 transition-colors">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Offer;
