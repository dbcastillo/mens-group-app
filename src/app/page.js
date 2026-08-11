"use client";

import { useState } from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/Homepage";

export default function Home() {
  const [name, setName] = useState("");

  function handleLogin(userName) {
    setName(userName);
  }

  function handleLogout() {
    setName("");
  }

  if (!name) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <HomePage name={name} onLogout={handleLogout} />;
}