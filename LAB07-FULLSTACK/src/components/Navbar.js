import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ onToggleDark, dark }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.brand} onClick={() => scrollTo("home")}>
        Jawad
      </div>

      <nav className={styles.nav}>
        <button className={styles.link} onClick={() => scrollTo("home")}>Home</button>
        <button className={styles.link} onClick={() => scrollTo("about")}>About</button>
        <button className={styles.link} onClick={() => scrollTo("projects")}>Projects</button>
        <button className={styles.link} onClick={() => scrollTo("contact")}>Contact</button>
        <button className={styles.toggle} onClick={onToggleDark}>
          {dark ? "LightMode" : "DarkMode"}
        </button>
      </nav>
    </header>
  );
}
