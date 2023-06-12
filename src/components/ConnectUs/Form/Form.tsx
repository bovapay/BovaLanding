import React, { useState } from "react";

import styles from "./styles.module.scss";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import axios from "axios";

const token = "5856773713:AAHVvAt8BrIevtp49pdAUUAKELoN8m9rENo";
const chat_id = "-902930286";
export default function Form({
  setStep,
  step,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [isSendError, setIsSendError] = useState(false);

  function nextStep() {
    setStep((cur) => cur + 1);
  }

  async function sendMessage() {
    const messageText = `Заявка от пользователя: ${name}%0AТип бизнеса: ${business}
    `;
    const resp = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${messageText}`
    );
    if (resp.data.ok !== true) {
      setIsSendError(true);
    }
  }

  return (
    <div className={styles.container} id="connectUsForm">
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
            sendMessage={sendMessage}
          />
        )}
        {step === 3 && <ThirdStep isSendError={isSendError} />}
      </div>
      <div className={styles.footer}>
        {step === 1 && (
          <p>Мы свяжемся с вами по указанному Telegram аккаунту </p>
        )}
      </div>
    </div>
  );
}
