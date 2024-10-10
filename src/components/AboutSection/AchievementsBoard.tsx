import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AchievementsBoard () {
    const [hover, setHover] = useState(false);

    return (
        <section className='w-[280px] h-[300px] bg-gray'>
            <h2 className='font-heading text-slate-400 text-lg text-center pt-5'>What I'm Upto</h2>
        </section>
    )
}