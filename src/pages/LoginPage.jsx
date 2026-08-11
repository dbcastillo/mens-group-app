"use client";

import { useState } from "react";
import styles from "./LoginPage.module.css";

export default function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (password !== "Galatians") {
      setError("Incorrect password. Please try again.");
      return;
    }

    setError("");
    onLogin(name.trim());
  }

  return (
    <main className={styles.loginPage}>
      <section className={styles.hero}>
        <div className={styles.logoRow}>
          <span></span>

          <img
            src="/images/logo.png"
            alt="Tuesday Men's Group logo"
            className={styles.logo}
          />

          <span></span>
        </div>

        <p className={styles.welcome}>Welcome to</p>

        <h1>
          Tuesday
          <br />
          Men's Group
        </h1>

        <p className={styles.tagline}>
          ENCOURAGE. BUILD. WALK TOGETHER.
        </p>
      </section>

      <section className={styles.loginCard}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {error && (
            <p className={styles.errorMessage}>
              {error}
            </p>
          )}

          <button type="submit">
            Sign In
          </button>
        </form>

        <div className={styles.encouragement}>
          <span></span>
          <p>Let's encourage each other.</p>
          <span></span>
        </div>
      </section>

      <footer className={styles.verse}>
        <p>
          IRON SHARPENS IRON, AND ONE MAN SHARPENS ANOTHER.
        </p>

        <strong>PROVERBS 27:17</strong>

        <span></span>
      </footer>
    </main>
  );
}