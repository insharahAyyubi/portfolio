import React, { useState } from "react";
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

const iconStyles = "text-5xl";
const iconWrapperStyles =
  "relative rounded-2xl border-2 border-neutral-400 p-2";
const imgClass = "h-[48px] w-[48px]";
const tooltipStyles =
  "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white bg-gray-700 rounded text-sm whitespace-nowrap";

const Skills = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (name) => {
    setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  const skills = [
    { src: "./icons/java.svg", alt: "Java", name: "Java", duration: 1.5 },
    { src: "./icons/python.png", alt: "Python", name: "Python", duration: 2.0 },
    {
      icon: <FaHtml5 className={`${iconStyles} text-orange-600`} />,
      name: "HTML5",
      duration: 2.5,
    },
    {
      icon: <FaCss3 className={`${iconStyles} text-blue-600`} />,
      name: "CSS3",
      duration: 3.0,
    },
    {
      icon: (
        <IoLogoJavascript
          className={`${iconStyles} bg-black text-yellow-400`}
        />
      ),
      name: "JavaScript",
      duration: 3.5,
    },
    {
      icon: <RiReactjsFill className={`${iconStyles} text-cyan-400`} />,
      name: "React",
      duration: 4.0,
    },
    {
      src: "./icons/tailwind-css.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      duration: 4.5,
    },
    {
      icon: <SiMongodb className={`${iconStyles} text-green-800`} />,
      name: "MongoDB",
      duration: 5.0,
    },
    {
      icon: <FaNodeJs className={`${iconStyles} text-green-500`} />,
      name: "Node.js",
      duration: 5.5,
    },
    {
      icon: <FaNpm className={`${iconStyles} text-red-700`} />,
      name: "NPM",
      duration: 6.0,
    },
    {
      icon: <GrMysql className={`${iconStyles} text-blue-500`} />,
      name: "MySQL",
      duration: 6.5,
    },
    {
      src: "./icons/g_cloud.png",
      alt: "Google Cloud",
      name: "Google Cloud",
      duration: 3.2,
    },
    { src: "./icons/pandas.png", alt: "Pandas", name: "Pandas", duration: 4.0 },
    { src: "./icons/Figma.png", alt: "Figma", name: "Figma", duration: 2.8 },
    {
      icon: <FaDocker className={`${iconStyles} text-blue-500`} />,
      name: "Docker",
      duration: 3.5,
    },
    {
      icon: <IoLogoFirebase className={`${iconStyles} text-yellow-500`} />,
      name: "Firebase",
      duration: 4.2,
    },
    {
      icon: <BiLogoKubernetes className={`${iconStyles} text-blue-700`} />,
      name: "Kubernetes",
      duration: 5.0,
    },
    {
      icon: <FaGitAlt className={`${iconStyles} text-red-500`} />,
      name: "Git",
      duration: 5.8,
    },
  ];

  return (
    <div className="pb-24">
      <h1 className="text-5xl text-center mb-20 font-light">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-8 md:mx-56">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={iconVar(item.duration)}
            initial="initial"
            animate="animate"
            className={iconWrapperStyles}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon ? (
              item.icon
            ) : (
              <img className={imgClass} src={item.src} alt={item.alt} />
            )}
            {tooltip === item.name && (
              <div className={tooltipStyles}>{item.name}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
