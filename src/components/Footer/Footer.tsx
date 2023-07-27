import React from "react";

import styles from "./styles.module.scss";

import bgImg from "../../assets/images/pattern.png";
import TelegramImg from "../../assets/images/telegram-fill.svg";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={bgImg} className={styles.bg} alt="bg" />
      <div className={styles.info}>
        <p>
          Если остались вопросы, <br /> пишите на{" "}
          <a href="mailto: info@bovapay.io">info@bovapay.io</a>
        </p>
        <a href="https://t.me/bovapay" target="_blank">
          <img src={TelegramImg} alt="telegram" />
        </a>
      </div>
    </footer>
  );
}
