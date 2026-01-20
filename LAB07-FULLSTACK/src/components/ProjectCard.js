import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, tech = [], link }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <p className={styles.desc}>{description}</p>

      <div className={styles.tech}>
        {tech.map((t, i) => <span key={i} className={styles.tag}>{t}</span>)}
      </div>

      <div className={styles.actions}>
        <a className={styles.viewBtn} href={link}>View</a>
      </div>
    </article>
  );
}
