"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full relative mt-10 bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4 md:px-20 lg:px-32 overflow-hidden"
    >
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
          We’re here to help you grow your business. Reach out for any inquiries
          or collaborations.
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#2563EB" }}
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 rounded-xl p-4 focus:outline-none transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className={`font-bold py-4 rounded-xl text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <p className="text-center text-gray-700 font-medium">{status}</p>
            )}
          </form>
        </motion.div>

        {/* Right Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-between gap-9 lg:pb-9"
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
                <Link
                  href="tel:+9223114661100"
                  className="text-blue-600 hover:underline"
                >
                  +92 231 1466100
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <Link
                  href="mailto:info@techwizpk.com"
                  className="text-blue-600 hover:underline"
                >
                  info@techwizpk.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d83025.91402397878!2d74.09512048961231!3d31.381287103236232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOpposite%20Tower%20One%2C%20D%20Block%2C%20Near%20Bowl%20Chowk%2C%20New%20Lahore%20City%20Phase%202%2C%20Zip%20Code%2053720%2C%20Canal%20Road%20Lahore!5e1!3m2!1sen!2spl!4v1761896168270!5m2!1sen!2spl"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Social Media */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
