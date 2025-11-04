"use client";
import React, { useState, useContext } from "react";
import { abc } from "@/app/components/contextprovider";

export default function Page() {
  const { val } = useContext(abc);

  const [form, setForm] = useState({
    name: "",
    fullName: "",
    workEmail: "",
    company: "",
    phoneNumber: "",
    projectBudget: "",
    comments: "",
    subject: "New Contact Request",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: val }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Email sent successfully!");
        setForm({
          name: "",
          fullName: "",
          workEmail: "",
          company: "",
          phoneNumber: "",
          projectBudget: "",
          comments: "",
          subject: "New Contact Request",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Request a <span className="text-red-600">FREE Proposal</span> Now!
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="font-medium">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="workEmail" className="font-medium">
            Work Email Address *
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            value={form.workEmail}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Website & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="website" className="font-medium">
              Website *
            </label>
            <input
              id="website"
              name="website"
              type="text"
              value={val}
              readOnly
              className="w-full border-2 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>

          <div>
            <label htmlFor="company" className="font-medium">
              Company *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phoneNumber" className="font-medium">
            Phone Number *
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="(000) 000-0000"
            required
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Project Budget */}
        <div>
          <label htmlFor="projectBudget" className="font-medium">
            Project Budget *
          </label>
          <select
            id="projectBudget"
            name="projectBudget"
            value={form.projectBudget}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          >
            <option value="">Select project budget</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="font-medium">
            Comments or Questions
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={form.comments}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-800"
          }`}
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

        {status && (
          <p className="text-center mt-2 text-sm font-medium text-gray-700">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
