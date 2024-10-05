import React, {useState} from 'react';

const Epilogue: React.FC = () => {
  return (
    <section className='bg-background'>
    <div className=' w-[75%] mx-auto'>
    <h1 className="font-heading text-4xl text-text text-right">Epilogue</h1>
    <h4 className='font-body text-lg italic mb-[50px] text-right'>Before going.</h4>
    <div className="grid grid-cols-3 my-[50px] gap-10 text-text font-body text-lg">
        <div className="space-y-2 text-justify">
          <p>
            I'm a cse student and builder focused on deep learning and software dev and design. I'm currently based in Mumbai, studying in NMIMS University.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            I'm currently working on my startup <a href="https://site.quantumsenses.com" className='underline'>SuperServerAI</a> with my frnds, along with several personal projects in ai/ml space.
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            Check out my <a href="https://github.com/Avinier?tab=repositories" className="underline">work</a> and <a href="#" className="underline">writings</a>.
          </p>
          <p>
            See more on my <a href="#" className="underline">resume</a> or contact me at <a href="mailto:avinierone@gmail.com" className="underline">avinierone@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Epilogue;