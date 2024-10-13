import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeroCard.module.css";
import ABUBanner from "../ABUBanner/ABUBanner";

const HeroCard = () => {
  return (
    <div className={styles["hero--card"]}>
      <ABUBanner />
      <h1 className={styles.hero__heading}>ABU STAFF HOUSING MANAGEMENT</h1>
      <p className={styles.hero__paragraph}>Accomodating Excellence...</p>
      <Link to={'request/application'} className={styles.btn}>Apply Now</Link>
    </div>
  );
};

export default HeroCard;
