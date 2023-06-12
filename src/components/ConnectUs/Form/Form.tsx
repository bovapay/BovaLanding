import React, { useState } from "react";

import styles from "./styles.module.scss";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";

export default function Form({
  setStep,
  step,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");

  function nextStep() {
    setStep((cur) => cur + 1);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5 className={styles.title}>
          Контактная информация <b>{step}</b>/3
        </h5>
      </div>
      <div className={styles.body}>
        {step === 1 && (
          <FirstStep nextStep={nextStep} name={name} setName={setName} />
        )}
        {step === 2 && (
          <SecondStep
            business={business}
            setBusiness={setBusiness}
            nextStep={nextStep}
          />
        )}
        {step === 3 && <ThirdStep />}
      </div>
      <div className={styles.footer}>
        {step === 1 && (
          <p>Мы свяжемся с вами по указанному Telegram аккаунту </p>
        )}
      </div>
    </div>
  );
}
