import React from 'react';
import { useProjects } from '../hooks/useProjects.jsx';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import MarqueeSection from '../components/MarqueeSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
 const {featuredProjects}=useProjects();
  return (
    <div className="relative bg-[#030303] min-h-screen">
      
      <div className="space-y-24 md:space-y-28 lg:space-y-30 overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <ProjectsSection  projects={featuredProjects} showSeeMore={true}/>
        <SkillsSection />
        <MarqueeSection />
        <EducationSection />
        <ContactSection />
      </div>
      
    </div>
  );
};

export default HomePage;
