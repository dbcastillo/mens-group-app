"use client";

import styles from "./Homepage.module.css";
import { useRouter } from "next/navigation";

export default function HomePage({ name, onLogout }) {
    const router = useRouter();
    const rooms = [
        {
            name: "Spirituality",
            caption: "Let's grow in Christ daily!",
            icon: "✝",
        },
        {
            name: "Fitness",
            caption: "Let's honor God with our health!",
            icon: "↔",
        },
        {
            name: "Purity",
            caption: "Let's honor God with our bodies!",
            icon: "♡",
        },
        {
            name: "Finances",
            caption: "Let's steward our money well!",
            icon: "↗",
        },
        {
            name: "Prayer",
            caption: "Let's pray for each other!",
            icon: "♢",
        },
        {
            name: "Hangout",
            caption: "Fun fellowship ideas!",
            icon: "○",
        },
    ];

    return (
        <main className={styles.homePage}>
            <nav className={styles.navbar}>
                <button
                    className={styles.menuButton}
                    aria-label="Open menu"
                >
                    ☰
                </button>

                <div className={styles.logo}>
                    <span>✝</span>
                </div>

                <button
                    className={styles.logoutButton}
                    onClick={onLogout}
                    aria-label="Sign out"
                >
                    ↪
                </button>
            </nav>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Welcome, {name}!</h1>

                    <p>
                        The goal here is simple... let's grow together and
                        encourage each other to be the men God created us to be.
                    </p>
                </div>
            </section>

            <section className={styles.roomsSection}>
                <h2>Pick a Chat Room</h2>

                <div className={styles.titleDivider}>
                    <span />
                    <div>✝</div>
                    <span />
                </div>

                <div className={styles.roomGrid}>
                    {rooms.map((room) => (
                        <button
                            key={room.name}
                            className={styles.roomCard}
                            onClick={() => {
                                if (room.name === "Fitness") {
                                    router.push("/fitness");
                                }
                            }}
                        >
                            <div className={styles.roomIcon}>
                                {room.icon}
                            </div>

                            <h3>{room.name}</h3>

                            <p>{room.caption}</p>

                            <div className={styles.arrow}>
                                →
                            </div>
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
}