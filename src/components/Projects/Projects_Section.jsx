import { motion } from "framer-motion";
import Project_Card from "./Project_Card"; // Adjust the import based on your file structure

const Projects_Section = ({ title, projects }) => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-12 mx-4">{title}</h1>
      <div className="flex flex-row items-center justify-around mt-24 m-10 md:m-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: { when: "beforeChildren", staggerChildren: 0.3 },
            },
            hidden: { opacity: 0 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Project_Card item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects_Section;
