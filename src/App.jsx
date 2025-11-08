import React, { useEffect, lazy } from 'react'
import './App.css'
import CustomCursor from './components/Cursor';
import Header from './components/header';
import Footer from './components/footer';
import MobileFooter from './components/Footer-Mobile';

const Hero = lazy(() => import('./components/hero'));
const About = lazy(() => import('./components/about'));
const Skills = lazy(() => import('./components/Skills'));
const Project = lazy(() => import('./components/project'));
const Contact = lazy(() => import('./components/contact'));
const Experience = lazy(() => import('./components/experience'));

import ParticleBackground from './components/ParticleBackground';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const titles = [
  "Anil Kumar",
  "Portfolio",
  "MERN Technologies",
  "Full Stack Developer",
  "UI/UX Designer"
];

function App() {

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      document.title = titles[idx];
      idx = (idx + 1) % titles.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <CustomCursor />
        <ParticleBackground />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
        <MobileFooter />
      </BrowserRouter>
    </>
  )
}

export default App
