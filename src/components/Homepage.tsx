import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Services from "./Services";
import Process from "./Process";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
