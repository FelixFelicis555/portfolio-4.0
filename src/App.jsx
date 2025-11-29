import { useEffect } from 'react'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ProjectsProvider } from './context/ProjectsContext';
import Lenis from '@studio-freight/lenis';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import MorePage from './pages/MorePage';
import './App.css';

function App() {

  useEffect(()=>{
    const lenis=new Lenis({
      duration:1.2,
      easing:(t)=>Math.min(1,1.001-Math.pow(2,-10 *t)),
      smooth:true,
    });
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return ()=>{
      lenis.destroy();
    };
  },[]);
  return (
    <ProjectsProvider>
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/work" element={<WorkPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/more" element={<MorePage/>}/>
      </Routes>
       </Layout>
      </BrowserRouter>
      </ProjectsProvider>
     
  );
};

export default App;
