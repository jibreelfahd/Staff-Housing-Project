import React from "react";

import styles from "./ApplicationForm.module.css";

//IMPORTS
import Header from "../../UI/Header/Header";
import HeroCard from "../../UI/HeroCard/HeroCard";
import BackButton from "../../UI/BackButton/BackButton";
import Button from "../../UI/Button/Button";

const ApplicationForm = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroCard formType="APPLICATION FORM" />
      <BackButton />
      <form className={styles.form}>
        <div>
          <label htmlFor="id">STAFF I.D</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Enter Staff ID e.g 342AE3"
          />
        </div>
        <div>
          <label htmlFor="prefArea">PREFERRED AREA</label>
          <div className={styles.custom__select}>
            <select name="areas" id="areas" placeholder="Select Area">
              <option value="" selected disabled>
                Select Value
              </option>
              <option value="Area A">Area A</option>
              <option value="Area B">Area B</option>
              <option value="Area BZ">Area BZ</option>
              <option value="Area F">Area F</option>
            </select>
          </div>
        </div>
        <p>PROFILE AUTHENTICATION</p>
        <div>
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" id="name" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="department">DEPARTMENT</label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Computer Science"
          />
        </div>
      </form>
      <Button btnType={'Apply'}/>
    </main>
  );
};

export default ApplicationForm;
