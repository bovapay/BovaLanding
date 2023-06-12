import React from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle/SubTitle";
import Paper from "../shared/Paper/Paper";
import HightRiskImg from "../../assets/images/high-risk.png";
import PaymentsImg from "../../assets/images/payments.png";
import PayOutImg from "../../assets/images/pay-out.png";
import ChartImg from "../../assets/images/chart.png";
import KycImg from "../../assets/images/kyc-free.png";
import ConnectImg from "../../assets/images/connect.png";
import StarsImg from "../../assets/images/stars.png";
import SupportImg from "../../assets/images/support.png";
import KeyImg from "../../assets/images/key.png";
import CalendarImg from "../../assets/images/calendar.png";
import { PAPER_ACCENT_HOVER } from "../../utils/constants/settings";
import getLayoutAnimation from "../../utils/helpers/getLayoutAnimation";

export default function Advantages() {
  return (
    <Section id="advantages">
      <SubTitle className={styles.title}>Преимущества работы с нами</SubTitle>
      <div className={styles.grid}>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(1) }}
        >
          <div className={styles.card}>
            <img src={HightRiskImg} alt="risk" className={styles.image} />
            <p className={styles.cardText}>Работаем с High-Risk проектами</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(2) }}
        >
          <div className={styles.card}>
            <img src={PaymentsImg} alt="payments" className={styles.image} />
            <p className={styles.cardText}>
              Большое количество методов приёма и вывода
            </p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(3) }}
        >
          <div className={styles.card}>
            <img src={PayOutImg} alt="payout" className={styles.image} />
            <p className={styles.cardText}>Массовые выплаты</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(4) }}
        >
          <div className={styles.card}>
            <img src={ChartImg} alt="chart" className={styles.image} />
            <p className={styles.cardText}>Конверсия {">"}80%</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(5) }}
        >
          <div className={styles.card}>
            <img src={KycImg} alt="kyc" className={styles.image} />
            <p className={styles.cardText}>Отсутствие идентификации (KYC)</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(6) }}
        >
          <div className={styles.card}>
            <img src={ConnectImg} alt="connect" className={styles.image} />
            <p className={styles.cardText}>Поможем с подключением</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(7) }}
        >
          <div className={styles.card}>
            <img src={StarsImg} alt="stars" className={styles.image} />
            <p className={styles.cardText}>Личный менеджер</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(8) }}
        >
          <div className={styles.card}>
            <img src={SupportImg} alt="support" className={styles.image} />
            <p className={styles.cardText}>Круглосуточная поддержка</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(9) }}
        >
          <div className={styles.card}>
            <img src={KeyImg} alt="key" className={styles.image} />
            <p className={styles.cardText}>Быстрая интеграция</p>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(10) }}
        >
          <div className={styles.card}>
            <img src={CalendarImg} alt="calendar" className={styles.image} />
            <p className={styles.cardText}>Бесперебойная работа сервиса</p>
          </div>
        </Paper>
      </div>
    </Section>
  );
}
