import React from "react";

import styles from "./AdminHeader.module.css";

const AdminHeader = ({ headerType}) => {
  return (
    <nav className={styles.nav}>
      <span>{headerType}</span>
    </nav>
  );
};

export default AdminHeader;
