import { useState } from 'react'
import './App.css'
import CustomCursor from './components/Cursor';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/Skills';
import Project from './components/project';
import Contact from './components/contact';
import Experience from './components/experience';
import ParticleBackground from './components/ParticleBackground';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
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
      </BrowserRouter>
    </>
  )
}

export default App
