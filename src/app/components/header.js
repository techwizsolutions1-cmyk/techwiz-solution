"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Image from "next/image";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "SEO SERVICES", id: "#seo" },
    { name: "WEB SOLUTIONS", id: "#web" },
    { name: "DIGITAL MARKETING", id: "#digital" },
    { name: "OTHER EXPERTISE", id: "#service" },
  ];

  return (
    <div className="flex flex-col w-full" id="header">
      {/* 🔹 Top Header (Desktop only) */}
      <div className="hidden lg:flex text-gray-500 pt-3 flex-wrap justify-between items-center px-10 font-medium relative">
        {/* Left: Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneVolume />
          <Link href="tel:+92214661100">+92214661100</Link>
        </div>

        {/* Middle: Links */}
        <div className="flex gap-10 relative">
          <div className="relative group">
            <Link href="#">HOME</Link>
            <div className="hidden w-10 h-[2px] bg-blue-300 absolute -bottom-1 group-hover:block transition-all"></div>
          </div>
          <div className="relative group">
            <Link href="#about">ABOUT US</Link>
            <div className="hidden w-12 h-[2px] bg-blue-400 absolute -bottom-1 group-hover:block transition-all"></div>
          </div>
          <div className="relative group">
            <Link href="#contact">CONTACT US</Link>
            <div className="hidden w-16 h-[2px] bg-blue-400 absolute -bottom-1 group-hover:block transition-all"></div>
          </div>
        </div>

        {/* Right: Email + Socials */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CgMail />
            <Link href="mailto:info@techwizpk.com">info@techwizpk.com</Link>
          </div>
          <div className="flex gap-3 text-xl pl-2">
            <Link href="https://www.facebook.com/techwizpk">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/tech-wizpk-b442b8361/">
              <FaLinkedinIn />
            </Link>
            <Link href="https://wa.me/+923156540669">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-full h-px bg-gray-300 mt-4"></div>

      {/* 🔹 Desktop Navbar (only lg and up) */}
      <motion.div
        initial={false}
        animate={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? 0 : "auto",
          backgroundColor: isSticky ? "rgba(255,255,255,0.95)" : "transparent",
          boxShadow: isSticky
            ? "0 2px 8px rgba(0,0,0,0.1)"
            : "0 0 0 transparent",
        }}
        transition={{ duration: 0.4 }}
        className="hidden lg:flex justify-between items-center font-semibold text-gray-800 z-50 w-full px-8 py-5"
      >
        {/* Logo */}
        <Image src="/logo.jpg" width={150} height={100} alt="logo" />

        {/* Navbar Links */}
        <div className="flex gap-6">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              <Link
                href={item.id}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
              <div className="hidden group-hover:block h-[2px] w-full bg-blue-400 absolute -bottom-1"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/forms/free-quotes"
          className="px-6 py-3 border-2 border-blue-900 rounded-2xl hover:bg-blue-900 hover:text-white text-blue-900 transition-transform hover:scale-105"
        >
          Get a Quote Now →
        </Link>
      </motion.div>

      {/* 🔹 Mobile + Tablet Navbar (visible up to lg) */}
      <div
        className={`flex justify-between items-center px-4 py-3 ${
          isSticky
            ? "fixed top-0 bg-white shadow-md w-full z-50"
            : "relative bg-white"
        } lg:hidden`}
      >
        <Image src="/logo.jpg" width={130} height={80} alt="logo" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile/Tablet Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-white shadow-lg flex flex-col space-y-3 py-4 px-5 text-gray-800 font-medium"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.id}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600 py-1"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/forms/free-quotes"
            className="mt-3 border-2 border-blue-900 text-blue-900 rounded-2xl py-2 text-center hover:bg-blue-900 hover:text-white"
          >
            Get a Quote Now →
          </Link>

          <div className="flex space-x-4 text-xl pt-3 border-t border-gray-200">
            <Link href="https://www.facebook.com/techwizpk">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
