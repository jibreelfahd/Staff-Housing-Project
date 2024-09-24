import React from "react";

import styles from "./HeroCard.module.css";
import ABUBanner from "../ABUBanner/ABUBanner";

const HeroCard = () => {
  return (
    <div className={styles["hero--card"]}>
      <ABUBanner />
      <h1 className={styles.hero__heading}>ABU STAFF HOUSING MANAGEMENT</h1>
      <p className={styles.hero__paragraph}>Accomodating Excellence...</p>
      <button className={styles.btn}>Apply Now</button>
    </div>
  );
};

export default HeroCard;
