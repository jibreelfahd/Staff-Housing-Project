import React from "react";

import styles from "./RequestBlock.module.css";

const RequestBlock = ({ requestStatus, requestType, staffID, time }) => {
  let content = (
    <div className={styles.request__main}>
      <li className={styles.request__list}>
        <p className={styles.left}>{requestType}</p>
        <p>{staffID}</p>
      </li>
      <p className={styles.time}>{time} minutes ago</p>
    </div>
  );

  if (requestStatus === "checked") {
    content = (
      <div className={styles.request__main__checked}>
        <li className={styles.request__list}>
          <p className={styles.left}>{requestType}</p>
          <p>{staffID}</p>
        </li>
        <p className={styles.time}>{time} minutes ago</p>
      </div>
    );
  } 
  
  if (requestStatus === "maintenance") {
    content = (
      <div className={styles.request__main__maintenance}>
        <li className={styles.request__list}>
          <p className={styles.left}>{requestType}</p>
          <p>{staffID}</p>
        </li>
        <p className={styles.time}>{time} minutes ago</p>
      </div>
    );
  }
  
  if (requestStatus === "retirement") {
    content = (
      <div className={styles.request__main__retirement}>
        <li className={styles.request__list}>
          <p className={styles.left}>{requestType}</p>
          <p>{staffID}</p>
        </li>
        <p className={styles.time}>{time} minutes ago</p>
      </div>
    );
  }
  return <>{content}</>;
};

export default RequestBlock;
