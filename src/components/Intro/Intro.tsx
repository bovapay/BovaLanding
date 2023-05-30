import React from "react";

import styles from "./styles.module.scss";

import introImage from "../../assets/images/intro.png";
import LinkButton from "../shared/LinkButton/LinkButton";

export default function Intro() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <img src={introImage} alt="intro" className={styles.bg} />
        <div className={styles.content}>
          <div className={styles.tags}>
            <span className={styles.tag}>Надежный</span>
            <span className={styles.tag}>Быстрый</span>
            <span className={styles.tag}>Простой</span>
          </div>
          <h1 className={styles.title}>Онлайн-сервис приёма платежей</h1>
          <p className={styles.description}>
            Множество способов оплаты для вашего <br /> бизнеса: от банковских
            карт до QIWI и крипты.
            <br /> Управляйте платежами легко и удобно.
          </p>
          <LinkButton>Начать приём платежей</LinkButton>
        </div>
      </div>
    </main>
  );
}
