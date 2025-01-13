import React from "react";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main>
      <section id={styles.home}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.homeInfo}>
                <h4>Process Visa Without Within Hours</h4>
                <h1>Immigrations & Visa Consultation</h1>
                <button>Book Consultancy</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://preview.colorlib.com/theme/immigration/img/header-img.png"
                alt="Header"
              />
            </div>
          </div>
        </div>
      </section>
      
      <footer
        style={{
          backgroundColor: "#555555",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="footerInfo">
                <p>
                  Copyright ©2025 All rights reserved | This template is made
                  with by{" "}
                  <span style={{ color: "rgb(245, 33, 0)" }}>Colorlib</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
