// import React from 'react'
// import Image from 'next/image'
// const Technology = () => {
//     return (
//         <div className='w-full  relative pt-10 flex flex-col  md:flex-row space-x-20 '>
//             {/* right */}
//             < div className='w-full relative flex flex-col  bg-gray-200 pl-10 p-10 rounded-sm'>
//                 <Image src="/dot.png" alt='pic' width={150} height={100} className='absolute top-0 left-100 -z-50 animate-bounce '></Image>
//                 <Image src="/abc.jpg" alt='pic' width={500} height={600} className='  rounded-2xl  ' style={{ boxShadow: "10px 10px 20px 10px rgba(0, 0, 0, 0.2)" }}></Image>

//             </div>
//             {/* left */}
//             <div className='flex flex-col  justify-center md:space-y-9 space-y-4 w-full  md:pr-30'>
//                 <div className='text-blue-300 font-semibold'>Innovation That Leads</div>
//                 <h4 className='text-black font-bold text-3xl md:text-4xl'>
//                    Smart Technology, Real Results</h4>
//                 <p>
// Leveraging cutting-edge tools, AI insights, and automation, we transform marketing challenges into opportunities. Our tech-driven approach ensures smarter decisions, faster results, and sustainable growth that delivers real competitive advantage.
//                 </p>
//             </div>



//         </div>
//     )
// }

// export default Technology
"use client";

import React from "react";
import Image from "next/image";

const Technology = () => {
  return (
    <div
      className="w-full flex flex-col-reverse lg:flex-row items-center md:items-start 
      gap-10 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-20  md:py-16"
    >
      {/* ✅ LEFT SECTION (Text) */}
      <div className="w-full md:w-full  lg:w-1/2 flex flex-col justify-center text-center md:text-center space-y-4 sm:space-y-6">
        <div className="text-blue-400 font-semibold text-base sm:text-lg">
         Innovation That Leads
        </div>

        <h4 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl ">
          Smart Technology, Real Results
        </h4>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto md:mx-0">
       Leveraging cutting-edge tools, AI insights,
        and automation, we transform marketing challenges into opportunities. Our tech-driven approach ensures smarter decisions,
        faster results, and sustainable 
        growth that delivers real competitive advantage.
        </p>
      </div>

      {/* ✅ RIGHT SECTION (Image) */}
      <div className="w-full md:w-full lg:w-1/2 relative flex justify-center lg:justify-end">
        {/* Decorative Dot Image */}
        <Image
          src="/dot.png"
          alt="background dots"
          width={150}
          height={100}
          className="absolute top-0  md:left-0  lg:left-16 -z-10 animate-pulse opacity-70"
        />

        {/* Main Image */}
        <Image
          src="/cde.png"
          alt="Success Image"
          width={500}
          height={500}
          className="rounded-2xl shadow-xl object-cover"
          style={{
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </div>
  );
};

export default Technology;
