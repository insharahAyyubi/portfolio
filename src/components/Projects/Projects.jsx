import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Projects_Section from "./Projects_Section";
import { personal_projects, collab_projects } from "../../assets/data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between mx-8 px-2 mt-4 md:mx-28">
          <motion.div
            className="basis-2/3 order-1 md:-order-none mt-10 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img className="max-h-[450px]" src="./project_bg.png" alt="" />
          </motion.div>
          <motion.div
            className="flex flex-col items-center basis-1/2 justify-start"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h1 className="text-5xl mt-8 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 text-transparent bg-clip-text font-light mb-12">
              Projects
            </h1>
            <p className="text-2xl font-light text-slate-500 text-center">
              I have developed projects in diverse tech stacks, showcasing
              versatility and expertise in various programming languages and
              frameworks.
            </p>
          </motion.div>
        </div>
        <Projects_Section title="Personal Projects" projects={personal_projects} />;
        <Projects_Section title="Collaborative Projects" projects={collab_projects} />;
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
