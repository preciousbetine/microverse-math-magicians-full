import React from 'react';
import Styles from '@/styles/Home.module.scss';
import math from '@/assets/math.jpeg';

const Home = () => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <div>
        <h2 className={Styles.header}>Welcome to our page!</h2>
        <p>
          Math Magicians offers a state-of-the-art calculator,
          a collection of inspiring math quotes, and resources
          such as tutorials, videos, games, and puzzles to make
          math fun and accessible for all learners. We believe
          that math is a way of thinking and problem-solving that
          can benefit everyone in their daily lives. Join our
          community of math enthusiasts today and let the magic
          of mathematics inspire you!
        </p>
      </div>
      <img alt="" src={math} />
    </div>

  </div>
);

export default Home;
