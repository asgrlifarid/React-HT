import styles from "./index.module.scss";

export default function Address() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Address</h3>
            <p className={styles.details}>
              London , Baker street
              <br />
              221B
            </p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Lets talk us</h3>
            <p className={styles.details}>+994 50 2731773</p>
            <p className={styles.details}>+994 50 2731773</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Send us email</h3>
            <p className={styles.details}>waka.bayashi@example.com</p>
            <p className={styles.details}>wakabayashi@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
