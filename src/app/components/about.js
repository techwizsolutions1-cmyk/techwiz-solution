import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div  id="about" className="flex flex-col md:flex-row md:space-x-20 px-5 md:px-10 pt-10 md:pt-16 mt-10 items-center md:items-start">
      {/* ✅ Left Section (Image) */}
      <div className="relative w-full md:w-[500px] h-[45vh] md:h-[74vh] mb-8 md:mb-0">
        <Image
          src="/about.avif"
          alt="pic"
          className="rounded-2xl object-cover"
          fill
        />
      </div>

      {/* ✅ Right Section (Text) */}
      <div className="flex flex-col w-full md:w-[500px] md:space-y-10 space-y-5 text-center md:text-left">
        {/* Animated Heading */}
        <motion.div
          className="font-bold text-blue-600 text-lg md:text-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Company
        </motion.div>

        {/* Title */}
        <h4 className="font-bold text-2xl md:text-4xl leading-snug text-gray-800">
          We Design{" "}
          <span className="text-blue-600">Digital Solutions</span> That Are
          Simple, Affordable,
        </h4>

        {/* Text Content */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
          <div className="hidden md:block w-3 h-36 bg-blue-500"></div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            At TechWizPK, we deliver reliable IT solutions that keep your
            business running seamlessly. Our expert team ensures your digital
            presence is fast, secure, and efficient — empowering your brand to
            thrive in today’s tech-driven world.
          </p>
        </div>

        {/* Button */}
        <button
          className="px-6 md:px-8 py-3 md:py-4 w-max font-bold border-2 border-blue-900 rounded-2xl text-blue-900 hover:bg-blue-900 cursor-pointer hover:text-white hover:scale-105 mx-auto md:mx-0 transition"
          id="btn"
        >
          Get a Quote Now →
        </button>
      </div>
    </div>
  );
}
