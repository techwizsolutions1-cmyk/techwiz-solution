"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pweb = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0 
                 px-5 md:px-20 justify-center items-center"
    >
      <Link
        href="https://zarwa.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/zarwastore.png"
          alt="Zarwa Store"
          width={300}
          height={150}
          className="w-60 sm:w-72 md:w-[300px] h-auto cursor-pointer"
        />
      </Link>

      <Link
        href="https://kazmifoundation.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/kazmi.png"
          alt="Kazmi Foundation"
          width={300}
          height={150}
          className="w-60 sm:w-72 md:w-[300px] h-auto cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Pweb;
