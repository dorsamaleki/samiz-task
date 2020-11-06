import React from "react";
import styles from "./NavbarBuy.module.css";
import { NavLink } from "react-router-dom";
import moment from "jalali-moment";

export const NavbarBuy = () => {
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
