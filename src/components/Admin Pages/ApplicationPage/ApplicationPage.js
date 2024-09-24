import React from "react";

import styles from "./ApplicationPage.module.css";

//IMPORTS
import Header from "../../UI/AdminHeader/AdminHeader";
import SideBar from "../SideBar/SideBar";
import BackButton from "../../UI/BackButton/BackButton";
import RequestBlock from "../../UI/RequestBlock/RequestBlock";

const ApplicationPage = () => {
  return (
    <section>
      <Header headerType={"APPLICATION REQUEST"} />
      <div className={styles.application}>
        <SideBar />
        <div className={styles.application__align}>
          <BackButton />
          <div className={styles.request__content}>
            <span>THIS WEEK</span>
            <ul>
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
                requestStatus={"checked"}
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
                requestStatus={"checked"}
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
            </ul>
            <span>LAST WEEK</span>
            <ul>
              <RequestBlock
                requestStatus={"checked"}
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
                requestStatus={"checked"}
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
                requestStatus={"checked"}
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
                requestStatus={"checked"}
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
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPage;
