import React from "react";

import styles from "./AdminHeader.module.css";

const AdminHeader = (props) => {
  return (
    <nav className={styles.nav}>
      <span>{props.headerType}</span>
    </nav>
  );
};

export default AdminHeader;
