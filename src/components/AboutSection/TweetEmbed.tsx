import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from 'styles/about.module.css';

const tweetIds = [
  '1838271504720560419',
  '1793880023675650529',
  '1796604369275908304',
  '1824686491282362600',
  '1825064216811688053',
  '1827599420936081868',
  '1836504937460613579',
  '1838620588144783662',
  '1841551077688410501',
  '1840770451645337927',
  '1697326252187857315',
  '1711095948032856109',
  '1736090945878454404',
  '1740367093525287422',
  '1748378587387072665',
  '1845088774583353349',
  '1845873193627889674',
  '1845448718817833264',
  '2058580107363766442',
  '2054577592188207277',
  '2052409220746846300',
  '2040845469627367476',
];

const TweetEmbedContainer = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(() =>
    Math.floor(Math.random() * tweetIds.length)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const renderTweet = useCallback(() => {
    const twttr = (window as any).twttr;
    if (!twttr?.widgets || !containerRef.current) return;

    containerRef.current.innerHTML = '';
    twttr.widgets.createTweet(tweetIds[currentIndex], containerRef.current, {
      theme: 'light',
      width: 300,
      conversation: 'none',
      dnt: true,
    });
  }, [currentIndex]);

  useEffect(() => {
    const twttr = (window as any).twttr;
    if (twttr?.widgets) {
      renderTweet();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        (window as any).twttr?.ready(() => renderTweet());
      };
      document.body.appendChild(script);
    }
  }, [renderTweet]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tweetIds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tweetContainer}>
      <div ref={containerRef} className={styles.twitterTweetWrapper} />
    </div>
  );
};

export default TweetEmbedContainer;
