import React from "react";

import styles from "./MaintenanceForm.module.css";

//IMPORTS
import Header from "../../UI/Header/Header";
import HeroCard from "../../UI/HeroCard/HeroCard";
import BackButton from "../../UI/BackButton/BackButton";
import Button from "../../UI/Button/Button";

const MaintenanceForm = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroCard formType="MAINTENANCE REQUEST" />
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
      <div>
        <label htmlFor="complaints">COMPLAINTS</label>
        <textarea name="compaints" id="compaints" placeholder="Enter Your Message"></textarea>
      </div>
      </form>
      <Button btnType={'Submit'}/>
    </main>
  );
};

export default MaintenanceForm;
