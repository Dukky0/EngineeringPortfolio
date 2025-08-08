import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;