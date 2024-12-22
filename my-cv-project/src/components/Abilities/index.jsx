import styles from "./index.module.scss";

export default function Abilities() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Advanced Skills</h1>
      <div className={styles.grid}>
        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>AutoCad</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "90%" }} />
          </div>
        </div>

        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>AutoDesk</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "85%" }} />
          </div>
        </div>

        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>Excel</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "80%" }} />
          </div>
        </div>

        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>Solid Works</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "75%" }} />
          </div>
        </div>

        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>Civil</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "85%" }} />
          </div>
        </div>

        <div className={styles.skillItem}>
          <h3 className={styles.skillName}>Figma</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
