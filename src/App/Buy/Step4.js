import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";
export const Step4 = (props) => {
  return (
    <div>
      <div className={styles.text}>نمایش پیش فاکتور</div>
      <Steps goToStep={props.goToStep} />
    </div>
  );
};
