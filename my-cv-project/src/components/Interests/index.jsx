import styles from "./index.module.scss";

export default function Interests() {
  return (
    <section className={styles.section}>
      <div className={styles.konteyner}>
        <h1 className={styles.basliq}>INTERESTS</h1>

        <div className={styles.sebekeler}>
          <div className={`${styles.kart} ${styles.mavikart}`}>
            <div className={styles.mezmun}>
              <h3>Sport</h3>
              <p>
                I am passionate about various sports and enjoy staying active
                through regular workouts. Physical activity helps improve my
                strength and reduces stress.
              </p>
            </div>
          </div>

          <div className={`${styles.kart} ${styles.sarikart}`}>
            <div className={styles.mezmun}>
              <h3>Music</h3>
              <p>
                Music is an essential part of my life. I enjoy listening to
                various genres and sometimes even create my own music as a way
                to express my creativity.
              </p>
            </div>
          </div>

          <div className={`${styles.kart} ${styles.cehrayikart}`}>
            <div className={styles.mezmun}>
              <h3>Film Watching</h3>
              <p>
                Watching films is not just a hobby for me, but a way to explore
                different cultures and perspectives, helping me gain a deeper
                understanding of the world.
              </p>
            </div>
          </div>

          <div className={`${styles.kart} ${styles.aciqmavikart}`}>
            <div className={styles.mezmun}>
              <h3>Reading Books</h3>
              <p>
                Books are a gateway to discovering new worlds, exploring diverse
                ideas, and continuously improving myself. I find inspiration and
                knowledge through reading.
              </p>
            </div>
          </div>

          <div className={`${styles.kart} ${styles.yasilkart}`}>
            <div className={styles.mezmun}>
              <h3>Gaming (Mobile and PC)</h3>
              <p>
                Gaming is a fun and engaging hobby that also helps me improve my
                problem-solving and strategic thinking skills. It teaches me
                perseverance and creativity.
              </p>
            </div>
          </div>

          <div className={`${styles.kart} ${styles.benovseyikart}`}>
            <div className={styles.mezmun}>
              <h3>Social Activities</h3>
              <p>
                Social activities allow me to connect with people, make new
                friends, and contribute to my community. I enjoy being involved
                in different events and initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
