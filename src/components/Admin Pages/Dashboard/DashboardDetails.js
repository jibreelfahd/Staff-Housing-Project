import React from "react";

import styles from "./DashboardDetails.module.css";

import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import RoomBlock from "../../UI/RoomBlock/RoomBlock";

const DashboardDetails = () => {
  const areas = [
    {
      name: "Area A",
      houses: [
        { number: 1, status: "occupied" },
        { number: 2, status: "vacant" },
        { number: 3, status: "vacant" },
        { number: 4, status: "occupied" },
        { number: 5, status: "vacant" },
        { number: 6, status: "vacant" },
        { number: 7, status: "maintenance" },
        { number: 8, status: "maintenance" },
        { number: 9, status: "vacant" },
        { number: 10, status: "occupied" },
        { number: 11, status: "occupied" },
        { number: 12, status: "occupied" },
        { number: 13, status: "occupied" },
        { number: 14, status: "occupied" },
        { number: 15, status: "occupied" },
        { number: 16, status: "occupied" },
        { number: 17, status: "occupied" },
        { number: 18, status: "occupied" },
        { number: 19, status: "occupied" },
        { number: 20, status: "occupied" },
        { number: 21, status: "occupied" },
        { number: 22, status: "occupied" },
        { number: 23, status: "occupied" },
        { number: 24, status: "occupied" },
        { number: 25, status: "occupied" },
        { number: 26, status: "occupied" },
        { number: 27, status: "occupied" },
        { number: 28, status: "occupied" },
        { number: 29, status: "occupied" },
        { number: 30, status: "occupied" },
      ],
    },
    {
      name: "Area BZ",
      houses: [
        { number: 1, status: "occupied" },
        { number: 2, status: "vacant" },
        { number: 3, status: "vacant" },
        { number: 4, status: "occupied" },
        { number: 5, status: "vacant" },
        { number: 6, status: "vacant" },
        { number: 7, status: "maintenance" },
        { number: 8, status: "maintenance" },
        { number: 9, status: "vacant" },
        { number: 10, status: "occupied" },
        { number: 11, status: "occupied" },
        { number: 12, status: "occupied" },
        { number: 13, status: "occupied" },
        { number: 14, status: "occupied" },
        { number: 15, status: "occupied" },
        { number: 16, status: "occupied" },
        { number: 17, status: "occupied" },
        { number: 18, status: "occupied" },
        { number: 19, status: "occupied" },
        { number: 20, status: "occupied" },
        { number: 21, status: "occupied" },
        { number: 22, status: "occupied" },
        { number: 23, status: "occupied" },
        { number: 24, status: "occupied" },
        { number: 25, status: "occupied" },
        { number: 26, status: "occupied" },
        { number: 27, status: "occupied" },
        { number: 28, status: "occupied" },
        { number: 29, status: "occupied" },
        { number: 30, status: "occupied" },
      ],
    },
    {
      name: "Area F",
      houses: [
        { number: 1, status: "occupied" },
        { number: 2, status: "vacant" },
        { number: 3, status: "vacant" },
        { number: 4, status: "occupied" },
        { number: 5, status: "vacant" },
        { number: 6, status: "vacant" },
        { number: 7, status: "maintenance" },
        { number: 8, status: "maintenance" },
        { number: 9, status: "vacant" },
        { number: 10, status: "occupied" },
        { number: 11, status: "occupied" },
        { number: 12, status: "occupied" },
        { number: 13, status: "occupied" },
        { number: 14, status: "occupied" },
        { number: 15, status: "occupied" },
        { number: 16, status: "occupied" },
        { number: 17, status: "occupied" },
        { number: 18, status: "occupied" },
        { number: 19, status: "occupied" },
        { number: 20, status: "occupied" },
        { number: 21, status: "occupied" },
        { number: 22, status: "occupied" },
        { number: 23, status: "occupied" },
        { number: 24, status: "occupied" },
        { number: 25, status: "occupied" },
        { number: 26, status: "occupied" },
        { number: 27, status: "occupied" },
        { number: 28, status: "occupied" },
        { number: 29, status: "occupied" },
        { number: 30, status: "occupied" },
      ],
    },
    {
      name: "Area H",
      houses: [
        { number: 1, status: "occupied" },
        { number: 2, status: "vacant" },
        { number: 3, status: "vacant" },
        { number: 4, status: "occupied" },
        { number: 5, status: "vacant" },
        { number: 6, status: "vacant" },
        { number: 7, status: "maintenance" },
        { number: 8, status: "maintenance" },
        { number: 9, status: "vacant" },
        { number: 10, status: "occupied" },
        { number: 11, status: "occupied" },
        { number: 12, status: "occupied" },
        { number: 13, status: "occupied" },
        { number: 14, status: "occupied" },
        { number: 15, status: "occupied" },
        { number: 16, status: "occupied" },
        { number: 17, status: "occupied" },
        { number: 18, status: "occupied" },
        { number: 19, status: "occupied" },
        { number: 20, status: "occupied" },
        { number: 21, status: "occupied" },
        { number: 22, status: "occupied" },
        { number: 23, status: "occupied" },
        { number: 24, status: "occupied" },
        { number: 25, status: "occupied" },
        { number: 26, status: "occupied" },
        { number: 27, status: "occupied" },
        { number: 28, status: "occupied" },
        { number: 29, status: "occupied" },
        { number: 30, status: "occupied" },
      ],
    },
  ];
  return (
    <section>
      <Header headerType={'DASHBOARD'}/>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.dashboard__content}>
          <span>AREAS AND APARTMENT OVERVIEW</span>
          <button className={styles.areas}>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>A</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>30</p>
              </span>
            </div>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>BZ</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>30</p>
              </span>
            </div>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>F</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>30</p>
              </span>
            </div>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>H</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>30</p>
              </span>
            </div>
          </button>
          <div className={styles.area__container}>
            {areas.map((area, index) => (
              <RoomBlock area={area} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDetails;
