import React from "react";

import styles from "./AllocationPage.module.css";

import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import Button from "../../UI/Button/Button";
import RoomBlock from "../../UI/RoomBlock/RoomBlock";

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

const AllocationPage = () => {
  return (
    <section>
      <Header headerType={"APPLICATION FIKA"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.request__content}>
          <span>STAFF ID: 33e10</span>
          <div className={styles.area__choosen}>
            <p>PREFERRED AREA</p>
            <div className={styles.area}>Area A</div>
          </div>
          <div className={styles.area__container}>
            {areas.map((area, index) => (
              <RoomBlock
                area={area}
                key={index}
                status={false}
                showRoom={true}
              />
            ))}
            <span>OTHER ROOMS</span>
          </div>
          <div className={styles.allocate__btn}>
            <Button btnType={"confirm"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllocationPage;
