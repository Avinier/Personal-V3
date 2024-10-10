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
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">October is my climax month. Things I do in the next 31 days are gonna define my summer&#39;25. Idk how I&#39;m gonna do it, with college judo personal life...but I have to. Every second counts. No do overs. <a href="https://t.co/WVaoh6uLWV">https://t.co/WVaoh6uLWV</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1840770451645337927?ref_src=twsrc%5Etfw">September 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Don&#39;t really believe in regrets, but something which stings me is not having any exposure in robotics/hardware/manufacturing. Time to change that.</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1697326252187857315?ref_src=twsrc%5Etfw">August 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One major L for Humanity happened recently😔<br><br>Researchers at <a href="https://twitter.com/CERN?ref_src=twsrc%5Etfw">@CERN</a> discovered that anti-matter &quot;falls down&quot; in reaction to gravity, which was a HUGE disappointment.<br><br>Due to this, our most promising theory (Alcubierre Drive) for the possibility of Interstellar Travel has died :( <a href="https://t.co/140dhHb5oe">pic.twitter.com/140dhHb5oe</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1711095948032856109?ref_src=twsrc%5Etfw">October 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Bombay/Acc is not just Mumbai, includes the whole of the mid-western coast. With Ahemdabad, Surat, Mumbai, Pune etc.<br><br>These cities have historically been trade partners, and future infra-projects and common govt (b/w the states) policies will acc the connectivity and growth <a href="https://t.co/nmlAdZzQru">https://t.co/nmlAdZzQru</a> <a href="https://t.co/48JqB305V0">pic.twitter.com/48JqB305V0</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1736090945878454404?ref_src=twsrc%5Etfw">December 16, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Touched grass (and whatnot), wilderness is goood. <br><br>Textures of Nature is so fascinating, He really built it with elegance <a href="https://t.co/DRvyXiTb9L">pic.twitter.com/DRvyXiTb9L</a></p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1740367093525287422?ref_src=twsrc%5Etfw">December 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">just build bhenchod</p>&mdash; Avinier 🐉 (@avinierx) <a href="https://twitter.com/avinierx/status/1748378587387072665?ref_src=twsrc%5Etfw">January 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  ];

  const [randomTweet, setRandomTweet] = useState<string>('');
  const [key, setKey] = useState<number>(0);

  const getRandomTweet = (): string => {
    const randomIndex = Math.floor(Math.random() * tweetEmbeds.length);
    return tweetEmbeds[randomIndex];
  };

  const loadTwitterEmbed = () => {
    // Clear existing tweets
    const tweetContainer = document.querySelector(`.${styles.twitterTweetWrapper}`);
    if (tweetContainer) {
      tweetContainer.innerHTML = randomTweet;
    }

    // Remove existing script if any
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script and ensure it loads
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.twttr) {
        // @ts-ignore
        window.twttr.widgets.load(tweetContainer);
      }
    };
    document.body.appendChild(script);
  };

  const changeTweet = () => {
    const newTweet = getRandomTweet();
    setRandomTweet(newTweet);
    setKey(prevKey => prevKey + 1);
    
    // Small delay to ensure state is updated before loading the new tweet
    setTimeout(loadTwitterEmbed, 100);
  };

  useEffect(() => {
    const initialTweet = getRandomTweet();
    setRandomTweet(initialTweet);
    
    // Load initial tweet
    setTimeout(loadTwitterEmbed, 100);

    const interval = setInterval(changeTweet, 30000);
    return () => {
      clearInterval(interval);
      // Cleanup script on unmount
      const script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (script) script.remove();
    };
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
