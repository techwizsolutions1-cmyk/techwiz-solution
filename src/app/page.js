"use client"
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
 

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      <Hero />
    
      <About/>
   
        <Industries/>
  <Serviceright/>
<Offer/>
<Seo/>
<Portfolio/>

<Services/>

<Chooseus/>
<Digitalmarketingright/>
<ContactUs/>
<Testimonial/>
<Question/>

    </div>
  );
}
