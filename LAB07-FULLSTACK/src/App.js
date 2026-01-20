/*import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./App.module.css";

function App() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Taskify",
      description: "A minimal task manager app to track daily tasks.",
      tech: ["React", "CSS Modules", "LocalStorage"],
      link: "#"
    },
    {
      id: 2,
      title: "WeatherDash",
      description: "A simple weather dashboard using OpenWeather API.",
      tech: ["React", "Fetch API", "Responsive UI"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio+ (this site)",
      description: "My personal portfolio built with React to showcase projects.",
      tech: ["React", "CSS Modules", "Deployment"],
      link: "#"
    }
  ];

  return (
    <div className={dark ? `${styles.app} ${styles.dark}` : styles.app}>
      <Navbar onToggleDark={() => setDark(!dark)} dark={dark} />
      <main className="container">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects projects={projects} /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} MyPortfolio+. Built with React.
      </footer>
    </div>
  );
}

export default App;*/


import React from "react";

function App() {
  const foods = ["Chicken", "Biryani", "Pasta"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Favourite Foods</h1>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "20px" }}>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
