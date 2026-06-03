import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className='bg-background'>
    <div className=' w-[75%] mx-auto my-[250px] relative'>
      <p className="absolute bottom-[-40px] left-0 font-mono text-xs text-slate-400">last updated: june 2025</p>
      <h1 className="text-4xl text-text font-heading font-bold">
      Hi! I'm Avinier, a{' '}
      <TypeAnimation
        sequence={[
          'programmer',
          1000,
          'designer',
          1000,
          'creator',
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
    <h4 className='font-body text-lg italic mb-[50px]'>I'm on a quest to become a master craftsman, be it in digital fabrication, art, or wealth creation</h4>
    <div className="grid grid-cols-3 gap-10 text-text font-body text-lg">
        <div className="space-y-2 text-justify">
          <p>
            I'm a cse grad, based out of Mumbai, specialising in agentic systems and deep learning applications.
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
