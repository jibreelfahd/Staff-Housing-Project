import React, { useState, useEffect } from "react";

import styles from "./ProfileInformation.module.css";

//IMAGE IMPORTS
import ProfileImage from "../../../assets/profile.png";

const ProfileInformation = ({
  apartmentNumber,
  status,
  name,
  dept,
  position,
  employmentDate,
  id,
  age,
  allocationDate,
  maintenanceStatus,
  profileStatus,
  apartmentStatus
}) => {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [showApartment, setShowApartment] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    if (maintenanceStatus) {
      setIsMaintenance(true);
    }

    if (profileStatus) {
      setIsProfile(true);
    }
    
    if (apartmentStatus) {
      setShowApartment(true);
    }
  }, [maintenanceStatus, profileStatus, apartmentStatus]);

  return (
    <>
      {showApartment && <h2>APARTMENT {apartmentNumber}</h2>}
      <div className={styles.profile__info}>
        <div className={styles.span__info}>
          {showApartment && <span>
            Status:{" "}
            <span className={`${status === "vacant" ? styles.vacant : ""}`}>
              {status}
            </span>
          </span>}
          {isMaintenance && <h3>Needs Maintenance</h3>}
        </div>
        {isProfile && <p>PROFILE INFO</p>}
        { isProfile && <div className={styles.profile__details}>
          <div className={styles.profile__image}>
            <img src={ProfileImage} alt={"Profile Pic"} />
          </div>
          <div>
            <p>Name: {name}</p>
            <p>Department: {dept}</p>
            <p>Position: {position}</p>
            <p>Date of Employment: {employmentDate}</p>
            <p>Staff ID: {id}</p>
            <p>Age: {age}</p>
            <p>Allocation Date: {allocationDate}</p>
          </div>
        </div>}
      </div>
    </>
  );
};

export default ProfileInformation;
