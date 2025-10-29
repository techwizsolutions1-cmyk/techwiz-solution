"use client";
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { abc } from "@/app/components/contextprovider";

const Serviceleft = () => {
  const { val, setVal } = useContext(abc); // use camelCase for consistency

  return (
    <div className='relative h-[75vh] bg-[url("/service.png")] group'>
      {/* Front */}
      <div className='pt-20 flex flex-col gap-y-7 pl-5 pr-5'>
        <div className='font-semibold text-xl text-blue-300'>Our Services</div>
        <h4 className='font-bold text-4xl'>
          Custom Web Solutions That Drive{' '}
          <span className='text-blue-900'>Results</span>
        </h4>
      </div>

      {/* Back (hover) */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-start gap-6 p-5 bg-blue-200 transition-all duration-300'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className='font-semibold text-xl text-blue-600'>Our Services</div>
        <h4 className='font-bold text-4xl'>
          Custom Web Solutions That Drive{' '}
          <span className='text-blue-900'>Results</span>
        </h4>
        <motion.p>
          Professional, responsive, and scalable websites tailored to your
          business needs, built for performance, security, and user experience,
          powered by modern technologies to ensure growth and digital success.
        </motion.p>

        <div className='flex flex-row gap-2'>
          <input
            type='text'
            placeholder='Enter your Website'
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className='border-2 border-blue-600 py-3 px-2 text-center flex-1'
            required
          />
          <Link href={`abc/forms`}className='font-bold bg-blue-900 text-white px-3 py-3 flex items-center'>
            Send me a proposal
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Serviceleft;
