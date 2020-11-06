import React, { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import { NavbarBuy } from "./Buy/NavbarBuy";
import { Step1 } from "./Buy/Step1";
import { Step2 } from "./Buy/Step2";
import { Step3 } from "./Buy/Step3";
import { Step4 } from "./Buy/Step4";
import { Step5 } from "./Buy/Step5";
import { Step6 } from "./Buy/Step6";
import styles from "./Buy.module.css";
import axios from "axios";

let custom = {
  enterRight: "your custom css transition classes",
  enterLeft: "your custom css transition classes",
  exitRight: "your custom css transition classes",
  exitLeft: "your custom css transition classes",
};

export const Buy = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const [input, setInput] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setLoading(false);
        setUser(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setUser({});
        setError("something went wrong");
      });
  }, []);
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };
  const [formValues, setFormValues] = useState([]);
  const codeList = user.map((item) => item.id);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dedicatedCode = codeList.find((item) => item === parseInt(input));
    user.map((item) =>
      item.id === dedicatedCode ? setFormValues(item) : null
    );
  };
  return (
    <div className={styles.root}>
      <NavbarBuy />
      <StepWizard transitions={custom}>
        <Step1
          handleChangeInput={handleChangeInput}
          handleSubmit={handleSubmit}
          input={input}
          formValues={formValues}
        />
        <Step2 formValues={formValues} />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
      </StepWizard>
    </div>
  );
};
