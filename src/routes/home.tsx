import React from 'react';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Projects from 'components/Projects';
import About from 'components/About';
import Epilogue from 'components/Epilogue';
import Footer from 'components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Epilogue/>
    </>
  );
};

export default HomePage;