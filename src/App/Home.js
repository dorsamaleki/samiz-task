import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { Navbar } from "./Home/Navbar";

export const Home = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.gridContainer}>
        <div className={styles.box}>
          <div className={styles.text}>
            سامانه جامع آموزش آنلاین دانشگاه شیراز
          </div>
          <div className={styles.button1}>
            <NavLink to="/buy" className={styles.text1}>
              خرید سامانه
            </NavLink>
          </div>
          <div className={styles.button2}>
            <NavLink to="/track" className={styles.text2}>
              پیگیری خرید
            </NavLink>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src={process.env.PUBLIC_URL + "/images/Component 13 – 2.svg"}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
};
