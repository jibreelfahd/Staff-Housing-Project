import React from "react";
import { Link } from "react-router-dom";

import styles from "./Content.module.css";

//Image Imports
import Quaters from "../../../../assets/Quaters.png";
import TriangleButton from "../../../../assets/Vector.png";
import PictureOne from "../../../../assets/picture1.png";
import PictureTwo from "../../../../assets/picture2.png";

const Content = () => {
  return (
    <section id={"features"}>
      <h1 className={styles.features}>FEATURES</h1>
      <div className={styles.showcase}>
        <div className={styles.showcase__single}>
          <img src={Quaters} alt="Showcase" />
          <Link to={'/request/application'} className={styles.showcase__link}>
            <h2>Apply for Accomodation</h2>
            <div className={styles.showcase__content}>
              <p>
                This offer is for new staff of Ahmadu Bello University only.
              </p>
              <div className={styles.vector__button}>
                <img src={TriangleButton} alt="Triangle Button" />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.showcase__single}>
          <img src={PictureOne} alt="Showcase" />
          <Link to={'/request/maintenance'} className={styles.showcase__link}>
            <h2>Maintenance Request</h2>
            <div className={styles.showcase__content}>
              <p>
                Place your complaints and request for quick maintenance service
                here.
              </p>
              <div className={styles.vector__button}>
                <img src={TriangleButton} alt="Triangle Button" />
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.showcase__single}>
          <img src={PictureTwo} alt="Showcase" />
          <Link to={'/request/retirement'} className={styles.showcase__link}>
            <h2>Retirement Notice</h2>
            <div className={styles.showcase__content}>
              <p>
                Submit your retirement notice here. We will respond to your
                application promptly.
              </p>
              <div className={styles.vector__button}>
                <img src={TriangleButton} alt="Triangle Button" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
