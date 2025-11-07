"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Seo from "./components/seo";
import Serviceright from "./components/serviceright";
import Industries from "./components/industries";
import Offer from "./components/offer";
import Chooseus from "./components/chooseus";
import Question from "./components/question";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Pseo from "./components/pseo";
import Pweb from "./components/pweb";
import ContactUs from "./components/contactus";
import Digitalmarketingright from "./components/digitalmarketingright";

import { BiArrowToTop } from "react-icons/bi";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import Script from "next/script"; // ✅ Use this instead of next/head

export default function Home() {
  console.log("Resend key exists:", !!process.env.RESEND_API_KEY);

  return (
    <>
      {/* ✅ Microsoft Clarity Script */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "u28i05mfst");
        `}
      </Script>

      <main>
        <div className="overflow-hidden relative">
          <Link href="#header">
            <div className="fixed bottom-0 md:bottom-10 md:left-10 rounded-2xl md:rounded-4xl md:text-2xl cursor-pointer text-2xl md:px-5 z-50 animate-bounce bg-blue-900 text-white px-2 py-2 md:pt-5 md:pb-5">
              <div>
                <BiArrowToTop />
              </div>
            </div>
          </Link>

          <Link href="https://wa.me/+923214661100">
            <div className="fixed bottom-0 right-0 lg:bottom-10 lg:right-10 text-white text-4xl lg:text-7xl z-50 p-0">
              <div className="text-white bg-green-400 rounded-2xl lg:rounded-4xl animate-bounce overflow-hidden shadow-lg">
                <BsWhatsapp />
              </div>
            </div>
          </Link>

          <Hero />
          <About />
          <Industries />
          <Serviceright />
          <Offer />
          <Seo />
          <Portfolio />
          <Services />
          <Chooseus />
          <Digitalmarketingright />
          <ContactUs />
          <Testimonial />
          <Question />
        </div>
      </main>
    </>
  );
}
