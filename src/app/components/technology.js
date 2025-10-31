import React from 'react'
import Image from 'next/image'
const Technology = () => {
    return (
        <div className='w-full  relative pt-10 flex flex-col  md:flex-row space-x-20 pb-30'>
            {/* right */}
            < div className='w-full relative flex flex-col  bg-gray-200 pl-10 p-10 rounded-sm'>
                <Image src="/dot.png" alt='pic' width={150} height={100} className='absolute top-0 left-120 animate-bounce '></Image>
                <Image src="/abc.jpg" alt='pic' width={500} height={600} className='  rounded-2xl  ' style={{ boxShadow: "10px 10px 20px 10px rgba(0, 0, 0, 0.2)" }}></Image>

            </div>
            {/* left */}
            <div className='flex flex-col  justify-center space-y-9 w-full  md:pr-30'>
                <div className='text-blue-300 font-semibold'>Innovation That Leads</div>
                <h4 className='text-black font-bold text-3xl md:text-4xl'>
                   Passion, Purpose, and Progress</h4>
                <p>
At TechWiz, we believe in four core pillars that drive our growth and define our work. These values are ingrained in everything we do, guiding us to use technology for building smarter, 
stronger, and future-ready digital solutions.
                </p>
            </div>



        </div>
    )
}

export default Technology