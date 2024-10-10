import React from "react";

import styles from "./ApplicationPageResponse.module.css";

//IMPORTS
import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import ProfileInformation from "../../UI/ProfileInformation/ProfileInformation";
import Button from "../../UI/Button/Button";

const ApplicationPageResponse = () => {
  return (
    <section>
      <Header headerType={"APPLICATION REQUEST"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.request__content}>
          <span>STAFF ID: 33e10</span>
          <div className={styles.area__choosen}>
            <p>PREFERRED AREA</p>
            <div className={styles.area}>Area A</div>
          </div>
          <ProfileInformation
            apartmentNumber={13}
            status={"occupied"}
            name={"Ismail Sani Gambo"}
            dept={"Computer Science"}
            position={"Lecturer"}
            employmentDate={"15th June 2023"}
            id={"33e10"}
            age={38}
            allocationDate={"12th April 2024"}
            profileStatus={true}
          />
          <div className={styles.allocate__btn}>
            <Button btnType={"allocate"} />
            <Button btnType={"reject"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPageResponse;
