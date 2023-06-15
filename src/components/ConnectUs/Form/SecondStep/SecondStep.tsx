import React, { useState } from "react";

import styles from "./styles.module.scss";
import Button from "../../../shared/Button/Button";
import { motion } from "framer-motion";

const variants = [
  "Казино",
  "Букмекерская компания",
  "Криптовалютный проект",
  "Forex проект",
  "Платёжное решение",
  "Другое",
];

export default function SecondStep({
  nextStep,
  business,
  setBusiness,
  sendMessage,
}: {
  nextStep(): void;
  setBusiness: React.Dispatch<React.SetStateAction<string>>;
  business: string;
  sendMessage(): Promise<any>;
}) {
  const [error, setError] = useState("");

  async function onSubmit(e: any) {
    e.preventDefault();
    if (!business) {
      return setError("Пожалуйста, выберите тип бизнеса");
    }
    await sendMessage();
    nextStep();
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h6 className={styles.title}>Какой у вас тип бизнеса?</h6>
      <div className={styles.variants}>
        {variants.map((i, index) => (
          <button
            type="button"
            key={index}
            className={styles.item}
            onClick={() => setBusiness(i)}
          >
            <div className={styles.circle}>
              {i === business && (
                <>
                  <motion.div
                    className={styles.dot}
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: 13, height: 13 }}
                    transition={{
                      type: "spring",
                    }}
                  />
                  <motion.div
                    className={styles.circleOuter}
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: 52, height: 52 }}
                  />
                </>
              )}
            </div>
            <div className={styles.text}>{i}</div>
          </button>
        ))}
      </div>
      <input type="hidden" id="token" name="token" />
      <div className={styles.submitContainer}>
        {error && <div className={styles.error}>{error}</div>}
        <Button>Продолжить</Button>
      </div>
    </form>
  );
}
