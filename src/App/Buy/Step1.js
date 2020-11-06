import React from "react";
import styles from "./Step.module.css";
import { Steps } from "./Steps";
import Modal from "react-modal";
import ReactCodeInput from "react-verification-code-input";

const customStyles = {
  content: {
    top: "70%",
    left: "15%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundImage: "url('/images/Path 1419.svg') ",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    transform: "translate(-50%, -50%)",
    direction: "rtl",
    padding: "60px",
    backgroundColor: "#f7f7f7",
    display: "inline-block",
    backgroundSize: "180px",
    fontSize: "14px",
    border: "1px solid rgb(49, 203, 123)",
  },
};

export const Step1 = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    props.goToStep(2);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  return (
    <div>
      <div className={styles.text}>ثبت درخواست اولیه</div>
      <Steps goToStep={props.goToStep} />
      <div className={styles.text}>
        برای ثبت درخواست خرید سامانه برای مدرسه خود اطلاعات زیر را تکمیل کنید
      </div>
      <form onSubmit={props.handleSubmit} className={styles.form}>
        <div>
          <input
            name="code"
            placeholder="کد مدرسه"
            onChange={props.handleChangeInput}
            value={props.input}
            className={styles.textbox}
          />
        </div>
        <div>
          <input
            name="number"
            type="text"
            placeholder="شماره موبایل"
            onChange={props.handleChangeNumber}
            value={props.number}
            className={styles.textbox}
          />
        </div>
        <button
          type="submit"
          onClick={isNaN(props.input) ? null : openModal}
          className={styles.button}
        >
          دریافت کد تایید
        </button>
      </form>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={styles.text1}>کد ارسال شده را وارد کنید</div>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            <ReactCodeInput
              onComplete={closeModal}
              fields={4}
              fieldWidth={40}
              fieldHeight={50}
              className={styles.validationcode}
            />
          </h2>
        </Modal>
      </div>
    </div>
  );
};
