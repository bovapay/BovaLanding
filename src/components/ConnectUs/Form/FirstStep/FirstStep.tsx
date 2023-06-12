import React from "react";

import styles from "./styles.module.scss";
import Button from "../../../shared/Button/Button";
import { ReactComponent as TelegramImg } from "../../../../assets/images/telegram.svg";
import classNames from "classnames";

export default function FirstStep({
  nextStep,
  name,
  setName,
}: {
  nextStep(): void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) {
  function onSubmit(e: any) {
    e.preventDefault();
    if (!name) {
      return;
    }
    nextStep();
  }
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <TelegramImg
          className={classNames(styles.icon, name && styles.filled)}
        />
        <input
          placeholder="Введите ваш ник в Telegram"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button>Продолжить</Button>
      <a href="#" className={styles.link}>
        У меня нет Telegram аккаунта
      </a>
    </form>
  );
}
