import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>Hi, I’m <span>Jawad Mansoor</span></h1>
        <p className={styles.subtitle}>
          I build clean and simple applications using Flutter. Welcome to my portfolio.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.cta} href="#projects">See Projects</a>
          <a className={styles.ctaAlt} href="#contact">Contact Me</a>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/profile.jpg" alt="Profile" className={styles.avatar} />
      </div>
    </div>
  );
}
