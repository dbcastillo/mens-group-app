"use client";

import { useState } from "react";

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
    <main>
      <h1>Tuesday Men's Group</h1>

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

        {error && <p>{error}</p>}

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}