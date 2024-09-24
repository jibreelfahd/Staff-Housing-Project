import React from "react";

import styles from "./Dashboard.module.css";

import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import RequestBlock from "../../UI/RequestBlock/RequestBlock";

const Dashboard = () => {
  return (
    <section>
      <Header headerType={"DASHBOARD"} />
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
                <p>50</p>
              </span>
            </div>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>F</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>60</p>
              </span>
            </div>
            <div className={styles.single__area}>
              <span className={styles.area}>AREA</span>
              <span className={styles.area__name}>H</span>
              <span className={styles.area__number_houses}>
                <p>Total</p>
                <p>60</p>
              </span>
            </div>
          </button>
          <ul>
            <div>
              <span>RECENT NOTIFICATION</span>
            </div>
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"maintenance"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"retirement"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"maintenance"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"maintenance"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"maintenance"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"retirement"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"maintenance"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />{" "}
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />{" "}
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />{" "}
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />{" "}
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />{" "}
            <RequestBlock
              requestType={"Application Request"}
              staffID={"33e10"}
              time={"10"}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
