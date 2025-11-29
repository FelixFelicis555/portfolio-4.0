/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/mockData';

const SkillsSection = () => {

  const containerVariants={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1
      }
    }
  };

  const itemVariants={
    hidden:{opacity:0,y:20},
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.4
      }
    }
  };

  return (
    <section id="skills" className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-0 md:px-10">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Center Image */}
      <div className="relative mx-auto size-fit overflow-hidden">
        <motion.div
          className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            draggable="false"
            alt="skills cover rotating image"
            loading="lazy"
            className="z-10 w-full select-none"
            src="https://naimur-reza.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgpt.415f98c9.webp&w=640&q=75"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Title Overlay */}
        <motion.h2
          className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center z-30 pb-5 mb-0 md:mb-0 bottom-0 size-full"
          style={{ textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
              <span className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
                SKILLS
              </span>
              <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize shiny-text">
                Skills
              </h2>
            </div>
            <div className="flex items-center gap-4 my-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
            <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
              I constantly try to improve
            </p>
          </div>
        </motion.h2>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black" />
      </div>

      {/* Skills Grid */}
      <motion.div
        className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: false,amount:0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base hover:bg-neutral-800 transition-all duration-300"
           
            variants={itemVariants}
            viewport={{once:false,amount:0.2}}
            whileHover={{ scale: 1.05,rotate:5,backgroundColor:"rgb(38,38,38)",
              transition:{duration:0.3}
             }}
             tabIndex={0}
          >
            <motion.div className="relative"
            
            whileHover={{
              rotate:360,
              scale:1.25,
              transition:{duration:0.6,ease:"easeInOut"}
            }}
            >
              <img
                alt={skill.alt}
                loading="lazy"
                className=" w-4 lg:w-5"
                src={skill.icon}
              />
            </motion.div>
            <span className="relative inline-block">
              <span className="relative z-10 transition-colors duration-300">{skill.name}</span>
              <span className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 grad-white">
                {skill.name}
              </span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;