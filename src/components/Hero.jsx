const Hero = () => {
  return (
    <div className="max-w-screen-2xl h-full md:h-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between pb-28">
      <div className="w-full order-2 text-center sm:text-start md:order-1 md:w-1/2 mt-5">
        <div className="space-y-10 p-4 md:p-0 ml-0">
          <h1 className="text-6xl font-normal mb-4">
            Insharah Ayyubi
            <span className="text-4xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 inline-block font-light mt-4 text-transparent bg-clip-text">
              Software Developer
            </span>
          </h1>
          <p className="font-light text-2xl text-slate-700 dark:text-slate-100">
            Dedicated to creating seamless, user-friendly applications with a
            blend of creativity and technical prowess. Transforming visions into
            reality through a perfect blend of technology and perfection.
          </p>
          <div className="flex space-x-3 justify-center sm:justify-start">
            <a href="">
              <img className="h-[30px]" src="./icons/github.png" alt="" />
            </a>
            <a href="">
              <img className="h-[30px]" src="./icons/mail.png" alt="" />
            </a>
            <a href="">
              <img className="h-[30px]" src="./icons/linkedin.png" alt="" />
            </a>
            <a href="">
              <img className="h-[30px]" src="./icons/twitter.png" alt="" />
            </a>
            <a href="">
              <img className="h-[30px]" src="./icons/instagram.png" alt="" />
            </a>
          </div>
        </div>
        <button
          className="bg-pink-300 px-6 transition duration-400 ease-in-out
          rounded-md py-2 outline-none mt-3 md:mt-6 hover:bg-pink-400 dark:text-black"
        >
          {" "}
          Resume
          <span className="inline-block ml-3">
            <img className="h-[15px]" src="./icons/download.png" alt="" />
          </span>
        </button>
      </div>
      <div className="w-full order-1 md:w-1/2 flex justify-center">
        <img
          className="h-[400px] w-[450px] object-contain"
          src="./rd.png"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Hero;
