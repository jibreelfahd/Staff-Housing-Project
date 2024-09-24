import React from "react";

import styles from "./RetirementPage.module.css";

//IMPORTS
import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import BackButton from "../../UI/BackButton/BackButton";
import RequestBlock from "../../UI/RequestBlock/RequestBlock";

const RetirementPage = () => {
  return (
    <section>
      <Header headerType={"RETIREMENT REQUEST"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.application__align}>
          <BackButton />
          <div className={styles.request__content}>
            <span>THIS WEEK</span>
            <ul>
              <RequestBlock
                requestStatus={"retirement"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
              <RequestBlock
                requestStatus={"retirement"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
              <RequestBlock
                requestStatus={"checked"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
            </ul>
            <span>LAST WEEK</span>
            <ul>
              <RequestBlock
                requestStatus={"checked"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
              <RequestBlock
                requestStatus={"checked"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
              <RequestBlock
                requestStatus={"checked"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
              <RequestBlock
                requestStatus={"checked"}
                requestType={"Retirement Request"}
                staffID={"33e10"}
                time={"10"}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetirementPage;
