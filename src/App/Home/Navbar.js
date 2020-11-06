import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import moment from "jalali-moment";

export const Navbar = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.gridItem1}>دانشگاه صنعتی شیراز</div>
      <NavLink to="/" className={styles.gridItem2}>
        صفحه اصلی
      </NavLink>
      <NavLink to="/" className={styles.gridItem2}>
        صفحه اصلی
      </NavLink>
      <NavLink to="/" className={styles.gridItem2}>
        صفحه اصلی
      </NavLink>
      <div className={styles.gridItem3}>ورود به سامانه</div>
      <div className={styles.gridItem3}>
        امروز &nbsp;
        {moment().locale("fa").format("D")}&nbsp;
        {moment().locale("fa").format("MMM")}&nbsp;
        {moment().locale("fa").format("YYYY")}
      </div>
    </div>
  );
};
