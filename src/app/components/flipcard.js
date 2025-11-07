
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function FlipCard() {
//   const [isSticky, setIsSticky] = useState(false);

//   // Flip when scroll passes 30px
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div
//       className="flex justify-center items-center min-h-screen"
//       initial={{ x: -100 }}
//       animate={{ x: 100 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Perspective wrapper */}
//       <div className="group [perspective:1200px]">
//         <div
//           className={`relative w-56 h-56 rounded-full transition-transform duration-700 
//           [transform-style:preserve-3d] border-4 border-white shadow-lg
//           ${isSticky ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}
//           group-hover:[transform:rotateY(180deg)]`}
//           style={{
//             transformStyle: "preserve-3d",
//             willChange: "transform",
//           }}
//         >
//           {/* Front Side */}
//           <div
//             className="absolute inset-0 bg-white rounded-full overflow-hidden flex justify-center items-center"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <Image
//               src="/websolution.png"
//               alt="web solution"
//               fill
//               className="object-cover rounded-full"
//             />
//           </div>

//           {/* Back Side */}
//           <div
//             className="absolute inset-0 bg-blue-500 text-white rounded-full flex flex-col justify-center items-center px-4"
//             style={{
//               transform: "rotateY(180deg)",
//               backfaceVisibility: "hidden",
//             }}
//           >
//             <h2 className="font-bold text-xl mb-2 text-center">
//                    Web Solution
//             </h2>
//             <p className="text-sm text-center leading-snug">
//                Build intelligent, secure, and seamless websites users truly trust.
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 1 }}
    >
      {/* 3D Perspective Wrapper */}
      <div className="group [perspective:1200px]">
        <div
          className={`relative w-56 h-56 rounded-full border-4 border-white shadow-lg transition-transform duration-700 [transform-style:preserve-3d]
            ${isSticky ? "rotate-y-180" : ""}
            group-hover:rotate-y-180`}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-white rounded-full overflow-hidden flex justify-center items-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/websolution.png"
              alt="Web Solution"
              fill
              className="object-cover rounded-full"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-blue-500 text-white rounded-full flex flex-col justify-center items-center px-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="font-bold text-xl mb-2 text-center">
              Web Solution
            </h2>
            <p className="text-sm text-center leading-snug">
              Build intelligent, secure, and seamless websites users truly trust.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
