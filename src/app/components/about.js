import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, UserCircle } from "lucide-react";

export default function About() {
  return (
    <div  id="about" className="flex flex-col md:flex-row 
    md:space-x-20 px-5 md:px-10 pt-10 md:pt-16 mt-10 items-center
     md:items-start">
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
      <div className="flex flex-col w-full md:w-[500px]  space-y-4 text-center md:text-left">
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
          <div className="hidden md:block w-3 h-30 bg-blue-500"></div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            At TechWizPK, we deliver reliable IT solutions that keep your
            business running seamlessly. Our expert team ensures your digital
            presence is fast, secure, and efficient — empowering your brand to
            thrive in today’s tech-driven world.
          </p>
        </div>
{/*  */}
<div className="flex flex-wrap justify-center items-center gap-x-16 ">
   <div className="flex items-center space-x-3.5 ">
        <div className="p-4 bg-blue-50 rounded-full">
          <Settings size={28} className="text-blue-900 stroke-[1.5]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            Tailored <br /> Solutions
          </h3>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-4">
        <div className="p-4 bg-blue-50 rounded-full">
          <UserCircle size={28} className="text-blue-900 stroke-[1.5]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            Client-Centric <br /> Approach
          </h3>
        </div>
      </div>
</div>
        {/* Button */}
      <Link href='/free-quates'>  <button
          className="px-6 md:mt-4 md:ml-8 md:px-8 py-3 md:py-4 w-max font-bold border-2 border-blue-900 rounded-2xl text-blue-900 hover:bg-blue-900 cursor-pointer hover:text-white hover:scale-105 mx-auto md:mx-0 transition"
          id="btn"
        >
          Get a Quote Now →
        </button></Link>
      </div>
    </div>
  );
}
