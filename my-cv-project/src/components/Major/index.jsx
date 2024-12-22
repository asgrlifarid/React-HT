import React from "react";
import img from "../../assets/Oliver Atom.jpg";
import styles from "./index.module.scss";

const Major = () => {
 
  const pdfUrl = "../../assets/Resume.pdf"; 

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf"; 
    link.click();
  };

  return (
    <div className="container">
      <div>
        <div className={styles.container}>
          <div className={styles.contentSection}>
            <h1 className={styles.title}>
              HI, I'M FARID!
              <br />
              CREATIVE
            </h1>
            <p className={styles.description}>
              I am a 19 year old Azerbaijani young man who studied at AZMIU and
              studied CODE at the same time, and my goal is to complete the
              assignment in the most neat, innovative and error-free way
              possible. And don't forget, blonde is a priority!
            </p>
            <div className={styles.buttons}>
 
              <button className={styles.btnPrimary} onClick={handleDownload}>
                Download CV
              </button>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.hexagonBorder} />
              <div className={styles.hexagonBorder} />
              <div className={styles.profileImage}>
                <img src={img} alt="Portfolio Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
