import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EduCard from "./EduCard";
import { education, certificates } from "../../assets/data";
import Certification from "./Certification";
import CertificateCard from "./CertificateCard";
import { motion } from "framer-motion";

const Education = () => {
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-full text-center flex flex-col items-center justify-center mx-8">
        <motion.h1
          className="text-5xl mt-8 mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 text-transparent bg-clip-text font-light"
          initial="hidden"
          animate="visible"
          variants={fadeVariant}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Education
        </motion.h1>
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="md:min-w-[800px]"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <EduCard data={edu} />
          </motion.div>
        ))}
      </div>
      <Certification />
      <div className="flex flex-row items-center justify-around mt-24 m-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8">
          {certificates.map((el, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <CertificateCard data={el} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
