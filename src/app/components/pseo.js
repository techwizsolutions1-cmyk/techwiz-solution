"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const slidesData = [
  {
    title: "Two Guys Home Furnishing Dubai",
    img: "/Graph.png",
    tableContent: (
      <>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">1</td>
          <td>sintered stone flooring</td>
          <td>
            <Link href="https://i.imgur.com/lSY8kcm.png" className="text-blue-600 hover:underline">
              1
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/floors/sintered-stone/" className="text-blue-500 hover:underline">
              twoguys.ae/floors/sintered-stone
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">2</td>
          <td>linen curtains dubai</td>
          <td>
            <Link href="https://i.imgur.com/KGWiNyR.png" className="text-blue-600 hover:underline">
              9
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/curtains/linen-curtains/" className="text-blue-500 hover:underline">
              twoguys.ae/curtains/linen-curtains
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">3</td>
          <td>Home Furnishing</td>
          <td>
            <Link href="https://i.imgur.com/U9shyx0.png" className="text-blue-600 hover:underline">
              11
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/" className="text-blue-500 hover:underline">
              twoguys.ae
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">4</td>
          <td>shutters in Dubai</td>
          <td>
            <Link href="https://i.imgur.com/jlHLRTG.png" className="text-blue-600 hover:underline">
              15
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/shutters/" className="text-blue-500 hover:underline">
              twoguys.ae/shutters
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">5</td>
          <td>LVT flooring UAE</td>
          <td>
            <Link href="https://i.imgur.com/OHxbZeg.png" className="text-blue-600 hover:underline">
              28
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/floors/lvt/" className="text-blue-500 hover:underline">
              twoguys.ae/floors/lvt
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">6</td>
          <td>blackout curtains dubai</td>
          <td>
            <Link href="https://i.imgur.com/7NfGVdP.png" className="text-blue-600 hover:underline">
              29
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/curtains/blackout-curtains/" className="text-blue-500 hover:underline">
              twoguys.ae/curtains/blackout-curtains
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">7</td>
          <td>Window Curtains Dubai</td>
          <td>
            <Link href="https://www.twoguys.ae/curtains/" className="text-blue-600 hover:underline">
              30
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/curtains/" className="text-blue-500 hover:underline">
              twoguys.ae/curtains
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">8</td>
          <td>blinds in dubai</td>
          <td>
            <Link href="https://i.imgur.com/DCjFJTz.png" className="text-blue-600 hover:underline">
              33
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/blinds/" className="text-blue-500 hover:underline">
              twoguys.ae/blinds
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">9</td>
          <td>SPC flooring dubai</td>
          <td>
            <Link href="https://i.imgur.com/o97DbQq.png" className="text-blue-600 hover:underline">
              35
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/floors/spc/" className="text-blue-500 hover:underline">
              twoguys.ae/floors/spc
            </Link>
          </td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td className="py-2">10</td>
          <td>wall decor dubai</td>
          <td>
            <Link href="https://i.imgur.com/JGhNT7f.png" className="text-blue-600 hover:underline">
              35
            </Link>
          </td>
          <td>
            <Link href="https://www.twoguys.ae/furniture/bedroom/" className="text-blue-500 hover:underline">
              twoguys.ae/furniture/bedroom
            </Link>
          </td>
        </tr>
      </>
    ),
  },
  {
    title: "Blinds and Curtains Dubai",
    img: "/blindgraph.png",
    tableContent: (
      <>
        <tr className="hover:bg-blue-50 transition">
          <td>1</td>
          <td>dubai curtains and blinds</td>
          <td><Link href="https://i.imgur.com/4lIsfVU.png">2</Link></td>
          <td><Link href="https://blindsandcurtains.ae/ ">https://blindsandcurtains.ae/ </Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>2</td>
          <td>motorised curtains</td>
          <td><Link href="https://i.imgur.com/V6rRZiZ.png">2</Link></td>
          <td><Link href="https://blindsandcurtains.ae/curtains/motorised-curtains/ ">https://blindsandcurtains.ae/curtains/motorised-curtains/ </Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>3</td>
          <td>dubai blinds</td>
          <td><Link href="https://i.imgur.com/RVglZtR.png">2</Link></td>
          <td><Link href="https://blindsandcurtains.ae/ ">https://blindsandcurtains.ae/ </Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>4</td>
          <td>conservatory blinds</td>
          <td><Link href="https://i.imgur.com/U4WS8xk.png">2</Link></td>
          <td><Link href="https://blindsandcurtains.ae/blinds/conservatory-blinds/">https://blindsandcurtains.ae/blinds/conservatory-blinds/</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>5</td>
          <td>full height shutters</td>
          <td><Link href="https://i.imgur.com/B8sgbJJ.png">3</Link></td>
          <td><Link href="https://blindsandcurtains.ae/shutters-range/full-heig/">https://blindsandcurtains.ae/shutters-range/full-heig/</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>6</td>
          <td>office curtains</td>
          <td><Link href="https://i.imgur.com/jIs6iFO.png">3</Link></td>
          <td><Link href="https://blindsandcurtains.ae/curtains/office-window-curtains/">https://blindsandcurtains.ae/curtains/office-window-curtains/</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>7</td>
          <td>duplex blinds dubai</td>
          <td><Link href="https://i.imgur.com/T4FG9Wc.png">3</Link></td>
          <td><Link href="https://blindsandcurtains.ae/blinds/duplex-blinds/ ">https://blindsandcurtains.ae/blinds/duplex-blinds/ </Link></td>
        </tr>
         <tr className="hover:bg-blue-50 transition">
          <td>8</td>
          <td>outdoor blinds dubai</td>
          <td><Link href="https://blindsandcurtains.ae/balcony-blinds-and-curtains/">4</Link></td>
          <td><Link href="https://blindsandcurtains.ae/balcony-blinds-and-curtains/">https://blindsandcurtains.ae/balcony-blinds-and-curtains/</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>9</td>
          <td>motorised curtains</td>
          <td><Link href="https://i.imgur.com/QygFSUg.png">6</Link></td>
          <td><Link href="https://blindsandcurtains.ae/curtains/motorised-curtains/">https://blindsandcurtains.ae/curtains/motorised-curtains/</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>10</td>
          <td>blackout roller blinds</td>
          <td><Link href="https://i.imgur.com/D33DhGo.png">6</Link></td>
          <td><Link href="https://blindsandcurtains.ae/blinds/roller-blinds/blackout-roller-blinds/ ">https://blindsandcurtains.ae/blinds/roller-blinds/blackout-roller-blinds/ </Link></td>
        </tr>
      </>
    ),
  },
  {
    title: "Interior Films Dubai",
    img: "/interiorgraph.png",
    tableContent: (
      <>
        <tr className="hover:bg-blue-50 transition">
          <td>1</td>
          <td>wall decor dubai</td>
          <td><Link href="#">3</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>2</td>
          <td>interior films Dubai</td>
          <td><Link href="#">6</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>3</td>
          <td>glass films Dubai</td>
          <td><Link href="#">8</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>4</td>
          <td>frosted films UAE</td>
          <td><Link href="#">12</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>5</td>
          <td>decorative films Dubai</td>
          <td><Link href="#">15</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>6</td>
          <td>window films UAE</td>
          <td><Link href="#">18</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>7</td>
          <td>privacy films Dubai</td>
          <td><Link href="#">21</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>8</td>
          <td>vinyl films UAE</td>
          <td><Link href="#">24</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>9</td>
          <td>interior wall films</td>
          <td><Link href="#">28</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
        <tr className="hover:bg-blue-50 transition">
          <td>10</td>
          <td>office decorative films</td>
          <td><Link href="#">30</Link></td>
          <td><Link href="#">#</Link></td>
        </tr>
      </>
    ),
  },
];

const Pseo = () => {
  const [activeTable, setActiveTable] = useState(null); // store active index
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col items-center space-y-6 px-4">
        <h2 className="text-3xl font-bold text-center">Our Projects</h2>

        <div className="relative w-full overflow-hidden">
          {/* Left Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white px-3 py-2 rounded-full shadow hover:bg-blue-600"
            onClick={scrollLeft}
          >
            &#8592;
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth scrollbar-hide">
            {slidesData.map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-full px-2">
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <Image src={slide.img} alt={slide.title} fill className="object-contain" />
                  </div>
                  <h3 className="mt-2 font-semibold text-gray-800 text-center">{slide.title}</h3>
                  <button
                    onClick={() => setActiveTable(i)}
                    className="mt-2 text-blue-600 font-semibold underline hover:text-blue-800"
                  >
                    View result
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white px-3 py-2 rounded-full shadow hover:bg-blue-600"
            onClick={scrollRight}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Table Section */}
      {activeTable !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 border-4 border-black z-50 w-full bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl p-6 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4">
            <h4 className="text-2xl font-bold text-gray-800">{slidesData[activeTable].title}</h4>
            <button className="mt-3 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-200 shadow-md">
              Get Free Consultation
            </button>
            <div className="text-2xl cursor-pointer" onClick={() => setActiveTable(null)}>
              x
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-center rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Keywords</th>
                  <th className="px-4 py-3">
                    Rank Position
                    <br />
                    <span className="text-sm text-red-700 font-normal">
                      👉👉(click on position to see live result)
                    </span>
                  </th>
                  <th className="px-4 py-3">Ranked Links in SERPs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">{slidesData[activeTable].tableContent}</tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Pseo;
