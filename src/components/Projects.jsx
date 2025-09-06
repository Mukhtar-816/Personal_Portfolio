import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  return (
    <div className="pb-20 px-4 lg:px-20">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl text-white font-bold tracking-wide"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 xl:grid-cols-2 gap-8"
      >
        {PROJECTS.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col lg:flex-row items-center hover:border-white/50 border border-white/0 bg-white/10 backdrop-blur-3xl rounded-2xl p-4 lg:p-6 shadow-md hover:shadow-xl transition-all
                ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full lg:w-1/2 mb-4 lg:mb-0 flex-shrink-0 rounded-2xl overflow-hidden flex justify-center items-center"
              >
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-40 lg:h-48 object-contain"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:w-1/2 flex flex-col justify-center lg:px-6"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <a href={item?.link}>
                  <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-white hover:underline">
                    {item?.title}
                  </h3>
                </a>
                <p className="text-stone-400 mb-4 leading-relaxed">
                  {item?.description?.substring(0, 112)+".."}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item?.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
