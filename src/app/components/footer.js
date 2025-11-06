"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#07092B] text-white overflow-hidden">
      {/* --- Top CTA Section --- */}
      <div className="relative bg-gradient-to-r from-[#0B0D3B] via-[#0C0E4A] to-[#0B0D3B] 
      px-8 md:px-16 py-10">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-3 text-center md:text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Looking for the Best IT Business Solutions?
            </h2>
            <p className="text-gray-300">
              As web and digital experts, we help you grow your online presence
              with powerful, smart, and scalable solutions.
            </p>
          </div>

          <button className="px-8 py-3 bg-white text-black font-semibold
          md:w-[50%]lg:w-full rounded-2xl shadow-md hover:bg-black hover:text-white transition-all duration-300">
  Book a Strategy Call
</button>

        </div>

        {/* Light Gradient Border Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00D8FF] to-transparent"></div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="flex flex-col lg:flex-row justify-between px-8 md:px-16 py-16 gap-12">
        {/* Left Section */}
        <div className="lg:w-1/3 space-y-5">
          <div className="flex items-center gap-3">
            {/* <img
              src="/logo.png"
              alt="TechWiz Logo"
              className="w-14 h-14 object-contain"
            /> */}
            <div>
              <h3 className="text-2xl font-semibold">TECHWIZ</h3>
              <p className="text-sm text-[#00D8FF] tracking-wider">
                SMART DIGITAL SOLUTIONS
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            We’re passionate about tackling challenges and delivering innovative
            ideas that redefine the digital space.
          </p>

          <div className="flex gap-4 text-[#00D8FF] text-xl mt-4">
            <a
              href="#"
              className="p-2 bg-[#0B0D3B] rounded-full hover:bg-[#00D8FF] hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-[#0B0D3B] rounded-full hover:bg-[#00D8FF] hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-[#0B0D3B] rounded-full hover:bg-[#00D8FF] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold mb-3 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-[#00D8FF]"></span>
          </h3>
          <ul className="space-y-3 text-gray-400 mt-6">
            {["SEO Services", "Web Solutions", "Digital Marketing", "UI/UX Design", "AI Technology"].map((service) => (
              <li
                key={service}
                className="hover:text-[#00D8FF] transition duration-300 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Official Info Section */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold mb-3 relative inline-block">
            Official Info
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-[#00D8FF]"></span>
          </h3>

          <ul className="space-y-4 text-gray-400 mt-6">
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-[#00D8FF] mt-1 text-lg lg:text-2xl" />
              Opposite Tower One, D Block, Near Bowl Chowk, New Lahore City
              Phase 2, Zip Code 53720, Canal Road Lahore
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00D8FF]" /> +92 321 4661100
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-[#00D8FF]" /> info@techwizpk.com
            </li>
          </ul>
        </div>
      </div>

      {/* --- Google Map Section --- */}
     
      {/* --- Bottom Bar --- */}
      <div className="text-center py-5 text-gray-400 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} <span className="text-[#00D8FF]">TechWiz</span>. All rights reserved.
      </div>
    </footer>
  );
}
