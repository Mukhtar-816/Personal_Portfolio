import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index";

const Testimonials = () => {
  return (
    <div className="pb-10 mt-10">
     <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 2 }}
        className="my-20 text-white text-center text-4xl"
      >
        Testimonials
      </motion.h2>

      <div className="flex flex-wrap w-5/4 sm:w-full justify-center items-center mb-10">
        {EXPERIENCES?.map((item, index) => (
          <motion.div 
          key={index}
          whileInView={{x:0, opacity:1}}
          initial={{x:-100, opacity:0}}
          transition={{duration:0.5, delay:1, }}
          className=" p-5 bg-neutral-950 rounded-md justify-center items-center mb-5 max-w-[400px]  mx-5">
            <p className="text-white mb-5">{item?.description}</p>
            <div className=" flex justify-start left-0 px-2 gap-5 items-center">
              <img
                src={item?.img}
                width={30}
                height={30}
                className="rounded-full"
              />
              <h1 className="text-neutral-400">{item?.role}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
