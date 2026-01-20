import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
