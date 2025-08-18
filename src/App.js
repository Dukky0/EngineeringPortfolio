import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BatteryTestbenchProject from './projects/BatteryTestbench';
import BOLTWikiProject from './projects/BoltWiki';
import './styles/App.scss';
import './styles/Hero.scss';
import './styles/Global.scss';
import './styles/Navbar.scss';
import './styles/Bio.scss';
import './styles/Skills.scss';
import './styles/Timeline.scss';

// Home page component
const HomePage = () => {
  const navigate = useNavigate();
 
  const navigateToPage = (page) => {
    navigate(`/${page}`);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavbarWithRouter />
      <Hero />
      <Bio />
      <Skills />
      <Timeline />
      <Projects onNavigate={navigateToPage} />
      <Footer />
    </>
  );
};

// Project wrapper components that handle navigation
const BatteryTestbenchPage = () => {
  const navigate = useNavigate();
 
  const navigateToPage = (page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return <BatteryTestbenchProject onNavigate={navigateToPage} />;
};

const BOLTWikiPage = () => {
  const navigate = useNavigate();
 
  const navigateToPage = (page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return <BOLTWikiProject onNavigate={navigateToPage} />;
};

// Updated Navbar that works with React Router
const NavbarWithRouter = () => {
  const navigate = useNavigate();
 
  const navigateToPage = (page) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return <Navbar onNavigate={navigateToPage} />;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/battery-testbench" element={<BatteryTestbenchPage />} />
          <Route path="/bolt-wiki" element={<BOLTWikiPage />} />
          {/* Add a catch-all route for 404s */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;