//TODO:
// ai generated logo + assets [+++]
// copywriting. [+++]
// projects.tsx colors [+]
// about section [+++]
// - achievements board, current reads, arrangement 
//grainy background fix [++]
//make everything responsive [+++]
//spotify nowplaying [++]
// navbar routing [++]

import React from 'react';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Projects from 'components/Projects';
import About from 'components/About';
import Epilogue from 'components/Epilogue';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Epilogue/>
    <Footer/>
    </>
  );
};

export default App;