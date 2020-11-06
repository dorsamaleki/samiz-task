import React from "react";
import styles from "./Steps.module.css";

export const Steps = (props) => {
  return (
    <div>
      <p className={styles.root}>
        <span onClick={() => props.goToStep(1)} className={styles.shape}>
          ○ <div className={styles.text}>ثبت درخواست اولیه</div>
        </span>
        <span onClick={() => props.goToStep(2)} className={styles.shape}>
          ○ <div className={styles.text}>اطلاعات مدرسه</div>
        </span>
        <span onClick={() => props.goToStep(3)} className={styles.shape}>
          ○ <div className={styles.text}>ثبت مشخصات</div>
        </span>
        <span onClick={() => props.goToStep(4)} className={styles.shape}>
          ○ <div className={styles.text}>نمایش پیش فاکتور</div>
        </span>
        <span onClick={() => props.goToStep(5)} className={styles.shape}>
          ○ <div className={styles.text}>عملیات پرداخت</div>
        </span>
        <span onClick={() => props.goToStep(6)} className={styles.shape}>
          ○ <div className={styles.text}>دریافت کد رهگیری</div>
        </span>
      </p>
    </div>
  );
};
