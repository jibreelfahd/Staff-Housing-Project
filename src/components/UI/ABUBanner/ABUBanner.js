import React from "react";

import styles from "./ABUBanner.module.css";

import ABULOGO from "../../../assets/ABULOGO.png";
import ABULOGO2 from "../../../assets/ABU Logo.png";

const ABUBanner = (prop) => {
  let bannerImage;
  let bar1;
  let bar2;
  let bar3;

  if (prop.type === "staff-pages") {
    bannerImage = <img src={ABULOGO} alt="Ahmadu Bello University Logo" />
    bar1 = <div className={styles.hero__bar1}></div>;
    bar2 = <div className={styles.hero__bar2}></div>;
    bar3 = <div className={styles.hero__bar3}></div>;
  }

  if (prop.type === "admin-pages") {
    bannerImage = <img src={ABULOGO2} alt="Ahmadu Bello University Logo" />
    bar1 = <div className={styles.hero__bar4}></div>;
    bar2 = <div className={styles.hero__bar5}></div>;
    bar3 = <div className={styles.hero__bar6}></div>;
  }
  return (
    <div className={styles.banner}>
      {bannerImage}
      {bar1}
      {bar2}
      {bar3}
    </div>
  );
};

export default ABUBanner;
