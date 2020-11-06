import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";
export const Step6 = (props) => {
  return (
    <div>
      <div className={styles.text}>دریافت کد رهگیری</div>
      <Steps goToStep={props.goToStep} />
    </div>
  );
};
