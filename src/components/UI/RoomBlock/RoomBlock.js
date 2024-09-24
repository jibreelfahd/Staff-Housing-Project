import React from "react";

import styles from "./RoomBlock.module.css";

const RoomBlock = ({ area, index }) => {
  return (
    <div className={styles.area__container}>
        <div className={styles.houses} key={index}>
          <h2>{area.name}</h2>
          <div className={styles.house__container}>
            {area.houses.map((house) => (
              <div key={house.number} className={styles.single__house}>
                {house.number}
              </div>
            ))}
          </div>
          <div className={styles.status}>
            <span className={styles.statusBox}></span> Occupied:{" "}
            {area.houses.filter((h) => h.status === "occupied").length}
            <span className={styles.statusBox}></span> Vacant:{" "}
            {area.houses.filter((h) => h.status === "vacant").length}
            <span className={styles.statusBox}></span> Needs Maintenance:{" "}
            {area.houses.filter((h) => h.status === "maintenance").length}
          </div>
        </div>
    </div>
  );
};

export default RoomBlock;
