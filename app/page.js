import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      {/* page 1 */}
      <div className={[styles.opening, styles.page].join(" ")}>
        <span>scroll and fly !</span>
      </div>

      {/* page 2 */}
      <div className={[styles.intro, styles.page].join(" ")}>
        <span>
          i like to do things that nobody else could , would or should !
        </span>
      </div>

      {/* page 3 */}
      <div className={[styles.name, styles.page].join(" ")}>
        <h1>mohammad dehgani</h1>
        <span>aka mr.j</span>
      </div>

      {/* page 4 */}
      <div className={[styles.skills, styles.page].join(" ")}>
        <div></div>
        <div></div>
      </div>

      {/* page 5 */}
      <div className={[styles.experience, styles.page].join(" ")}></div>

      {/* page 6 */}
      <div className={[styles.contact, styles.page].join(" ")}>
        <span>contact</span>
      </div>
    </main>
  );
}
