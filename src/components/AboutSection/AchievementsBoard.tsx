import React from 'react';

export default function AchievementsBoard () {
    return (
        <section className='w-full md:w-[280px] h-[300px] bg-gray overflow-hidden relative'>
            <h2 className='font-heading text-slate-400 text-lg text-center pt-2 pb-1 bg-gray relative z-10'>What I'm Upto</h2>
            <iframe
                src="https://getssai.com"
                title="ssai"
                className="w-full h-[calc(100%-36px)] border-0"
                sandbox="allow-scripts allow-same-origin"
            />
        </section>
    )
}
