import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-screen-2xl h-full md:h-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between pb-28">
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start position off-screen to the right
        animate={{ x: 0, opacity: 1 }} // End position at the original spot
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="w-full order-2 text-center sm:text-start md:order-1 md:w-1/2 mt-5"
      >
        <div className="space-y-10 p-4 md:p-0 ml-0">
          <motion.h1
            whileHover={{ x: 12, scale: 1.03}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-6xl font-normal mb-4"
          >
            Insharah Ayyubi
            <span className="text-4xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 inline-block font-light mt-4 text-transparent bg-clip-text">
              Software Developer
            </span>
          </motion.h1>
          <p className="font-light text-2xl text-slate-700 dark:text-slate-100">
            Dedicated to creating seamless, user-friendly applications with a
            blend of creativity and technical prowess. Transforming visions into
            reality through a perfect blend of technology and perfection.
          </p>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a
              href="https://github.com/insharahAyyubi"
              target="_blank"
              className="hover:scale-125 transition ease-in duration-200"
            >
              <img className="h-[30px]" src="./icons/github.png" alt="GitHub" />
            </a>
            <a
              href="mailto:insharahayyubifiver@gmail.com"
              target="_blank"
              className="hover:scale-125 transition ease-in duration-200"
            >
              <img className="h-[30px]" src="./icons/mail.png" alt="Mail" />
            </a>
            <a
              href="https://www.linkedin.com/in/insharah-ayyubi/"
              target="_blank"
              className="hover:scale-125 transition ease-in duration-200"
            >
              <img
                className="h-[30px]"
                src="./icons/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://x.com/AyyubiInsharah"
              target="_blank"
              className="hover:scale-125 transition ease-in duration-200"
            >
              <img
                className="h-[30px]"
                src="./icons/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/insharah_ayyubi/?next=%2F"
              target="_blank"
              className="hover:scale-125 transition ease-in duration-200"
            >
              <img
                className="h-[30px]"
                src="./icons/instagram.png"
                alt="Instagram"
              />
            </a>
          </div>

          <button
            className="bg-pink-300 px-6 transition duration-400 ease-in-out
          rounded-md py-2 outline-none mt-3 md:mt-8 hover:bg-pink-400 dark:text-black"
          >
            Resume
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start position off-screen to the left
        animate={{ x: 0, opacity: 1 }} // End position at the original spot
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="w-full order-1 md:w-1/2 flex justify-center"
      >
        <img
          className="h-[400px] w-[450px] object-contain"
          src="./banner.png"
          alt="banner"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
