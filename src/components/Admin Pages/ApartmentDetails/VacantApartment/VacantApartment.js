import React from "react";

import styles from "./VacantApartment.module.css";

//IMPORTS
import Header from "../../../UI/AdminHeader/AdminHeader";
import SideBar from "../../SideBar/SideBar";
import RequestBlock from "../../../UI/RequestBlock/RequestBlock";
import ProfileInformation from "../../../UI/ProfileInformation/ProfileInformation";

const VacantApartment = () => {
  return (
    <section>
      <Header headerType={"AREA A"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.request__content}>
          <ProfileInformation
          apartmentNumber={20}
            status={"vacant"}
            profileStatus={(false)}
          />
          <h2>MAINTENANCE HISTORY</h2>
          <ul>
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Maintenance Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Maintenance Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Maintenance Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Maintenance Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Maintenance Request"}
              staffID={"33e10"}
              time={"10"}
            />
            <h2>TENANCY HISTORY</h2>
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Ismail Sani Gambo"}
              staffID={"33e10"}
            />
            <RequestBlock
              requestStatus={"checked"}
              requestType={"Muhammad Salihu"}
              staffID={"33e10"}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VacantApartment;
