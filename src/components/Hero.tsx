import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className='bg-background'>
    <div className='w-[90%] md:w-[75%] mx-auto my-[120px] md:my-[250px] relative'>
      <p className="absolute bottom-[-40px] left-0 font-mono text-xs text-slate-400">last updated: june 2025</p>
      <h1 className="text-3xl md:text-4xl text-text font-heading font-bold">
        Hi! I'm Avinier, a{' '}
      </h1>
      <div className="h-[2.5rem] md:h-[3.25rem]">
        <TypeAnimation
          sequence={[
            'programmer.',
            1000,
            'designer.',
            1000,
            'creator.',
            1000,
          ]}
          wrapper="span"
          className="text-3xl md:text-4xl text-text font-heading font-bold"
          speed={50}
          repeat={Infinity}
        />
      </div>
    <h4 className='font-body text-base md:text-lg italic mt-4 mb-8 md:mb-[50px]'>I'm on a quest to become a master craftsman, be it in digital fabrication, art, or wealth creation</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-text font-body text-base md:text-lg">
        <div className="space-y-2 text-justify">
          <p>
            I'm a cse grad, based out of Mumbai. I've worked at <a href="https://x.com/upsurgelabs?lang=en" className="underline" target="_blank" rel="noopener noreferrer">UpsurgeLabs</a> and <a href="https://0xppl.com/" className="underline" target="_blank" rel="noopener noreferrer">0xPPL</a>, specialising in agentic systems and deep learning applications.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            I'm currently building <a href="https://getssai.com" className='underline'>ssai</a>, an ai employee for your devops tasks.
          </p>
          <p>
            Check out my <a href="https://github.com/Avinier?tab=repositories" className="underline">work</a>.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            let's talk, i'd love to <a href="https://cal.com/avinier" className="underline" target="_blank" rel="noopener noreferrer">chat</a>.
          </p>
          <p>
            See more on my <a href="https://drive.google.com/file/d/12_VHuxsRPwhCbz1UreuqxxIVckuU1lZv/view?usp=sharing" className="underline" target="_blank" rel="noopener noreferrer">resume</a> or contact me at <a href="mailto:adisubu.2410@gmail.com" className="underline">adisubu.2410@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
