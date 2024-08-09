import React from "react";
import { aboutData } from "../../assets/data";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="overflow-x-hidden mb-10">
      <h1 className="text-5xl text-center font-light mb-8">What I do</h1>
      <div className="container mx-auto p-6 space-y-16">
        {aboutData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center space-y-6 md:space-y-0 md:space-x-16`}
          >
            {/* Left Div (Image) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-[320px] rounded-xl"
              />
            </motion.div>

            {/* Right Div (Text) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-1/2 text-center md:text-left space-y-4"
            >
              <h2 className="text-5xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 inline-block font-light text-transparent bg-clip-text my-4">
                {item.title}
              </h2>
              <ul className="space-y-2 max-w-lg mx-auto md:mx-0">
                {item.points.map((point, i) => (
                  <li key={i} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
