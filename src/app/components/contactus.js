"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4 md:px-20 lg:px-32 overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-200 rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-blue-300 rounded-full opacity-30"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h4 className="text-blue-600 font-semibold text-lg">Get in Touch</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Contact Us
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          We’re here to help you grow your business. Reach out for any inquiries or collaborations.
        </p>
      </motion.div>

      {/* Form & Info */}
      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Left Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >
          <form className="flex flex-col gap-5">
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="email"
              placeholder="Your Email"
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="text"
              placeholder="Subject"
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              placeholder="Your Message"
              rows={5}
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-between gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-gray-700">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+92 231 1466100</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@techwizpk.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            {[
              { icon: <FaFacebookF />, color: "text-blue-600", link: "#" },
              { icon: <FaInstagram />, color: "text-pink-500", link: "#" },
              { icon: <FaLinkedinIn />, color: "text-blue-700", link: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`${social.color} text-3xl transition`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
