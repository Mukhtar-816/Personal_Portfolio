import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-72 object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:w-1/2 w-full space-y-6"
              >
                {/* Project Title & Links */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                    {project?.title}
                  </h3>
                  <div className="flex gap-3">
                    {project?.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 transition-all duration-300 border border-blue-500/30"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project?.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-600/20 hover:bg-slate-600/30 text-slate-400 hover:text-slate-300 transition-all duration-300 border border-slate-600/30"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project?.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-full border border-slate-600/50 hover:border-slate-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                {project?.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-slate-400 text-lg mb-6">
            Interested in working together?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
