import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p>
        I am a app developer learning Flutter and building small projects to sharpen my skills.
        I like clean UI, responsive layouts, and writing maintainable code.
      </p>

      <h3 className={styles.sub}>Skills</h3>
      <ul className={styles.skills}>
        <li>Flutter</li>
        <li>Figma</li>
        <li>C++</li>
        <li>Git & GitHub</li>
      </ul>

      <h3 className={styles.sub}>Interests</h3>
      <p>New and Upcoming Techonlogies</p>
    </div>
  );
}
