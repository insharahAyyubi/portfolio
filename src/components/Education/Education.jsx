import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EduCard from "./EduCard";
import { education, certificates } from "../../assets/data";
import Certification from "./Certification";
import CertificateCard from "./CertificateCard";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-full text-center flex flex-col items-center justify-center mx-8">
        <h1 className="text-5xl mt-8 mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
          Education
        </h1>
        {education.map((edu, idx) => (
          <EduCard data={edu} key={idx} />
        ))}
      </div>
      <Certification />
      <div className="flex flex-row items-center justify-around mt-24 m-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8">
          {certificates.map((el, idx) => (
            <CertificateCard data={el} key={idx} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
