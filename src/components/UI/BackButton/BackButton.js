import React from "react";

import styles from "./BackButton.module.css";

import Button from "../../../assets/Vector1.png";

const BackButton = () => {
  return (
    <button className={styles.back__button}>
    <img src={Button} alt="Button for going back to previous page" />
  </button>
  )
};

export default BackButton;