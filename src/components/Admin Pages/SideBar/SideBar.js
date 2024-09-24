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

const SideBar = () => {
  return (
    <main>
      <aside className={styles["side--bar"]}>
        <div className={styles.banner}>
          <ABUBanner type={"admin-pages"} />
          <p>ABU STAFF HOUSING MANAGEMENT</p>
        </div>
        <div className={styles.side__links}>
          <div className={styles.links}>
            <div className={styles.image}>
              <img src={dashboardImage} alt="Dashboard" />
            </div>
            <p>Dashboard</p>
          </div>
          <div className={styles.links}>
            <div className={styles.image}>
              <img src={applicationImage} alt="Application pic" />
            </div>
            <p>Application Request</p>
          </div>
          <div className={styles.links}>
            <div className={styles.image}>
              <img src={maintenanceImage} alt="Maintenance Pic" />
            </div>
            <p>Maintenance Request</p>
          </div>
          <div className={styles.links}>
            <div className={styles.image}>
              <img src={retirementImage} alt="Retirement Pic" />
            </div>
            <p>Retirement Notice</p>
          </div>
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
