"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does TechWizPK offer?",
      answer: "We offer web development, SEO, digital marketing, and branding solutions.",
    },
    {
      question: "How can SEO help my business grow?",
      answer: "SEO improves your website visibility on search engines, bringing in organic traffic and more leads.",
    },
    {
      question: "Do you provide custom website design and development?",
      answer: "Yes! We build fully custom, responsive websites tailored to your brand and goals.",
    },
    {
      question: "Can you manage digital marketing for small businesses?",
      answer: "Absolutely. We create marketing strategies that fit your budget and goals.",
    },
    {
      question: "How long does it take to see results from your services?",
      answer: "Typically within 2–3 months, depending on the service and your industry.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Freequently <span className="text-blue-600">Asked</span> Question
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`cursor-pointer transition-all duration-300 rounded-lg border border-gray-200 ${
              activeIndex === index
                ? "bg-[#00D8FF] text-white"
                : "hover:bg-[#00D8FF] hover:text-white bg-[#f9f9f9]"
            }`}
          >
            <div className="flex justify-between items-center p-5 text-lg font-semibold">
              {faq.question}
              <span className="text-2xl">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-5 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
