"use client";

import { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/Homepage";

export default function Home() {
    const [name, setName] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const savedName = sessionStorage.getItem("mensGroupUser");

        if (savedName) {
            setName(savedName);
        }

        setHasLoaded(true);
    }, []);

    function handleLogin(userName) {
        sessionStorage.setItem("mensGroupUser", userName);
        setName(userName);
    }

    function handleLogout() {
        sessionStorage.removeItem("mensGroupUser");
        setName("");
    }

    if (!hasLoaded) {
        return null;
    }

    if (!name) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return <HomePage name={name} onLogout={handleLogout} />;
}