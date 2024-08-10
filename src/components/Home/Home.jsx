import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "../Footer";
import About from "./About";
import BackToTop from "../BackToTop";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
