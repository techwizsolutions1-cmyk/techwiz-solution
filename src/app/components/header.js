"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "SEO SERVICES", id: "#seo" },
    { name: "WEB SOLUTIONS", id: "#web" },
    {
      name: "DIGITAL MARKETING",
      id: "#digital",
      sub: [
        { name: "Content Marketing", id: "#content-marketing" },
        { name: "Social Media Marketing", id: "#social-media" },
        { name: "Email Marketing", id: "#email-marketing" },
      ],
    },
    { name: "UI/UX DESIGN", id: "#uiux" },
    { name: "AI TECHNOLOGY", id: "#ai" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 🔹 Top Header */}
      <div className="text-gray-500 pt-3 hidden md:flex flex-row pl-10 space-x-18 font-semibold relative">
        <div className="flex flex-row items-center gap-2">
          <FaPhoneVolume />
          <Link href="tel:+9223114661100">+92 231 1466100</Link>
        </div>

        <div className="h-px w-px bg-gray-400"></div>

        <div className="flex flex-row space-x-10">
          <div>
            <Link href="#">HOME</Link>
            <div className="w-12 h-1 bg-blue-300 absolute top-13"></div>
          </div>
          <div className="group">
            <Link href="#about">ABOUT US</Link>
            <div className="hidden w-15 h-1 group-hover:block transition-all duration-200 bg-blue-400 absolute top-13"></div>
          </div>
          <div className="group">
            <Link href="#contact">CONTACT US</Link>
            <div className="hidden w-17 h-1 group-hover:block transition-all duration-300 bg-blue-400 absolute top-13"></div>
          </div>
        </div>

        <div className="h-px w-px bg-gray-400"></div>

        <div className="flex flex-row space-x-2 justify-center items-center">
          <CgMail />
          <Link href="mailto:info@techwizpk.com">info@techwizpk.com</Link>
        </div>

        <div className="h-px w-px bg-gray-300"></div>

        <div className="flex flex-row space-x-2">
          <Link href="https://www.facebook.com/techwizpk">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/tech-wizpk-b442b8361/">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>

      {/* Line */}
      <div className="w-full h-px bg-gray-300 mt-5"></div>

      {/* 🔹 Desktop Navbar */}
      <motion.div
        initial={false}
        animate={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? 0 : "auto",
          backgroundColor: isSticky ? "rgba(255,255,255,0.95)" : "transparent",
          boxShadow: isSticky
            ? "0px 2px 10px rgba(0,0,0,0.1)"
            : "0px 0px 0px transparent",
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className={`hidden md:flex flex-row justify-between items-center font-bold text-gray-800 z-50 w-full px-10 py-4`}
      >
        {/* Logo */}
        <Image src="/logo.png" width={230} height={200} alt="logo" />

        {/* Navbar Links */}
        <div className="flex flex-row space-x-6 relative">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              <Link href={item.id} className="hover:text-blue-600">
                {item.name}
              </Link>

              {/* Underline */}
              <div className="hidden h-1 w-full bg-blue-400 group-hover:block absolute top-8 transition-all duration-200"></div>

              {/* Submenu */}
              {item.sub && (
                <div className=" text-center hidden group-hover:flex flex-col absolute top-10 -right-40 bg-white shadow-lg border border-gray-100 rounded-xl p-3 space-y-2 min-w-[400px] z-50">
                  {item.sub.map((subItem, i) => (
                    <Link
                      key={i}
                      href={subItem.id}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/abc/forms"
          className="pl-6 pr-6 py-3 border-2 border-blue-900 rounded-2xl hover:scale-105 hover:text-white text-blue-900 hover:bg-blue-900 transition"
        >
          Get a Quote Now →
        </Link>
      </motion.div>

      {/* 🔹 Mobile Navbar */}
      <div
        className={`md:hidden flex justify-between items-center px-4 py-3 ${
          isSticky
            ? "fixed top-0 bg-white shadow-md w-full z-50"
            : "relative bg-white"
        }`}
      >
        {/* Logo */}
        <Image src="/logo.png" width={150} height={100} alt="logo" />

        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white shadow-lg flex flex-col space-y-3 py-4 px-5 text-gray-800 font-semibold"
        >
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  item.sub ? setSubmenuOpen(!submenuOpen) : setMenuOpen(false)
                }
                className="w-full text-left hover:text-blue-600"
              >
                {item.name}
              </button>

              {/* Mobile Submenu */}
              {item.sub && submenuOpen && (
                <div className="pl-4 mt-2 space-y-1 text-gray-600">
                  {item.sub.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.id}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-blue-500"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/abc/forms"
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
            <Link href="https://www.linkedin.com/in/tech-wizpk-b442b8361/">
              <FaLinkedinIn />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
