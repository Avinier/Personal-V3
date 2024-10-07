//TODO:
// ai generated logo + assets [+++]
// copywriting. [+++]
// about section [+++]
// - achievements board, arrangement 
//grainy background fix [++]
//make everything responsive [+++]
// darkmode [++]

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'routes/home';
import About from 'routes/about';
import Writings from 'routes/writings';
import Contact from 'routes/contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
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