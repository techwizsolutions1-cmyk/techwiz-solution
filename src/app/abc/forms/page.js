"use client";
import React, { useState } from "react";
import { useContext } from "react";
import {abc} from "@/app/components/contextprovider"
export default function Page() {
  const {val,setval}=useContext(abc)
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
    budget: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(form);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Request a <span style={{ color: "red" }}>FREE Proposal</span> Now!
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "15px", marginTop: "20px" }}
      >
        {/* Name */}
        <div>
          <label htmlFor="name">First and Last Name *</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            className="border-2 border-black"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Work Email Address *</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
              className="border-2 border-black"
          />
        </div>

        {/* Website & Company */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="website">Website *</label>
            <br />
            <input
              id="website"
              name="website"
              type="text"
                className="border-2 border-black"
              
              onChange={handleChange}
             value={val}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="company">Company *</label>
            <br />
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
                className="border-2 border-black"

              style={{ width: "100%", padding: "8px" }}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">Phone Number *</label>
          <br />
          <input
            id="phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="(000) 000-0000"
            style={{ width: "100%", padding: "8px" }}
              className="border-2 border-black"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget">Project Budget *</label>
          <br />
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            
          >
            <option value="">Select project budget</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments">Comments or Questions</label>
          <br />
          <textarea
            id="comments"
            name="comments"
            placeholder="Looking to get more leads? Frustrated with your current results? Planning something new? Tell us something!"
            value={form.comments}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%", padding: "8px" }}
              className="border-2 border-black"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{
          
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
          className="bg-blue-900"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
