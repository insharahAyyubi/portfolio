import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGeeksforgeeks, SiCredly, SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const hoverEffect = {
  y: -10,
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeInOut" },
};

const iconStyles = "text-5xl";
const iconWrapperStyles =
  "relative rounded-2xl border-2 border-neutral-400 p-2";
const imgClass = "h-[48px] w-[48px]";
const tooltipStyles =
  "absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-white bg-gray-700 rounded text-sm whitespace-nowrap";

const Certification = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (name) => {
    setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  const certifications = [
    {
      icon: <SiGeeksforgeeks className={`${iconStyles} text-green-700`} />,
      name: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/frozen7/",
    },
    {
      icon: <FaHackerrank className={`${iconStyles} text-green-500`} />,
      name: "HackerRank",
      href: "https://www.hackerrank.com/profile/shehlaansari12",
    },
    {
      icon: <SiCodechef className={`${iconStyles} text-stone-400`} />,
      name: "CodeChef",
      href: "https://www.codechef.com/users/frozen_7",
    },
    {
      src: "./icons/g_cloud.png",
      alt: "Google Cloud",
      name: "Google Cloud",
      href: "https://www.cloudskillsboost.google/public_profiles/3ecf7665-97fd-47db-959c-48c1b57741b1",
    },
    {
      icon: <SiCredly className={`${iconStyles} text-orange-500`} />,
      name: "Credly",
      href: "https://www.credly.com/users/insharahayyubi",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl text-center mt-28 h-full mx-2">
        Profiles & Certifications
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 m-2 my-16">
        {certifications.map((item, index) => (
          <motion.a
            key={index}
            whileHover={hoverEffect}
            className={iconWrapperStyles}
            href={item.href}
            target="_blank"
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
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certification;
