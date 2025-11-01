"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services does TechWizPK offer?",
      answer: " We provide a full suite of digital marketing services including SEO, PPC, social media marketing, content creation, email marketing, and web development. Each service is customized to help businesses improve online visibility and generate measurable ROI.",
    },
    {
      question: "How can SEO help my business grow online?",
      answer: " SEO improves your website’s visibility on search engines like Google, driving more qualified traffic to your site. With the right SEO strategy, you can increase leads, boost sales, and build long-term brand authority.",
    },
    {
      question: "Do you offer custom website design and development?",
      answer: " Yes, TechWizPK specializes in custom web design and development tailored to your goals. We create responsive, SEO-friendly websites optimized for speed, user experience, and conversions, ensuring your site is both attractive and effective.",
    },
    {
      question: "Can you manage digital marketing for small businesses?",
      answer: " Absolutely. Our digital marketing services are scalable, making them ideal for startups and small businesses. We focus on cost-effective strategies like local SEO, targeted ads, and content marketing to help small businesses grow sustainably.",
    },
    {
      question: "How long does SEO take to deliver results?",
      answer: " SEO is a long-term strategy. Most websites begin seeing noticeable improvements in 3–6 months, depending on competition and goals. For faster wins, we combine SEO with PPC and content marketing for measurable short-term and long-term growth.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Freequently <span className="text-blue-900">Asked</span> Question
      </h2>

      <div className="space-y-4 p-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`cursor-pointer transition-all duration-300 rounded-lg border border-gray-200 ${
              activeIndex === index
                ? "bg-blue-900 text-white"
                : "hover:bg-blue-900 hover:text-white bg-[#f9f9f9]"
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
