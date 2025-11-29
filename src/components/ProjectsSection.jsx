import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const ProjectsSection = ({projects,showSeeMore=true}) => {

  const [hoveredProject, setHoveredProject] = useState(0);
  const [hoveredArrow,setHoveredArrow]= useState(null);
   
  const getTechIcon=(techName)=>{
    const iconMap={
      'Next.js': 'https://cdn.simpleicons.org/nextdotjs/white',
      'React': 'https://cdn.simpleicons.org/react',
      'React.js': 'https://cdn.simpleicons.org/react',
      'Node.js': 'https://cdn.simpleicons.org/nodedotjs/darkgreen',
      'Express': 'https://cdn.simpleicons.org/express/white',
      'Express.js': 'https://cdn.simpleicons.org/express/white',
      'MongoDB': 'https://cdn.simpleicons.org/mongodb/darkgreen',
      'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/sky',
      'MySQL': 'https://cdn.simpleicons.org/mysql',
      'Tailwind': 'https://cdn.simpleicons.org/tailwindcss',
      'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
      'Redux': 'https://cdn.simpleicons.org/redux',
      'TypeScript': 'https://cdn.simpleicons.org/typescript',
      'JavaScript': 'https://cdn.simpleicons.org/javascript',
      'Prisma': 'https://cdn.simpleicons.org/prisma/blue',
      'AWS S3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      'Supabase': 'https://cdn.simpleicons.org/supabase',
      'GraphQL': 'https://cdn.simpleicons.org/graphql',
      'Vercel': 'https://cdn.simpleicons.org/vercel/white',
    };
    return iconMap[techName]
  };
  const colorMap={
     blue: {
      fill: '#2563eb',
      text: '#93c5fd',
      bg: 'rgba(37, 99, 235, 0.2)',
      shadow: 'rgb(37, 99, 235)'
    },
    pink: {
      fill: '#db2777',
      text: '#f9a8d4',
      bg: 'rgba(219, 39, 119, 0.2)',
      shadow: 'rgb(219, 39, 119)'
    },
    emerald: {
      fill: '#059669',
      text: '#6ee7b7',
      bg: 'rgba(5, 150, 105, 0.2)',
      shadow: 'rgb(5, 150, 105)'
    },
    purple: {
      fill: '#7e22ce',
      text: '#e9d5ff',
      bg: 'rgba(126, 34, 206, 0.2)',
      shadow: 'rgb(126, 34, 206)'
    },
    cyan: {
      fill: '#0891b2',
      text: '#67e8f9',
      bg: 'rgba(8, 145, 178, 0.2)',
      shadow: 'rgb(32, 58, 67)'
    }
  };
  const getColorStyles=(techColor)=>{
    return colorMap[techColor] ;
  }
  return (
    <section id="work" className="relative px-5 mx-auto mt-28 w-full max-w-7xl py-10">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <span className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
            PROJECTS
          </span>
          <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
            Projects
          </h2>
        </div>
        <div className="flex items-center gap-4 my-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
        <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
          FEATURED CASE STUDIES
        </p>
      </div>

      <div className="relative mx-auto flex w-full">
        {/* Project Cards */}
        <div className="mx-auto flex max-w-2xl flex-col gap-y-6 md:gap-y-24 lg:max-w-[65%]">
          {projects.map((project, index) => {

            const colors=getColorStyles(project.techColor);
            return (
            <div key={project.id} className="w-full">
              <div className="project-card flex w-full flex-row">
                <div className="flex flex-col lg:mx-10 lg:w-full">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    className="pointer-events-none relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:pointer-events-auto lg:h-[560px] lg:rounded-3xl lg:p-2"
                    href={project.website}
                    onMouseEnter={() => setHoveredProject(index)}
                  >
                    <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)' }} />
                    
                    <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                      <div
                        className="absolute inset-0 -z-1"
                        style={{ background: project.gradient }}
                      />
                      <div className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)' }} />
                      
                      <div className={`w-full flex flex-row items-center justify-between px-6  lg:px-12 py-8 text-{colors.text}} `}  >
                        <h3 className="max-w-[85%]  text-xl lg:text-2xl text-{colors.text}"> {project.shortDesc}
</h3>
                         {/* Framer Motion Animated Arrow */}
                          <motion.div 
                            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover/card:bg-white group-hover/card:text-black"
                           onMouseEnter={()=>setHoveredArrow(index)}
                           onMouseLeave={()=>setHoveredArrow(null)}
                           onClick={(e)=>{
                            e.preventDefault();
                            window,open(project.website,'_blank');
                           }}
                          >
                            <motion.div
                              animate={{ x: hoveredArrow === index ? 5 : 0,scale:hoveredArrow===index?1.1:1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ArrowRight className="w-5 h-5" stroke={colors.text} />
                            </motion.div>
                          </motion.div>
                      </div>
                      
                      <div className="w-full flex justify-center">
                        <img
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full hover:scale-105 hover:-rotate-3 max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0"
                          src={project.image}
                          style={{ boxShadow: `${project.shadowColor} 0px 0px 30px` }}
                        />
                      </div>
                    </div>
                  </a>

                  {/* Mobile Info */}
                  <div className="mt-6 mb-24 flex flex-col px-2 lg:hidden">
                    <div className="flex items-center">
                      <h2 className="my-auto line-clamp-1 text-lg font-bold">{project.title}</h2>

                      <div
                        aria-hidden="true"
                        className="ml-3 h-1 min-w-6 rounded-full"
                        style={{ backgroundColor: project.shadowColor, width: '2rem' }}
                      />
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm font-medium">{project.subtitle}</p>
                    <p className="text-muted-foreground my-2 text-sm lg:hidden">{project.description}</p>
                    
                    <div className="my-4 flex max-w-fit flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className={`inline rounded-md border border-white/10 px-2 py-1 text-xs font-medium backdrop-blur-sm fill-${project.techColor}-600 text-${project.techColor}-400 bg-${project.techColor}-600/20`}
                          style={{color:colors.text,backgroundColor:colors.bg,fill:colors.fill}}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex w-full gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900/80 px-5 py-2.5 shadow-[inset_0_2px_10px_#ffffff1f] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-800/90"
                        >
                          <Github className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[15deg]" />
                          <span className="font-medium">Source code</span>
                        </a>
                      )}
                      <motion.a
                      whileHover={{scale:1.03,boxShadow:"0 0 15px #2932CB30"}} whileTap={{scale:0.98}}
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex h-fit w-1/2 items-center justify-center gap-2 rounded-xl px-5 py-2.5 shadow-[inset_0_2px_10px_#ffffff1f] backdrop-blur-sm"
                        style={{ background: `linear-gradient(45deg, rgba(38, 38, 38, 0.8), ${project.shadowColor}33)` }}
                      >
                        <motion.div animate={{x:[0,3,0]}} transition={{repeat:Infinity,repeatType:'loop',duration:1.5,ease:'easeInOut'}} className="flex items-center justify-center">
                                                <ExternalLink className="size-4" />

                        </motion.div>
                        <span className="font-medium">Website</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Desktop Sidebar */}
        <div  className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
          <div className="sticky top-40">
            <div className="flex">
              <div
                aria-hidden="true"
                className="my-4 mr-4 h-1 min-w-6 rounded-full"
                style={{ backgroundColor: projects[hoveredProject]?.shadowColor }}
              />
              <div className="flex flex-col items-start lg:h-[500px]">
                <div className="flex items-center gap-3">
                  <h3 className="text-white text-2xl font-bold">{projects[hoveredProject]?.title}</h3>
                  <a  target="_blank"  rel="noopener noreferrer"  className="translate-y-px cursor-pointer rounded-full p-2 hover:bg-zinc-900"  href={projects[hoveredProject]?.github}>
                  <Github className="size-5" />
                  </a>
                 </div>
                <p className="text-gray-400 my-2 text-base font-light">{projects[hoveredProject]?.subtitle}</p>
                <p className="text-gray-300 my-2 text-base font-light">{projects[hoveredProject]?.description}</p>
                
                {projects[hoveredProject]?.features.length > 0 && (
                  <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
                    {projects[hoveredProject]?.features.map((feature, idx) => (
                      <motion.li key={idx} className="flex items-center text-sm text-gray-200"
                      initial={{opacity:0,x:-10}}
                      animate={{opacity:1,x:0}}
                      transition={{duration:0.3,delay:idx*0.1,ease:"easeOut"}}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1 mr-2 size-5 shrink-0"
                          style={{ fill: projects[hoveredProject]?.shadowColor }}
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                 
                )}
                 <div className="mt-8 flex flex-wrap gap-2">
                    {projects[hoveredProject]?.technologies.map((tech,idx)=>(
                      <motion.div key={tech} className="flex items-center justify-center rounded-full bg-black/30 p-2 backdrop-blur-sm border border-white/10" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.3,delay:idx*0.05}} whileHover={{scale:1.1}}>
                        <img src={getTechIcon(tech)} alt={tech} className="w-5 h-5"/>
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See More Link */}
      {showSeeMore && (<div className="flex justify-center mt-5 md:mt-16">
        <Link
          className="flex items-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100"
          to="/work"
        >
          <span>See more projects</span>
          <div className="rounded-full bg-white/5 p-0.5 backdrop-blur-xs">
            <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300 ease-out hover:translate-x-1" />
          </div>
        </Link>
         </div>
        )}
      
     
    </section>
  );
};

export default ProjectsSection;