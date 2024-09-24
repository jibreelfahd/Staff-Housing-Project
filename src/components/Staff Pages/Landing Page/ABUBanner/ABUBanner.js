import React from "react";

import styles from "./ABUBanner.module.css";

import ABULOGO from '../../../../assets/ABULOGO.png';

const ABUBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={ABULOGO} alt="Ahmadu Bello University Logo" />
      <div className={styles.hero__bar1}></div>
      <div className={styles.hero__bar2}></div>
      <div className={styles.hero__bar3}></div>
    </div>
  );
};

export default ABUBanner;
