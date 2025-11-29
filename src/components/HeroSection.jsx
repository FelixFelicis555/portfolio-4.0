/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy,Check } from 'lucide-react';

const HeroSection = () => {
  const title = 'CoderXDreamer'.split('');
  const [copied,setCopied]=useState(false);
  const [hoveredIndex,setHoveredIndex]=useState(null);
  const email='pavanesh163@gmail.com';

  const handleCopyEmail=async()=>{
    try{
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(()=>{
        setCopied(false);
      },2000);
    } catch (err) {
      console.error('Failed to copy email:',err);
    }
  };




  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating Glassmorphic Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          animate={{ y: [0, 10, 0], rotate: 12 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: '600px', height: '140px' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-indigo-500/[0.15] backdrop-blur-[1px] border border-white/[0.15] shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          animate={{ y: [0, 10, 0], rotate: -15 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: '500px', height: '120px' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-rose-500/[0.15] backdrop-blur-[1px] border border-white/[0.15] shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          animate={{ y: [0, 10, 0], rotate: -8 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: '300px', height: '80px' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-violet-500/[0.15] backdrop-blur-[1px] border border-white/[0.15] shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          animate={{ y: [0, 10, 0], rotate: 20 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: '200px', height: '60px' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-amber-500/[0.15] backdrop-blur-[1px] border border-white/[0.15] shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          animate={{ y: [0, 10, 0], rotate: -25 }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative" style={{ width: '150px', height: '40px' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-cyan-500/[0.15] backdrop-blur-[1px] border border-white/[0.15] shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-14">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="bg-primary/80 px-1.5 font-rajdhani rounded-full -ml-1.5">new</span>
            <div className="shiny-text" style={{ animationDuration: '5s' }}>
              Chatbot Available
            </div>
          </motion.div>

          <motion.h1
            className="mt-3 text-5xl font-bold text-white md:text-[5.5rem] flex flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title.map((char, index) => {
              const isX = char === 'X';
              return (
                <motion.span
                  key={index}
                  className={`${char === ' ' ? 'w-2' : ''} ${isX ? 'bg-gradient-to-r from-[#007BFF] to-[#FF0080] bg-clip-text text-transparent font-bold' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0,-10,0] }}
                  transition={ { 
                  opacity:  {duration: 0.5, delay: 0.3 + index * 0.05},
                  y:{
                    duration:2,
                    delay:1+index*0.1,
                    repeat:Infinity,
                    repeatDelay:3,
                    ease:'easeInOut'
                  }
                   }}
                 onMouseEnter={()=>setHoveredIndex(index)}
                 onMouseLeave={()=>setHoveredIndex(null)}
                 whileHover={{scale:1.2,rotate:5}}
                 style={{
                  display:'inline-block',
                  transition:'transform 0.2s ease',
                 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.p
            className="grad-white text-base sm:text-lg md:text-2xl mb-8 leading-relaxed tracking-wide mx-auto mt-8 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Hello, I'm Pavanesh Guggilapu — a Software Developer
          </motion.p>

          <motion.div
            className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1">
              <a href="#contact" className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
                Let's Connect
              </a>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
                <ArrowRight className="w-[18px] h-[18px] text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0" />
                <ArrowRight className="w-[18px] h-[18px] absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </div>

            <div className="relative">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90"
              >
                {/* Icon with transition */}
                <div className="relative w-5 h-5">
                  <Copy 
                    className={`w-5 h-5 absolute transition-all duration-300 ${
                      copied ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`} 
                  />
                  <Check 
                    className={`w-5 h-5 absolute transition-all duration-300 ${
                      copied ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`} 
                  />
                </div>
                
                {/* Text with transition */}
                <span className="relative inline-block min-w-[200px] text-left">
                  <span 
                    className={`transition-all duration-300 ${
                      copied ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {email}
                  </span>
                  <span 
                    className={`absolute left-0 transition-all duration-300 ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Copied to clipboard
                  </span>
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default HeroSection;
