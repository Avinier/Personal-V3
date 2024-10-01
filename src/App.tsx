//TODO:
// fix projects.tsx slide bug [++]
// ai generated logo + assets [+++]
// copywriting. [+++]
// projects.tsx colors [+]
// about section [+++]
//epilogue [++]
//footer [+]
//grainy background fix [++]
//make everything responsive [+++]

import React from 'react';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Projects from 'components/Projects';
import About from 'components/About';

const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    </>
  );
};

export default App;