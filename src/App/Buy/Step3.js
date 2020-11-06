import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";
export const Step3 = (props) => {
  return (
    <div>
      <div className={styles.text}>ثبت مشخصات</div>
      <Steps goToStep={props.goToStep} />
    </div>
  );
};
