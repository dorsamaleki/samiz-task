import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";

export const Step2 = (props) => {
  return (
    <div>
      <div className={styles.text}>اطلاعات مدرسه</div>
      <Steps goToStep={props.goToStep} />
      <div className={styles.text}>
        شما در حال ثبت درخواست خرید سامانه برای مدرسه با کد اختصاصی &nbsp;
        {props.formValues.id} و مشخصات ذیل می باشید:
      </div>
      <hr className={styles.hr} />
      <div className={styles.text2}>
        <p>نام مدرسه : {props.formValues.username}</p>
        <p>نام مدیر مدرسه : {props.formValues.name}</p>
        <p>شماره موبایل مدیر : {props.formValues.phone}</p>
      </div>
      <hr className={styles.hr} />
      <div>
        <button onClick={props.previousStep} className={styles.button}>
          ویرایش / بازگشت
        </button>
        <button onClick={props.nextStep} className={styles.button}>
          تایید
        </button>
      </div>
    </div>
  );
};
