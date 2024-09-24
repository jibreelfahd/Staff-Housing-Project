import React from "react";

import styles from "./Content.module.css";

//Image Imports
import Quaters from "../../../../assets/Quaters.png";
import TriangleButton from "../../../../assets/Vector.png";
import PictureOne from "../../../../assets/picture1.png";
import PictureTwo from "../../../../assets/picture2.png";

const Content = () => {
  return (
    <>
      <h1 className={styles.features}>FEATURES</h1>
      <a href="/" className={styles.showcase}>
        <div className={styles.showcase__single}>
          <img src={Quaters} alt="Showcase" />
          <h2>Apply for Accomodation</h2>
          <div className={styles.showcase__content}>
            <p>This offer is for new staff of Ahmadu Bello University only.</p>
            <div className={styles.vector__button}>
              <img src={TriangleButton} alt="Triangle Button" />
            </div>
          </div>
        </div>
        <div className={styles.showcase__single}>
          <img src={PictureOne} alt="Showcase" />
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
        </div>
        <div className={styles.showcase__single}>
          <img src={PictureTwo} alt="Showcase" />
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
        </div>
      </a>
    </>
  );
};

export default Content;
