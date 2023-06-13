import React from "react";

import styles from "./styles.module.scss";

import bgImg from "../../assets/images/pattern.png";
import TelegramImg from "../../assets/images/telegram-fill.svg";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={bgImg} className={styles.bg} alt="bg" />
      {/* <div className={styles.info}>
        <p>
          Если остались вопросы, <br /> пишите на <a>info.paymentstage.io</a>
        </p>
        <img src={TelegramImg} alt="telegram" />
      </div> */}
    </footer>
  );
}
