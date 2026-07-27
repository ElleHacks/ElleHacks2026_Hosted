import React, { useState } from 'react';
import styles from './Hero.module.css';

import logoSquare from '../../assets/hero/logo square.png';
import candle from '../../assets/hero/Component 2.png';
import yellowBalloon from '../../assets/hero/yellow balloon.png';
import rightBalloon from '../../assets/hero/BallonsToTheRight.png';
import cupGirl from '../../assets/hero/cupGirl.png';
import leftMultipleBalloons from '../../assets/hero/MultipleBalloons.png';
import coffeeCup from '../../assets/hero/Component 12.png';
import cake from '../../assets/hero/Cake.png';
import mlhBadge from '../../assets/hero/mlh-trust-badge-2027-white.svg';

const Hero = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(${logoSquare})` }}
        />

        <div className={styles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.navLinks} ${isNavActive ? styles.active : ''}`}>
          <a href="#hero">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#iis">Interested In Sponsoring</a>
          <a href="#faq">FAQ</a>
          <a href="#location">Location</a>
          <a href="#contactus">Contact Us</a>
        </div>
      </header>

      <div className={styles.mainContent}>
        <h1 className={styles.title}>ElleHacks 2027</h1>
        <p className={styles.subtitle}>
          To Be Announced · In-person event · MLH Official Member
        </p>

        <a
          href="https://forms.gle/QshrSZ9ZgNYN3M1u8"
          className={styles.ctaButton}
        >
          <span className={styles.ctaText}>Hacker Interest Form</span>
        </a>

        <div className={styles.decorations}>
          <img src={candle} alt="Candle" className={styles.Candle} draggable="false" />
          <img src={yellowBalloon} alt="Yellow Balloon" className={styles.yellowBalloon} draggable="false" />
          <img src={rightBalloon} alt="Right Balloon" className={styles.rightBalloon} draggable="false" />
          <img src={cupGirl} alt="Girl holding coffee cup" className={styles.cupGirl} draggable="false" />
          <img src={leftMultipleBalloons} alt="Balloons" className={styles.leftmultipleBalloons} draggable="false" />
          <img src={coffeeCup} alt="Coffee Cup" className={styles.coffeeCup} draggable="false" />
          <img src={cake} alt="Cake" className={styles.cake} draggable="false" />
          <div className={styles.table}></div>
        </div>

        <div className={styles.MLHlogo}>
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mlhBadge}
              alt="Major League Hacking 2027 Hackathon Season"
              style={{ width: '100%' }}
              draggable="false"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;