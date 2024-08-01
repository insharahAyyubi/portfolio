import { useState } from "react";
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
      <div className="flex flex-col items-center">
        <h1 className="text-5xl bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 text-transparent bg-clip-text font-light mt-8 mb-12">
          Contact Me
        </h1>
        <div className="flex space-x-4 justify-center mb-4">
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
      <div className="mx-8 md:mx-28 mb-4 bg-transparent px-8 rounded-lg flex flex-col md:flex-row items-center justify-evenly">
        <div className="basis-2/3">
          <img
            className="max-h-[500px] object-contain"
            src="./contact.png"
            alt="img"
          />
        </div>
        <div className="md:basis-1/2 w-full">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block ">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="block w-full bg-gray-100 p-3 rounded-lg mt-2"
              />
            </div>
            <div>
              <label className="block ">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="block w-full bg-gray-100 p-3 rounded-lg mt-2"
              />
            </div>
            <div>
              <label className="block ">Message</label>
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
          <span className="block mt-4 text-center font-light text-gray-500">{result}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
