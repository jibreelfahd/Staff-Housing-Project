import React from "react";

import styles from "./Header.module.css";
import ABULOGO from "../../../../assets/ABU Logo.png";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <div className={styles.ABU}>
          <img src={ABULOGO} alt="ABU Logo" />
          <span>Ahmadu Bello University</span>
        </div>
      </a>
      <ul>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
