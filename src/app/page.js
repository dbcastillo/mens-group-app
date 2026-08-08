import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            Men's Group App
          </h1>
        </div>
        <div className={styles.ctas}>
        </div>
      </main>
    </div>
  );
}
