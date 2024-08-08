import { SiGeeksforgeeks, SiCredly, SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { motion } from "framer-motion";

const Certification = () => {
  const hoverEffect = {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-28 h-full mx-2">
        Profiles & Certifications
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 m-2 my-16">
        <motion.a
          whileHover={hoverEffect}
          className="rounded-2xl border-2 border-neutral-400 p-2"
          href="https://www.geeksforgeeks.org/user/frozen7/"
          target="_blank"
        >
          <SiGeeksforgeeks className="text-5xl text-green-700" />
        </motion.a>

        <motion.a
          whileHover={hoverEffect}
          className="rounded-2xl border-2 border-neutral-400 p-2"
          href="https://www.hackerrank.com/profile/shehlaansari12"
          target="_blank"
        >
          <FaHackerrank className="text-5xl text-green-500" />
        </motion.a>

        <motion.a
          whileHover={hoverEffect}
          className="rounded-2xl border-2 border-neutral-400 p-2"
          href="https://www.codechef.com/users/frozen_7"
          target="_blank"
        >
          <SiCodechef className="text-5xl text-stone-400" />
        </motion.a>

        <motion.a
          whileHover={hoverEffect}
          className="rounded-2xl border-2 border-neutral-400 p-2"
          href="https://www.cloudskillsboost.google/public_profiles/3ecf7665-97fd-47db-959c-48c1b57741b1"
          target="_blank"
        >
          <img className="h-[48px]" src="./icons/g_cloud.png" alt="" />
        </motion.a>

        <motion.a
          whileHover={hoverEffect}
          className="rounded-2xl border-2 border-neutral-400 p-2"
          href="https://www.credly.com/users/insharahayyubi"
          target="_blank"
        >
          <SiCredly className="text-5xl text-orange-500" />
        </motion.a>
      </div>
    </div>
  );
};

export default Certification;
