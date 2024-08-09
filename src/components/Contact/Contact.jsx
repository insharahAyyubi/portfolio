import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "00728414-f529-402e-9c83-609131f1e3f2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -10 }} // Start slightly below with opacity 0
        animate={{ opacity: 1, y: 0 }} // End at original position with opacity 1
        transition={{ duration: 1.75, ease: "easeOut" }} // Smooth transition
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 text-transparent bg-clip-text font-light mt-8 mb-12">
          Contact Me
        </h1>
        <div className="flex space-x-4 justify-center mb-4">
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
            <img className="h-[30px]" src="./icons/twitter.png" alt="Twitter" />
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
      </motion.div>
      <div className="mx-8 md:mx-28 mb-4 bg-transparent px-8 rounded-lg flex flex-col md:flex-row items-center justify-evenly">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
          animate={{ opacity: 1, x: 0 }} // End at the original position
          transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
          className="basis-2/3"
        >
          <img
            className="max-h-[500px] object-contain"
            src="./cc.png"
            alt="Contact"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={{ opacity: 1, x: 0 }} // End at the original position
          transition={{ duration: 1.75, ease: "easeOut" }} // Smooth transition
          className="md:basis-1/2 w-full"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="block w-full bg-gray-100 p-3 rounded-lg mt-2"
              />
            </div>
            <div>
              <label className="block">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="block w-full bg-gray-100 p-3 rounded-lg mt-2"
              />
            </div>
            <div>
              <label className="block">Message</label>
              <textarea
                name="message"
                rows="2"
                placeholder="Enter your message"
                required
                className="block w-full bg-gray-100 p-3 rounded-lg mt-2 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg w-full mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <span className="block mt-4 text-center font-light text-gray-500">
            {result}
          </span>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
