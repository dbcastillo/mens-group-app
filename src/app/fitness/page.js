"use client";

import { useRouter } from "next/navigation";

export default function FitnessPage() {
    const router = useRouter();

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#f8f5ef",
                position: "relative",
            }}
        >
            <button
                onClick={() => router.push("/")}
                aria-label="Go back"
                style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    width: "58px",
                    height: "58px",
                    zIndex: 10,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                }}
            />

            <img
                src="/images/fitness.jpeg"
                alt="Fitness chat room preview"
                style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "830px",
                    margin: "0 auto",
                }}
            />
        </main>
    );
}