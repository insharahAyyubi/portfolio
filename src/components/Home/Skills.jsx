import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const iconVar = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="pb-24">
      <h1 className="text-5xl text-center mb-10">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 m-2">
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <FaHtml5 className="text-5xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVar(5.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <FaCss3 className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVar(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <IoLogoJavascript className="text-5xl bg-black text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVar(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <RiReactjsFill className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(3.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <SiMongodb className="text-5xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <FaNpm className="text-5xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <GrMysql className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 p-2"
        >
          <img className="h-[48px]" src="./icons/g_cloud.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
