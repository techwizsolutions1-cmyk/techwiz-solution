"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  const clients = [
    {
      name: "Hamza Ali",
      title: "E-Commerce Store Manager",
      image: "/hamzas.png",
      review:
        "The team at TechWizPK built us a stunning website that’s not only user-friendly but also optimized for search engines. Our sales have increased, and customers often compliment the design.",
    },
    {
      name: "Ayesha Khan",
      title: "Business Owner",
      image: "/ayesha.png",
      review:
        "TechWizPK transformed our online presence. Their SEO strategies helped us rank higher on Google within just a few months. We’ve seen a huge boost in website traffic and customer inquiries. Truly reliable!",
    },
    {
      name: "Ali Raza",
      title: "Startup Founder",
      image: "/ali.png",
      review:
        "Their UI/UX design work exceeded our expectations. The site looks modern, loads fast, and perfectly reflects our brand. Excellent experience working with the TechWizPK team!",
    },
  ];

  return (
    <section className="bg-[#07092B] text-white py-20">
      <div className="text-center mb-12 px-8 lg:p-3">
        <h2 className="lg:text-4xl  text-2xl font-bold">
          What Says Our <span className="text-blue-600">Happy</span> Clients About Us
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto px-6 pb-14 "
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-gray-700 rounded-xl shadow-lg p-8 relative 
            flex flex-col gap-5 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full border-4 border-blue-850 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {client.name}
                  </h3>
                  <p className="text-blue-900 font-medium">{client.title}</p>
                </div>
                <FaQuoteRight className="text-blue-800 text-5xl absolute right-6 top-6 opacity-20" />
              </div>

              <p className="text-gray-600 text-base leading-relaxed mt-4">
                {client.review}
              </p>
            </div>
            <div className="mt-10 pt-6 "></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
