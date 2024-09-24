import React from "react";

import styles from "./HeroCard.module.css";
import ABUBanner from "../ABUBanner/ABUBanner";

const HeroCard = ({ formType }) => {
  return (
    <main className={styles['hero--card']}>
    <div className={styles.hero__content}>
      <ABUBanner type={'staff-pages'}/>
      <h1 className={styles.hero__heading}>ABU STAFF HOUSING MANAGEMENT</h1>
    </div>
    <h2>{formType}</h2>
    </main>
  );
};

export default HeroCard;
