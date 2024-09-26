import React from "react";

import styles from "./OccupiedApartment.module.css";

//IMPORTS
import Header from "../../../UI/AdminHeader/AdminHeader";
import SideBar from "../../SideBar/SideBar";
import RequestBlock from "../../../UI/RequestBlock/RequestBlock";
import ProfileInformation from "../../../UI/ProfileInformation/ProfileInformation";

const OccupiedApartment = () => {
  return (
    <section>
      <Header headerType={"AREA A"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.request__content}>
          <ProfileInformation
            apartmentNumber={13}
            status={"occupied"}
            name={"Ismail Sani Gambo"}
            dept={"Computer Science"}
            position={'Lecturer'}
            employmentDate={'15th June 2023'}
            id={'33e10'}
            age={38}
            allocationDate={'12th April 2024'}
            profileStatus={true}
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

export default OccupiedApartment;
