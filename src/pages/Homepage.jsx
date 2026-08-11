"use client";

export default function HomePage({ name, onLogout }) {
  return (
    <main>
      <header>
        <h1>Welcome, {name}!</h1>

        <button onClick={onLogout}>
          Sign Out
        </button>
      </header>

      <p>
        The goal here is simple... let's grow together and encourage
        each other to be the men God created us to be.
      </p>

      <h2>Pick a Chat Room</h2>

      <div>
        <button>
          <h3>Spirituality</h3>
          <p>Let's grow in Christ daily!</p>
        </button>

        <button>
          <h3>Fitness</h3>
          <p>Let's honor God with our health!</p>
        </button>

        <button>
          <h3>Purity</h3>
          <p>Let's honor God with our bodies!</p>
        </button>

        <button>
          <h3>Finances</h3>
          <p>Let's steward our money well!</p>
        </button>

        <button>
          <h3>Prayer</h3>
          <p>Let's pray for each other.</p>
        </button>

        <button>
          <h3>Hangout</h3>
          <p>Fun fellowship ideas</p>
        </button>
      </div>
    </main>
  );
}