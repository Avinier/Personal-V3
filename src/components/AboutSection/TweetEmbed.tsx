import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from 'styles/about.module.css';

const TweetEmbedContainer = () => {
  const tweetEmbeds = [
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">deep learning worked.<br><br>~ sama</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1838271504720560419?ref_src=twsrc%5Etfw">September 23, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="und" dir="ltr">GM <a href="https://t.co/VJG3zDgov8">pic.twitter.com/VJG3zDgov8</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1793880023675650529?ref_src=twsrc%5Etfw">May 24, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Mumbai dabbawallas don&#39;t know english, but they visually memorize the code written on the dabba and deliver it accordingly. <br>Most ML engineers don&#39;t know the math behind algorithms, or their underlying workings, but know when to use what algorithm accordingly.<br>I&#39;m an ML-Dabbawala <a href="https://t.co/eN5sDbNOFC">pic.twitter.com/eN5sDbNOFC</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1796604369275908304?ref_src=twsrc%5Etfw">May 31, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;We built the fiction that social security was a pension system and not an intergenerational Ponzi scheme&quot;<br><br>~ Peter Theil on JRE 😭</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1824686491282362600?ref_src=twsrc%5Etfw">August 17, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This was in 2010, when UStream was a thing (now IBM video), and Kanye became the first major artist to ever perform a livestream/QnA session.<br><br>Crazy to imagine that no one interacted in this format that time, and a decade later, everybody does this. <a href="https://t.co/Yr6pf6YIws">https://t.co/Yr6pf6YIws</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1825064216811688053?ref_src=twsrc%5Etfw">August 18, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">tailwindcss is the best thing that&#39;s happened to frontend development</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1827599420936081868?ref_src=twsrc%5Etfw">August 25, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In my mid-20s, I&#39;m gonna go off. 4 months, northeast-uk-himachal-kashmir, only villages, no smartphone, analog camera, tape recorder, diary, minimal social media, frugal budget, one bag, some books, no meds just good health and strength <a href="https://t.co/LiYt9ceeyM">pic.twitter.com/LiYt9ceeyM</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1836504937460613579?ref_src=twsrc%5Etfw">September 18, 2024</a></blockquote>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Finally, it&#39;s happening.<br><br>This cool project, which my 3 friends and I had conjured up in a hackathon (and won), has now become a full-fledged product which we aim to offer businesses who need a efficient cloud solution, without facing the scary-ahh goliath, ie AWS.<br><br>Check it out <a href="https://t.co/Zo4slKHPyc">https://t.co/Zo4slKHPyc</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1838620588144783662?ref_src=twsrc%5Etfw">September 24, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">nothing more orgasmic than a productive day, thank god for gandhi</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1841551077688410501?ref_src=twsrc%5Etfw">October 2, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">October is my climax month. Things I do in the next 31 days are gonna define my summer&#39;25. Idk how I&#39;m gonna do it, with college judo personal life...but I have to. Every second counts. No do overs. <a href="https://t.co/WVaoh6uLWV">https://t.co/WVaoh6uLWV</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1840770451645337927?ref_src=twsrc%5Etfw">September 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  ];

  const [randomTweet, setRandomTweet] = useState<string>('');
  const [key, setKey] = useState<number>(0);

  const getRandomTweet = (): string => {
    const randomIndex = Math.floor(Math.random() * tweetEmbeds.length);
    return tweetEmbeds[randomIndex];
  };

  const loadTwitterEmbed = () => {
    // Remove existing script if any
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    // Add new script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const changeTweet = () => {
    setKey(prevKey => prevKey + 1);
    setRandomTweet(getRandomTweet());
    setTimeout(loadTwitterEmbed, 100);
  };

  useEffect(() => {
    setRandomTweet(getRandomTweet());
    loadTwitterEmbed();

    const interval = setInterval(changeTweet, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tweetContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className={styles.twitterTweetWrapper} 
            dangerouslySetInnerHTML={{ __html: randomTweet }} 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


export default TweetEmbedContainer;

