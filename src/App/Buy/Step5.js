import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";
export const Step5 = (props) => {
  return (
    <div>
      <div className={styles.text}>عملیات پرداخت</div>
      <Steps goToStep={props.goToStep} />
    </div>
  );
};
