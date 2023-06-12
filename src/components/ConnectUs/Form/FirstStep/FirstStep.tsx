import React, { useState } from "react";

import styles from "./styles.module.scss";
import Button from "../../../shared/Button/Button";
import classNames from "classnames";
import { ReactComponent as TelegramImg } from "../../../../assets/images/telegram.svg";
import { motion } from "framer-motion";

export default function FirstStep({
  nextStep,
  name,
  setName,
}: {
  nextStep(): void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) {
  const [error, setError] = useState("");

  function onSubmit(e: any) {
    e.preventDefault();
    if (!name) {
      return setError("Ник не введён");
    }
    nextStep();
  }
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div
        className={classNames(styles.inputContainer, error && styles.danger)}
      >
        <TelegramImg
          className={classNames(styles.icon, name && styles.filled)}
        />
        <input
          placeholder="Введите ваш ник в Telegram"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.error}
          >
            {error}
          </motion.div>
        )}
      </div>
      <Button>Продолжить</Button>
      <a href="#" className={styles.link}>
        У меня нет Telegram аккаунта
      </a>
    </form>
  );
}
