import React from 'react'
import Image from 'next/image'
const Technology = () => {
    return (
        <div className='w-full  relative pt-10 flex flex-col  md:flex-row space-x-20 '>
            {/* right */}
            < div className='w-full relative flex flex-col  bg-gray-200 pl-10 p-10 rounded-sm'>
                <Image src="/dot.png" alt='pic' width={150} height={100} className='absolute top-0 left-120 animate-bounce '></Image>
                <Image src="/abc.jpg" alt='pic' width={500} height={600} className='  rounded-2xl  ' style={{ boxShadow: "10px 10px 20px 10px rgba(0, 0, 0, 0.2)" }}></Image>

            </div>
            {/* left */}
            <div className='flex flex-col  justify-center md:space-y-9 space-y-4 w-full  md:pr-30'>
                <div className='text-blue-300 font-semibold'>Innovation That Leads</div>
                <h4 className='text-black font-bold text-3xl md:text-4xl'>
                   Smart Technology, Real Results</h4>
                <p>
Leveraging cutting-edge tools, AI insights, and automation, we transform marketing challenges into opportunities. Our tech-driven approach ensures smarter decisions, faster results, and sustainable growth that delivers real competitive advantage.
                </p>
            </div>



        </div>
    )
}

export default Technology