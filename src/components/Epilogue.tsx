import React, {useState} from 'react';

const Epilogue: React.FC = () => {
  return (
    <section className='bg-background'>
    <div className=' w-[75%] mx-auto'>
    <h1 className="font-heading text-4xl text-text text-right">Epilogue</h1>
    <h4 className='font-body text-lg italic mb-[50px] text-right'>Before you go.</h4>
    <div className="grid grid-cols-3 my-[50px] gap-10 text-text font-body text-lg">
      
    <div className="space-y-2 text-justify">
          <p>
            I'm currently looking for summer internships, in the space of ai-engineering and software-dev. For more info, please check out my <a href="https://docs.google.com/document/d/e/2PACX-1vRHA8mSTTW8dV4aS6bub4olf1Ea-0kR0Dd2Yl_syu9ue-ujQTLxQghRTvNUpAcOyA/pub" className="underline">resume.</a> 
          </p>
        </div>
        <div className="space-y-2 text-justify">
          <p>
            I always love to interact with new people, from all industries/worlds. My curiosity is my sustenance. So let's connect!
          </p>
        </div>
        <div className="space-y-2 text-justify">
        <p>
            For fun conversations, you can dm me on <a href="https://x.com/avinierx" target='_blank' className='underline'>twitter/X</a> or send a req on my <a href='https://discord.com/users/1025039473932775485' className='underline'>discord</a>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Epilogue;