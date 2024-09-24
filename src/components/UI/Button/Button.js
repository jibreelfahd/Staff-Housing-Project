import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={styles.btn}>{props.btnType}</button>
  )
}

export default Button;