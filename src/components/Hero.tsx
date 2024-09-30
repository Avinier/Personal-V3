import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className='bg-background mb-0 min-h-screen'>
    <div className=' w-[80%] mx-auto my-[200px]'>
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
    <h4 className='font-body text-lg italic mb-[50px]'>I'm on a quest to become a master craftsman blah blah blah</h4>
    <div className="grid grid-cols-3 gap-6 text-text font-body text-lg">
        <div className="space-y-2">
          <p>
            I'm an engineer & designer focused on PCB development and mechatronics. I'm currently based in Los Angeles, building in the logic design space.
          </p>
        </div>
        <div className="space-y-2">
          <p>
            I'm a student at the USC Iovine and Young Academy studying engineering, design, and venture management, and a graduate of the Fab Academy.
          </p>
        </div>
        <div className="space-y-2">
          <p>
            This site holds my <a href="#" className="underline">work</a> and <a href="#" className="underline">writings</a>.
          </p>
          <p>
            See more on my <a href="#" className="underline">resume</a> or contact me at <a href="mailto:tawarner@usc.edu" className="underline">tawarner@usc.edu</a>.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;