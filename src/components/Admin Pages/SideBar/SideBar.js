import React from "react";

import styles from "./SideBar.module.css";

//IMAGE IMPORTS
import dashboardImage from "../../../assets/dashboard.svg";
import maintenanceImage from "../../../assets/maintenance.svg";
import applicationImage from "../../../assets/door-in.svg";
import retirementImage from "../../../assets/timer.svg";
import logoutImage from "../../../assets/logout.svg";

//IMPORTS
import ABUBanner from "../../UI/ABUBanner/ABUBanner";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const classes = `${styles.links} ${({ isActive }) =>
    isActive ? styles.active : undefined }`;

  return (
    <main>
      <aside className={styles["side--bar"]}>
        <div className={styles.banner}>
          <ABUBanner type={"admin-pages"} />
          <p>ABU STAFF HOUSING MANAGEMENT</p>
        </div>
        <div className={styles.side__links}>
          <NavLink to={"/admin/dashboard"} className={({ isActive }) =>
    `${styles.links} ${isActive ? styles.active : ''}`}>
            <div className={styles.image}>
              <img src={dashboardImage} alt="Dashboard" />
            </div>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to={"/admin/request/application"} className={({ isActive }) =>
    `${styles.links} ${isActive ? styles.active : ''}`} end>
            <div className={styles.image}>
              <img src={applicationImage} alt="Application pic" />
            </div>
            <p>Application Request</p>
          </NavLink>
          <NavLink to={"/admin/request/maintenance"} className={({ isActive }) =>
    `${styles.links} ${isActive ? styles.active : ''}`} end>
            <div className={styles.image}>
              <img src={maintenanceImage} alt="Maintenance Pic" />
            </div>
            <p>Maintenance Request</p>
          </NavLink>
          <NavLink to={"/admin/request/retirement"} className={({ isActive }) =>
    `${styles.links} ${isActive ? styles.active : ''}`}>
            <div className={styles.image}>
              <img src={retirementImage} alt="Retirement Pic" />
            </div>
            <p>Retirement Notice</p>
          </NavLink>
        </div>
        <div className={styles.logout}>
          <img src={logoutImage} alt="Logout" />
          <p>Log Out</p>
        </div>
      </aside>
    </main>
  );
};

export default SideBar;
