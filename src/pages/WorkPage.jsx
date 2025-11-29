
import React from 'react';
import { useProjects } from '../hooks/useProjects.jsx';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import ProjectsSection from '../components/ProjectsSection';

const WorkPage = () => {
  
  const {allProjects}=useProjects();

  

  return (
    <section id="work" className="relative px-5 mx-auto mt-10 w-full max-w-7xl py-10">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-2 mt-10 text-4xl font-medium tracking-tight sm:text-5xl md:mb-28 md:text-6xl text-center"
        style={{
          textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
        }}
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
          FEATURED CASE STUDIES
        </p>
        <span>
          <span>Curated</span>{' '}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-wide">
            Work
          </span>
        </span>
      </motion.h2>
      <ProjectsSection projects={allProjects} showSeeMore={false}/>
    </section>
  );
};

export default WorkPage;

/*
const getTechColorClasses = (color) => {
    const colorMap = {
      blue: 'fill-blue-600 text-blue-400 bg-blue-600/20',
      pink: 'fill-pink-600 text-pink-400 bg-pink-600/20',
      cyan: 'fill-cyan-600 text-cyan-400 bg-cyan-600/20',
      emerald: 'fill-emerald-600 text-emerald-400 bg-emerald-600/20',
      purple: 'fill-purple-600 text-purple-400 bg-purple-600/20',
    };
    return colorMap[color] || colorMap.blue;
  };


*/