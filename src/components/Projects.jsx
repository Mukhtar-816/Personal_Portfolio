import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-white"
      >
        {" "}
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} href={item?.link} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:2}}
             className="w-full lg:w-1/4">
              <img
                src={item?.image}
                height={250}
                width={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:1.5}}
             className="w-full max-w-xl lg:w-3/4">
              <a href={item?.link}><h3 className="mb-2 font-semibold text-2xl text-white">
                {item?.title}
              </h3></motion.div></a>
              <p className="text-stone-400 mb-4">{item?.description}</p>
              {item?.technologies?.map((tech, index) => (
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
