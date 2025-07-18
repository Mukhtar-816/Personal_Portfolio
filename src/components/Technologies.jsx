import React from "react";
import { RiReactjsLine, RiFirebaseFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="my-20 text-white text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-10 pt-10"
      >
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          duration:1.5,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4 bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          delay:1,
          duration:1.5,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4  bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          duration:1.5,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4  bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <TbBrandRedux className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          delay:1,
          duration:1.5,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4  bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <SiTailwindcss className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          duration:1.5,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4  bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <SiMongodb className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
        initial={{y : -10}}
        animate={{y : [10, -10]}}
        transition={{
          duration:1.5,
          delay:1,
          ease:'linear',
          repeat:Infinity,
          repeatType:'reverse'
        }}
         className="p-4  bg-white/20 backdrop-blur-sm rounded-xl flex items-center space-x-4">
          <RiFirebaseFill className="text-7xl text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
