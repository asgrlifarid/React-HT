import React from 'react'
import styles from "./index.module.scss"
import img1 from "../../assets/imagesss (1).jpg"
import img2 from "../../assets/ezgif-4-0fe1580db5.jpg"
import img3 from "../../assets/css.jpg"
const Job = () => {
  return (
    <section className={styles.menuSection}>
      <div>
        <h1 className={styles.sectionTitle}>My works</h1>
        <div className={styles.menuGrid}>
          <div className={styles.menuItem}>
            <div className={styles.sekil}>
              <img src={img3} alt="" />
              <div className={styles.weight}>15 days ago</div>
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>Full CSS</h2>
              <p className={styles.ici}>
                Preparing projects with CSS with basic CSS knowledge.
              </p>
            </div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.sekil}>
              <img src={img2} alt="" />
              <div className={styles.weight}> 6 month ago</div>
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>Full HTML</h2>
              <p className={styles.ici}>
                Preparation of skeleton structure of projects through HTML.
              </p>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.sekil}>
              <img src={img1} alt="" />
              <div className={styles.weight}> 6 month ago</div>
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>Full JS</h2>
              <p className={styles.ici}>
                Excellent JS skills, writing any project in normal js and react js
                JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Job
