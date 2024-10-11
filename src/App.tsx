//TODO:
// about section [+++]
// - achievements board
//grainy background fix [++]
//make everything responsive [+++]
// darkmode [++]

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'routes/home';
import About from 'routes/about';
import Writings from 'routes/writings';
import Contact from 'routes/contact';

const App: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTrigger = window.innerHeight * 0.75; 
      const scrolled = window.scrollY;
      
      if (scrolled > scrollTrigger && !showLogo) {
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLogo]);

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <a 
            href='/' 
            className={`
              fixed cursor-pointer z-[90] w-[95px] h-[95px] 
              top-[10%] left-[10%] transition-opacity duration-300
              ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
          >
            <img src='/final-logo6.png' alt='logo' className='w-full h-full object-fit'/>
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;