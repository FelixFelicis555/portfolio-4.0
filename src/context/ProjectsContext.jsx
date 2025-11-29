/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import {projects} from '../data/mockData';

export  const ProjectsContext=createContext();

export const ProjectsProvider=({children})=>{
    const allProjects=projects;
    const featuredProjects=projects.filter(p=>p.featured);

    const getProjectById=(id)=>projects.find(p=>p.id===id);
    const projectCount=projects.length;
    const featuredCount=featuredProjects.length;

    return(
        <ProjectsContext.Provider value={{allProjects,featuredProjects,getProjectById,projectCount,featuredCount}}>
            {children}
        </ProjectsContext.Provider>
    );
};


