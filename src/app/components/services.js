// Services Section (React + Tailwind CSS)
// Includes 5 full-width cards in a clean corporate style.

import React from "react";

import { Globe, Brain, Code, PenTool,  Mail, BarChart2,Repeat, FileText, Users, ArrowRight } from "lucide-react";

export default function Services() {
 const cards = [
  {
    id: "seo",
    title: "SEO Audit",
    icon: <BarChart2 className="w-10 h-10" />,
    desc: `Comprehensive SEO audits to identify opportunities, fix issues, and boost your website’s search performance.`,
    points: [
      "Technical SEO Analysis",
      "Site Speed & Performance",
      "Content & Keyword Audit",
      "Backlink Profile Analysis",
    ],
    link: "#seo-audit",
    button: "Explore More",
  },
  {
    id: "remarketing",
    title: "Remarketing",
    icon: <Repeat className="w-10 h-10" />,
    desc: `Target previous visitors and increase conversions with smart remarketing campaigns across platforms.`,
    points: [
      "Display & Social Remarketing",
      "Email Retargeting",
      "Dynamic Ads Setup",
      "Performance Tracking",
    ],
    link: "#remarketing",
  
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    icon: <FileText className="w-10 h-10" />,
    desc: `Create and distribute valuable content to attract, engage, and convert your target audience.`,
    points: [
      "Blog & Article Writing",
      "Video & Multimedia Content",
      "Content Strategy & Planning",
      "SEO-Optimized Copywriting",
    ],
    link: "#content-marketing",
    
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    icon: <Mail className="w-10 h-10" />,
    desc: `Engage your audience and boost conversions with personalized email campaigns and automation.`,
    points: [
      "Newsletter Campaigns",
      "Drip Email Automation",
      "Segmentation & Personalization",
      "Performance Tracking & Reporting",
    ],
    link: "#email-marketing",
  
  },
  {
    id: "ai",
    title: "AI Technology",
    icon: <Brain className="w-10 h-10" />,
    desc: `Cutting-edge AI services to automate workflows, optimize data insights, and enable smarter business operations.`,
    points: [
      "Machine Learning Models",
      "Chatbots & NLP",
      "Predictive Analytics",
      "Computer Vision",
    ],
    link: "#ai-technology",
   
  },
  {
    id: "guest-blogging",
    title: "Guest Blogging",
    icon: <Globe className="w-10 h-10" />,
    desc: `Expand your brand reach and build authority by contributing high-quality content to external blogs.`,
    points: [
      "Blogger Outreach",
      "Content Creation",
      "SEO Backlinks",
      "Traffic & Engagement Analysis",
    ],
    link: "#guest-blogging",
 
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    icon: <PenTool className="w-10 h-10" />,
    desc: `Craft intuitive and engaging interfaces for web and mobile platforms with a focus on usability and aesthetics.`,
    points: [
      "User Research & Prototyping",
      "UI Design Systems",
      "Responsive Design",
      "UX Testing & Audit",
    ],
    link: "#ui-ux-design",
    button: "Explore UI/UX Design",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: <Users className="w-10 h-10" />,
    desc: `Build your social presence, engage your audience, and drive traffic and conversions across social channels.`,
    points: [
      "Strategy & Planning",
      "Content Creation & Scheduling",
      "Community Management",
      "Ads & Paid Campaigns",
    ],
    link: "#social-media-marketing",
    button: "Explore Social Media Marketing",
  },
   {
    id: "technical-seo",
    title: "Technical SEO",
    icon: <BarChart2 className="w-10 h-10" />,
    desc: `Optimizing website structure, speed, and crawlability to improve search engine visibility and drive organic growth.`,
    points: [
      "Page Speed",
      "Core Web Vital",
        "Schema Markup",
           "Crowd Ability Optimization"
    ],
    link: "#social-media-marketing",
    button: "Explore Social Media Marketing",
  },
];

  return (
    <section id="service" className="w-full bg-gradient-to-br mt-10  md:mt-20
     from-sky-50 to-white  md:py-16 px-6 md:px-12 rounded-3xl  md:pt-0
     shadow-sm border border-slate-200 lg:space-y-16">
<div className="flex flex-col  space-y-3 ">
   
</div>
      {cards.map((card) => (
        <div
          key={card.id}
          id={card.id}
          className="max-w-6xl mx-auto flex flex-col md:flex-row  gap-0 items-center justify-between  lg:gap-10"
        >
          {/* Left Content */}
          <div className="flex items-start  gap-5 flex-1">
            <div className=" p-2 lg:p-4 bg-blue-100 rounded-2xl text-blue-600 pb-2">
              {card.icon}
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                {card.desc}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-slate-700">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>

           
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex-shrink-0 text-center md:text-right">
            {/* <a
              href={card.link}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-base shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {card.button}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </div>
      ))}
    </section>
  );
}
