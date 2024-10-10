import React, { useState, useEffect } from "react";

import styles from "./RoomBlock.module.css";

const RoomBlock = ({ area, status }) => {
  const [showStatus, setShowStatus] = useState(false);

  const houseStatus = area.houses.map((houses) => {
    return houses.status;
  });

  houseStatus.forEach((element) => {
    if (element === "vacant") {
      return console.log("THis is valid");
    }
  });

  useEffect(() => {
    if (status) {
      setShowStatus(true);
    }
  }, [status])

  return (
    <>
      <div className={styles.houses}>
        <h2>{area.name}</h2>
        <div className={styles.house__container}>
          {area.houses.map((house) => (
            <div
              key={house.number}
              className={`${styles.single__house} ${
                house.status === "occupied"
                  ? styles.occupied
                  : house.status === "maintenance"
                  ? styles.maintenance
                  : styles.vacant
              }`}
            >
              {house.number}
            </div>
          ))}
        </div>
        {showStatus && <div className={styles.status}>
          <div className={styles.single__status}>
            <span
              className={`${styles.statusBox} ${styles["occupied-status-box"]}`}
            ></span>{" "}
            Occupied:{" "}
            {area.houses.filter((h) => h.status === "occupied").length}
          </div>
          <div className={styles.single__status}>
            <span
              className={`${styles.statusBox} ${styles["vacant-status-box"]}`}
            ></span>{" "}
            Vacant: {area.houses.filter((h) => h.status === "vacant").length}
          </div>
          <div className={styles.single__status}>
            <span
              className={`${styles.statusBox} ${styles["maintenance-status-box"]}`}
            ></span>{" "}
            Needs Maintenance:{" "}
            {area.houses.filter((h) => h.status === "maintenance").length}
          </div>
        </div>}
      </div>
    </>
  );
};

export default RoomBlock;
