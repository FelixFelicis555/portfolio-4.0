/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/mockData';

const EducationSection = () => {

  const containerVariants={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.2,
        delayChildren:0.6
      }
    }
  };

  const itemVariants={
    hidden:{opacity:0,y:30},
    visible:{
      opacity:1,
      y:0,
      transition:{duration:0.5}
    }
  };

  const dotVariants={
    hidden:{opacity:0,scale:0},
    visible:{
      opacity:1,
      scale:1,
      transition:{duration:0.3}
    }
  };
  return (
    <section id="education" className="py-20 text-gray-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />

      {/* Section Title */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <span className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
            EDUCATION
          </span>
          <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
            Education
          </h2>
        </div>
        <div className="flex items-center gap-4 my-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
        <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
          ACADEMIC JOURNEY
        </p>
      </div>

      {/* Timeline */}
      <motion.div
        className="flex justify-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false,amount:0.3,margin:"100px" }}
        variants={containerVariants}
      >
        <div className="relative flex flex-col gap-16 max-w-2xl w-full px-6">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600/80 via-violet-600/50 to-violet-600/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false,amount:0.1,margin:"200px" }}
            style={{ transformOrigin: '50% 0%' }}
          />

          {/* Education Items */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative flex flex-col items-center group"
             variants={itemVariants}
            >
              {/* Dot */}
              <motion.div
                className=" timeline-dot absolute left-1/2 top-0 -ml-3 -mt-3  w-6 h-6 rounded-full border-2 border-violet-600 bg-[#0A0A0A] z-10  transition-transform duration-300"
                
               
              variants={dotVariants}
              />

              {/* Content */}
              <div className=" timeline-card w-full text-center p-6 transition-all duration-300 ">
                <div className=" year-badge inline-block px-3 py-1 rounded-full bg-violet-900/20 text-violet-400 text-xs font-medium mb-3">
                  {edu.year}
                </div>
                <h3 className="edu-heading text-2xl font-bold text-white mb-2">
                  <span className="text-violet-400">🎓</span> {edu.degree}
                </h3>
                <p className=" edu-description text-base text-gray-300 font-medium mb-3">{edu.institution}</p>
                {edu.grade && (
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-600/50" />
                    <p className="text-sm font-medium px-3 py-1 rounded-md bg-violet-900/20 text-violet-300">
                      {edu.grade}
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-600/50" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;