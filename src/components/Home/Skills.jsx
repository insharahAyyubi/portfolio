import React from "react";
import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import {
  FaNodeJs,
  FaNpm,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { BiLogoKubernetes } from "react-icons/bi";

// Common animation settings
const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [8, -8],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Common styles for skill icons
const iconStyles = "text-5xl";
const iconWrapperStyles = "rounded-2xl border-2 border-neutral-400 p-2";
const imgClass = "h-[48px] w-[48px]";

const Skills = () => {
  return (
    <div className="pb-24">
      <h1 className="text-5xl text-center mb-20 font-light">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-8 md:mx-56">
        {/* Skills Icons */}
        <motion.div
          variants={iconVar(3.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img className={imgClass} src="./icons/java.svg" alt="Java" />
        </motion.div>

        <motion.div
          variants={iconVar(2.7)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img className={imgClass} src="./icons/python.png" alt="Python" />
        </motion.div>

        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaHtml5 className={`${iconStyles} text-orange-600`} />
        </motion.div>

        <motion.div
          variants={iconVar(5.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaCss3 className={`${iconStyles} text-blue-600`} />
        </motion.div>

        <motion.div
          variants={iconVar(3.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <IoLogoJavascript
            className={`${iconStyles} bg-black text-yellow-400`}
          />
        </motion.div>

        <motion.div
          variants={iconVar(1.7)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <RiReactjsFill className={`${iconStyles} text-cyan-400`} />
        </motion.div>

        <motion.div
          variants={iconVar(1.7)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img
            className={imgClass}
            src="./icons/tailwind-css.svg"
            alt="tailwind"
          />
        </motion.div>

        <motion.div
          variants={iconVar(3.7)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <SiMongodb className={`${iconStyles} text-green-800`} />
        </motion.div>

        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaNodeJs className={`${iconStyles} text-green-500`} />
        </motion.div>

        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaNpm className={`${iconStyles} text-red-700`} />
        </motion.div>

        <motion.div
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <GrMysql className={`${iconStyles} text-blue-500`} />
        </motion.div>

        <motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img
            className={imgClass}
            src="./icons/g_cloud.png"
            alt="Google Cloud"
          />
        </motion.div>

        <motion.div
          variants={iconVar(6.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img className={imgClass} src="./icons/pandas.png" alt="Pandas" />
        </motion.div>

        <motion.div
          variants={iconVar(4.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <img className={imgClass} src="./icons/Figma.png" alt="Figma" />
        </motion.div>

        <motion.div
          variants={iconVar(2.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaDocker className={`${iconStyles} text-blue-500`} />
        </motion.div>

        <motion.div
          variants={iconVar(2.2)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <IoLogoFirebase className={`${iconStyles} text-yellow-500`} />
        </motion.div>

        <motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <BiLogoKubernetes className={`${iconStyles} text-blue-700`} />
        </motion.div>

        <motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className={iconWrapperStyles}
        >
          <FaGitAlt className={`${iconStyles} text-red-500`} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
