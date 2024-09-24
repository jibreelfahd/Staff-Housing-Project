import React from "react";

import styles from "./LandingPage.module.css";
import Header from "./Header/Header";

import HeroCard from "./HeroCard/HeroCard";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <HeroCard />
      <Content />
      <section className={styles.page__about}>
        <h2>ABOUT ABU STAFF MANAGEMENT HOUSING</h2>
        <p>
          Welcome to ABU Staff Housing Management, the dedicated platform
          designed to streamline the management of housing for the staff of
          Ahmadu Bello University. Our mission is to simplify and enhance the
          housing experience for university employees through a user-friendly
          and efficient system.
        </p>
        <br />
        <p>
          Services:
          <ul>
            <li>
              Housing Applications: Staff members can easily apply for
              university-provided housing through our streamlined application
              process, ensuring a smooth and transparent experience
            </li>
            <li>
              Maintenance Requests: Report any issues with your housing and
              request prompt maintenance services directly through the platform,
              ensuring that your living conditions remain comfortable and
              well-maintained
            </li>
            <li>
              Retirement and Departure Management: Manage your housing status
              effectively as you approach retirement or plan to leave, with
              straightforward procedures to handle these transitions seamlessly.
            </li>
          </ul>
        </p><br/>
        <p>
          At ABU Staff Housing Management, we are committed to providing a
          hassle-free and effective solution for managing staff housing needs.
          Our platform is designed with simplicity and efficiency in mind,
          ensuring that all housing-related processes are handled smoothly and
          professionally
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default LandingPage;
