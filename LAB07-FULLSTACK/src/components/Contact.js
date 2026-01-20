import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    alert(`Thanks, ${form.name || "friend"}! Message received (demo).`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" rows="5" value={form.message} onChange={handleChange} />
        <button type="submit" className={styles.send}>Send Message</button>
      </form>
      <div className={styles.info}>
        <p><strong>Email:</strong> jmdev@gmail.com</p>
        <p><strong>Phone:</strong> +92 314 294 2223</p>
      </div>
    </div>
  );
}
