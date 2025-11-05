"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 handle form submit and call backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      // ✅ Success
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Send Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewRequest = () => {
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl transition-all">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Request a <span className="text-indigo-600">FREE Proposal</span> Now!
            </h1>

            {/* Error message */}
            {error && (
              <div className="mb-4 text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First and Last Name *" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Work Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <Input label="Website *" name="website" value={formData.website} onChange={handleChange} required />
                <Input label="Company *" name="company" value={formData.company} onChange={handleChange} required />
                <Input label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(000) 000-0000" required />
                <Select
                  label="Project Budget *"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  options={[
                    "Under $5,000",
                    "$5,000 - $10,000",
                    "$10,000 - $20,000",
                    "$20,000+",
                  ]}
                />
              </div>

              <Textarea
                label="Comments or Questions"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                } text-white font-semibold py-3 rounded-xl transition`}
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">🎉 Thank You!</h2>
            <p className="text-gray-600">
              We’ve received your request and will get back to you shortly.
            </p>
            <button
              onClick={handleNewRequest}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 🔹 Reusable Input Component
function Input({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>
  );
}

// 🔹 Reusable Select Component
function Select({ label, name, value, onChange, required, options }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-xl p-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      >
        <option value="">Select project budget</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// 🔹 Reusable Textarea Component
function Textarea({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="3"
        className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
    </div>
  );
}
