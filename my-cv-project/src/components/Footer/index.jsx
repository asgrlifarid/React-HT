import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © CodeeFly 2023 | All Rights Reserved
        </div>
        <nav className={styles.nav}>
          <a
            href="https://www.ziprecruiter.global/en/terms"
            className={styles.link}
          >
            Trams & Condition
          </a>
          <a
            href="https://www.ziprecruiter.global/en/privacy"
            className={styles.link}
          >
            Privacy Policy
          </a>
          {/* <a href="#" className={styles.link}>
            Sitemap
          </a> */}
        </nav>
      </div>
    </footer>
  );
}
