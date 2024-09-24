import React from "react";

import styles from "./RetirementForm.module.css";

//IMPORTS
import Header from "../../UI/Header/Header";
import HeroCard from "../../UI/HeroCard/HeroCard";
import BackButton from "../../UI/BackButton/BackButton";
import Button from "../../UI/Button/Button";

const RetirementForm = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroCard formType="RETIREMENT FORM" />
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
        <p>APARTMENT AUTHENTICATION</p>
        <div>
          <label htmlFor="area">AREA</label>
          <input type="text" name="area" id="area" placeholder="A" />
        </div>
        <div>
          <label htmlFor="houseNumber">HOUSE NUMBER</label>
          <input
            type="number"
            name="houseNumber"
            id="houseNumber"
            placeholder="1-30"
            max={30}
            min={1}
          />
        </div>
      </form>
      <Button btnType={"Submit"} />
    </main>
  );
};

export default RetirementForm;
