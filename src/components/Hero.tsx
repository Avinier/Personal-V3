import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className='bg-background'>
    <div className=' w-[75%] mx-auto my-[250px]'>
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
            I'm a cse student and builder focused on deep learning and software dev and design. I'm based in Mumbai, studying in NMIMS University.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            I'm currently building my startup <a href="https://site.quantumsenses.com" className='underline'>SuperServerAI</a> with my frnds, along with several personal projects in ai/dl space.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            Check out my <a href="https://github.com/Avinier?tab=repositories" className="underline">work</a> and <a href="/writings" className="underline">writings</a>.
          </p>
          <p>
            See more on my <a href="https://docs.google.com/document/d/e/2PACX-1vRHA8mSTTW8dV4aS6bub4olf1Ea-0kR0Dd2Yl_syu9ue-ujQTLxQghRTvNUpAcOyA/pub" className="underline">resume</a> or contact me at <a href="mailto:avinier@proton.me" className="underline">avinier@proton.me</a>.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
