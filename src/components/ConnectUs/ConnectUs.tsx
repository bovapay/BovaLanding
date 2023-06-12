import React, { useState } from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle/SubTitle";
import Cards from "./Cards/Cards";
import ProgressBar from "./ProgressBar/ProgressBar";
import Form from "./Form/Form";

export default function ConnectUs() {
  const [step, setStep] = useState(1);
  return (
    <Section id="connectUs">
      <SubTitle className={styles.title}>Всего 3 шага для подключения</SubTitle>
      <Cards />
      <ProgressBar step={step} />
      <Form setStep={setStep} step={step} />
    </Section>
  );
}
