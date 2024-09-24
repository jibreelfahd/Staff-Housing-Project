import React from "react";

import styles from "./Footer.module.css";

import ABUBanner from "../ABUBanner/ABUBanner";

//Image Imports
import MessageLogo from "../../../../assets/🦆 icon _message square_.png";
import PhoneLogo from "../../../../assets/🦆 icon _Alternate Phone_.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <ABUBanner />
        <aside>
          Welcome to ABU Staff Housing Management, the dedicated platform
          designed to streamline the management of housing for the staff of
          Ahmadu Bello University. Our mission is to simplify and enhance the
          housing experience for university employees through a user-friendly
          and efficient system.
        </aside>
        <div>
          <div className={styles.contact}>
            <img src={PhoneLogo} alt="Phone Icon" />
            <p>+234 70 1000 3022</p>
          </div>

          <div className={styles.contact}>
            <img src={MessageLogo} alt="Message Icon" />
            <p>abustaffhousing@edu.ng</p>
          </div>
        </div>
      </div>
      <p>All Righs Reserved &copy; 2024</p>
    </div>
  );
};

export default Footer;
