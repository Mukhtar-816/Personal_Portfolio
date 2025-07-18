import React from "react";
import { Socials } from "../constants/index";
import { motion } from "framer-motion";

export const NavBar = () => {
  const name = "𝑀𝓇𝒳𝔄𝓁𝑜𝓃𝑒._";

  return (
    <motion.nav
    whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}

      className="flex items-start justify-between py-10 px-0 sm:px-5 lg:px-1 h-[15vh] bg-transparent"
    >
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3sm sm:text-3xl text-white font-bold">{name}</h1>
      </div>

      <div className="flex gap-5">
        {Socials.map((item, index) => (
          <a href={item?.link}
            key={index}
            className="transition-all duration-200 hover:animate-spin"
          >
            {item?.icon()}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
