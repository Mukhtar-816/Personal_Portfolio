import React from "react";
import img from "../assets/img.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse  justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="flex bg-white/20 backdrop-blur-md w-full justify-center rounded-3xl sm:h-[550px] max-h-[550px]"
            >
              <img src={img} className="rounded-full" />
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <h1 className="text-white lg:text-7xl font-bold tracking-tighter pb-2 text-4xl">
              Mukhtar Shaikh
            </h1>
            <span className="text-gray-400 text-1xl sm:text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent tracking-tighter">
              MERN Stack Developer
            </span>
            <br></br>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-white text-xl leading-relaxed  tracking-tighter my-2 py-2 max-w-lg lg:max-w-xl"
            >
              I am a passionate and skilled MERN stack developer with expertise
              in building robust, scalable, and dynamic web applications.
              Proficient in MongoDB, Express.js, React, and Node.js, I
              specialize in crafting seamless user experiences and efficient
              backend systems. I thrive on problem-solving, learning new
              technologies, and delivering high-quality software solutions
              tailored to user needs.
            </motion.p>
            <br></br>
            <motion.a
              href="./Resume.pdf  "
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="p-5 bg-gradient-to-r from-white/5 to-white/50 transition-all duration-300  bg-white/30 backdrop-blur-lg rounded-full font-semibold text-black hover:bg-purple-900 hover:text-white"
            >
              Download my Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
