import React from "react";

import styles from './Button.module.css';

const Button = ({ btnType }) => {
  return (
    <button className={`${btnType === 'reject' ? styles.btn__reject : styles.btn}`}>{btnType}</button>
  )
}

export default Button;