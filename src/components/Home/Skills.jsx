import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="pb-24">
      <h1 className="text-5xl text-center mb-10">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 m-2">
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <FaHtml5 className="text-5xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
        <FaCss3 className="text-5xl text-blue-600"/>
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
        <IoLogoJavascript className="text-5xl bg-black text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <RiReactjsFill className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <SiMongodb className="text-5xl text-green-800" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <FaNodeJs className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <FaNpm className="text-5xl text-red-700" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <GrMysql className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-400 p-2">
          <img className="h-[48px]" src="./icons/g_cloud.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
