// "use client";
// import React, { useContext, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { abc } from "@/app/components/contextprovider";

// const Digitalmarketingleft = () => {
//   const { val, setVal } = useContext(abc);
//   const [show, setShow] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // ✅ Detect screen size dynamically
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className="relative h-[80vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] 
//       bg-[url('/service.png')] bg-cover bg-center rounded-xl overflow-hidden group cursor-pointer"
//       onClick={() => isMobile && setShow(!show)}
//     >
//       {/* ✅ Front Side */}
//       <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center md:items-start px-5 sm:px-8 md:px-10 text-white text-center md:text-left">
//         <div className="font-semibold text-base sm:text-lg md:text-xl text-blue-300">
//           Our Services
//         </div>
//         <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mt-2 max-w-xl">
//           Strengthen Your Brand With Proven Digital Marketing
//           <span className="text-blue-900 ml-2 block md:inline">Growth</span>
//         </h4>
//       </div>

//       {/* ✅ Back Side */}
//       <motion.div
//   onClick={(e) => e.stopPropagation()} // ✅ stops closing when typing or clicking input
//   className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start 
//   gap-0 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 bg-blue-200 text-gray-900 text-center md:text-left 
//   transition-all duration-300 z-10
//   ${
//     isMobile
//       ? show
//         ? "flex"
//         : "hidden"
//       : "hidden group-hover:flex"
//   }`}
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.4 }}
// >
//         <div className="font-semibold text-base sm:text-lg md:text-xl text-blue-600">
//           Our Services
//         </div>
//         <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
//           Grow your Brand with Powerful{" "}
//           <span className="text-blue-900">Digital Strategies</span>
//         </h4>

//         <motion.p
//           className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl text-gray-700"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Strengthen your brand with proven digital marketing strategies designed
//           to deliver measurable impact. From advanced SEO and content marketing to
//           social media management and paid advertising, we create tailored
//           solutions that amplify your visibility and connect you with the right
//           audience. Our data-driven approach ensures every campaign is optimized
//           for maximum reach, engagement, and conversions.
//         </motion.p>

//         {/* ✅ Input + Button Row */}
//         <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Enter your Website"
//             value={val}
//             onChange={(e) => setVal(e.target.value)}
//             className="border-2 border-blue-600 py-2 sm:py-3 px-3 text-sm sm:text-base rounded-md flex-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <Link
//             href={`/abc/forms`}
//             className="font-bold bg-blue-900 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-blue-800 transition-all duration-300"
//           >
//             Send me a proposal
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Digitalmarketingleft;

"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { abc } from "@/app/components/contextprovider";

const Digitalmarketingleft = () => {
  const { val, setVal } = useContext(abc);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-[70vh] sm:h-[80vh] md:h-[96vh] bg-[url('/service.png')] bg-cover bg-center group rounded-xl overflow-hidden cursor-pointer"
      onClick={() => isMobile && setShow(!show)}
    >
      {/* 🔹 Front Side */}
      <div className="  flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-7
       px-4 sm:px-6 md:px-10 text-center md:text-center justify-center items-center 
       md:items-center h-full bg-black/30 md:bg-transparent">
        <div className="font-semibold text-blue-300 text-base sm:text-lg md:text-2xl md:text-center">
          Our Services
        </div>

        <h4 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white md:text-black leading-snug">
           Strengthen Your Brand With Proven Digital {""}
          <span className="text-blue-900">Growth</span>
        </h4>
      </div>

      {/* 🔹 Back Side */}
      <motion.div
  onClick={(e) => e.stopPropagation()} // 🧠 prevent clicks from closing the card
  className={`absolute top-0 left-0 w-full h-full flex-col justify-center 
    items-center md:items-start gap-0 sm:gap-2 md:gap-6 p-4 sm:p-6 md:p-8
     bg-blue-100/90 backdrop-blur-sm rounded-xl transition-all duration-300 
    ${
      isMobile
        ? show
          ? "flex"
          : "hidden"
        : "hidden group-hover:flex"
    }`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
        <div className="font-semibold text-blue-600 text-lg sm:text-xl">
          Our Services
        </div>
 <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
         Grow your Brand with Powerful{" "}
        <span className="text-blue-900">Digital Strategies</span>
      </h4>
       <motion.p
         className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl text-gray-700"
        initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
        >
          Strengthen your brand with proven digital marketing strategies designed
           to deliver measurable impact. From advanced SEO and content marketing to
          social media management and paid advertising, we create tailored
          solutions that amplify your visibility and connect you with the right
           audience. Our data-driven approach ensures every campaign is optimized
        for maximum reach, engagement, and conversions.
      </motion.p>

        {/* 🔹 Input + Button (Responsive Layout) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mt-3">
          <input
            type="text"
            placeholder="Enter your Website"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="border-2 border-blue-600 rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-center sm:text-left flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
          <Link
            href="/abc/forms"
            className="font-bold bg-blue-900 text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-center hover:bg-blue-800 transition-all duration-200"
          >
            Send me a proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Digitalmarketingleft;
