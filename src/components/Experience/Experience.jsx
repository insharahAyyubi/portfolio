import Navbar from "../Navbar";
import Footer from "../Footer";
import Accordion from "./Accordion";
import ExpCard from "./ExpCard";
import { experience } from "../../assets/data";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col md:flex-row items-center justify-around m-24 mt-0 mb-8">
          <div className="basis-1/2">
            <img className="max-h-[400px]" src="./exp2.png" alt="" />
          </div>
          <div className="flex flex-col items-center basis-1/2 justify-start">
            <h1 className="text-5xl mt-8 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 text-transparent bg-clip-text font-light mb-12">
              Experience
            </h1>
            <p className="text-2xl font-light text-slate-500 text-center">
              I have been actively involved in both tech and non-tech
              activities. Working with a few startups, and managing the
              activities at college club.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="mx-12 mb-10 flex flex-col items-center justify-center">
          {experience.map((acc, index) => (
            <Accordion
              key={index}
              title={acc.acc_title}
              bgColor={index % 2 === 0 ? "bg-pink-100 dark:bg-[rgba(55,11,110,0.2)]" : "bg-fuchsia-200 dark:bg-[rgba(176,8,52,0.102)]"}
            >
              {acc.exp && acc.exp.length > 0 ? (
                acc.exp.map((exp, expIndex) => (
                  <ExpCard key={expIndex} data={exp} />
                ))
              ) : (
                <div className="w-full min-h-[200px]"></div>
              )}
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
