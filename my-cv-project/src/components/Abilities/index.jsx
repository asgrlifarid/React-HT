import styles from "./index.module.scss";

export default function Abilities() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>My Advanced Skills</h1>
      <div className={styles.grid}>
        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>AutoCad</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "90%" }} />
          </div>
        </div>

        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>AutoDesk</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "85%" }} />
          </div>
        </div>

        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>Excel</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "80%" }} />
          </div>
        </div>

        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>Solid Works</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "75%" }} />
          </div>
        </div>

        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>Civil</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "85%" }} />
          </div>
        </div>

        <div className={styles.bacarig}>
          <h3 className={styles.bacarigAd}>Figma</h3>
          <div className={styles.yasilxett}>
            <div className={styles.yasil} style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
