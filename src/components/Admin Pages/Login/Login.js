import React from "react";

import styles from "./Login.module.css";

//IMPORTS
import ABULOGO from "../../../assets/ABU Logo.png";
import KEYLOCK from "../../../assets/Keylock.png";
import HeroCard from "../../UI/HeroCard/HeroCard";
import Button from '../../UI/Button/Button';

const Login = () => {
  return (
    <main className={styles.login__}>
      <nav className={styles.nav}>
        <a href="/">
          <div className={styles.ABU}>
            <img src={ABULOGO} alt="ABU Logo" />
            <span>Ahmadu Bello University</span>
          </div>
        </a>
      </nav>
      <div>
        <HeroCard formType={"ADMIN LOGIN"} />
      </div>
      <div className={styles.keylock}>
        <img src={KEYLOCK} alt="Account Authenication Required" />
      </div>
        <form className={styles.form}>
          <div>
            <label htmlFor="id">ADMIN I.D</label>
            <input type="text" name="id" id="id" />
          </div>
          <div>
            <label htmlFor="name">PASSWORD</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
        <div>
          <Button btnType={'Sign In'} />
        </div>
    </main>
  );
};

export default Login;
