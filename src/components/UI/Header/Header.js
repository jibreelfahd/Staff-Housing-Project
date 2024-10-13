import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import ABULOGO from "../../../assets/ABU Logo.png";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.ABU}>
        <img src={ABULOGO} alt="ABU Logo" />
        <span>Ahmadu Bello University</span>
      </div>
      <ul>
        <li>
          <Link className={styles.home} to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
