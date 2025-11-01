import React from 'react'
import Image from 'next/image'
const Success = () => {
    return (
        <div className='w-full  relative pt-10 flex flex-col md:flex-row space-x-20 pb-30' >
            {/* right */}
            < div className='w-full relative flex flex-col  bg-gray-200 pl-10 p-10 rounded-sm'>
                <Image src="/dot.png" alt='pic' width={150} height={100} className='absolute top-0 left-120 animate-bounce '></Image>
                <Image src="/cde.png" alt='pic' width={500} height={600} className='  rounded-2xl   ' style={{ boxShadow: "10px 10px 20px 10px rgba(0, 0, 0, 0.2)" }}></Image>

            </div>
            {/* left */}
            <div className='flex flex-col  justify-center space-y-9 w-full  md:pr-30'>
                <div className='text-blue-300 font-semibold'>Fuel Your Curiosity</div>
                <h4 className='text-black font-bold  text-3xl md:text-4xl'>
                    Your Goals, Our Commitment</h4>
                <p>
                    Your success is our priority. We align every 
                    strategy with your goals, delivering tailored digital
                     marketing solutions built on trust, transparency, and measurable 
                    results to ensure lasting partnerships and business growth.

                </p>
            </div>



        </div>
    )
}

export default Success