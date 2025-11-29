/* eslint-disable no-unused-vars */

import React ,{useState,useRef}from 'react';
import { motion,useInView } from 'framer-motion';
import { Code2, Code, GraduationCap, Github, Linkedin, Facebook, Mail } from 'lucide-react';

const AboutSection = () => {

  const [inViewCount,setinViewCount]=React.useState(0);
  const titleRef=React.useRef(null);
  const isInView=useInView(titleRef,{amount:0.5});

  React.useEffect(()=>{
    if(isInView){
      setinViewCount(prev=>prev+1);
    }
  },[isInView]);
  return (
    <section id="about" className="py-20 text-gray-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -z-10" />

      {/* Section Title */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <span className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
            ABOUT ME
          </span>
          <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
            About Me
          </h2>
        </div>
        <div className="flex items-center gap-4 my-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
        <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
          MORE ABOUT ME
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-12 lg:gap-20">
        {/* Avatar */}
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500/20 to-orange-500/20 blur-lg -z-10" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500/30 to-orange-500/30 -z-10" />
            <div className="flex justify-center size-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                alt="Pavanesh's Avatar"
                className="h-full w-full object-cover"
                src="https://naimur-reza.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmemoji-smile.8e168ba3.png&w=640&q=75"
              />
            </div>
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-violet-600 to-violet-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Developer
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-6 bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              CS Student
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="lg:text-left text-center order-1 lg:order-2 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Hey! I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent font-bold">
                PAVANESH
              </span>
               <motion.span
               key={inViewCount}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              
              />
            </span>
          </h3>
          <p className="text-lg leading-7 mb-5 text-gray-200">
            I'm Pavanesh Guggilapu, a Web developer and Computer Science student with 3+ years of experience. I specialize in building clean, responsive, and dynamic websites using HTML, CSS, JavaScript, React, NextJs, PostgreSQL, Prisma and MongoDB.
          </p>
          <p className="text-lg leading-7 mb-6 text-gray-200">
            I'm always leveling up my skills and currently diving deeper into backend and DevOps. Whether it's full-time or freelance, I'm open to exciting opportunities where I can grow and build dope stuff with amazing people.
          </p>

          {/* What I Do */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white">What I Do</h4>
            <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Code2 className="text-violet-400" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Code className="text-orange-400" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <GraduationCap className="text-green-400" />
                <span>Computer Science</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Connect With Me</h4>
            <div className="flex items-center gap-5 mt-4 lg:justify-start justify-center">
              <motion.a
                href="https://github.com/FelixFelicis555"
                aria-label="GitHub"
                className="flex items-center justify-center size-12 rounded-full bg-white/5 hover:bg-gray-700/30 text-gray-300 hover:text-gray-100 transition-colors duration-300 border border-white/10"
                 whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavanesh-g/"
                aria-label="LinkedIn"
                className="flex items-center justify-center size-12 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors duration-300 border border-white/10"
                 whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/pavanesh.nandu/"
                aria-label="Facebook"
                className="flex items-center justify-center size-12 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors duration-300 border border-white/10"
                 whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Facebook className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:pavanesh163@gmail.com"
                aria-label="Gmail"
                className="flex items-center justify-center size-12 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-colors duration-300 border border-white/10"
                 whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-8">
            <motion.a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1XcQ-XNlVNSUMhZcmvFBZqGn3QIEKXFEh/view?usp=drive_link"
              className="inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-violet-500/20 transition-shadow duration-300"
               whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;