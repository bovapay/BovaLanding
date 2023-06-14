import React from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle/SubTitle";
import Paper from "../shared/Paper/Paper";
import Paragraph from "../shared/Paragraph/Paragraph";
import ChartImg from "../../assets/images/chart.png";
import CurrenciesImg from "../../assets/images/currencies.png";
import PayOutImg from "../../assets/images/pay-out.png";
import ApiImg from "../../assets/images/api.png";
import getLayoutAnimation from "../../utils/helpers/getLayoutAnimation";
import { PAPER_ACCENT_HOVER } from "../../utils/constants/settings";

export default function Order() {
  return (
    <Section id="order">
      <SubTitle className={styles.title}>Что мы можем предложить</SubTitle>
      <div className={styles.grid}>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(1) }}
        >
          <div className={styles.card}>
            <img className={styles.cardBg} src={ChartImg} alt={"chart"} />
            <h4 className={styles.cardTitle}>Высокая конверсия</h4>
            <div className={styles.textContainer}>
              <Paragraph>
                Успешный бизнес обеспечивается высокой конверсией платежей,
                которую можно сохранять на уровне не менее 90% благодаря каскаду
                разработанных решений.
              </Paragraph>
            </div>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(2) }}
        >
          <div className={styles.card}>
            <img
              className={styles.cardBg}
              src={CurrenciesImg}
              alt={"currencies"}
            />
            <h4 className={styles.cardTitle}>Процессинг в валютах</h4>
            <div className={styles.textContainer}>
              <Paragraph>
                Мы принимаем платежи в нескольких популярных валютах, таких как
                RUB, USD, EUR, UAH, KZT, и также можем добавить любую другую
                валюту, которая вам необходима.
              </Paragraph>
            </div>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(3) }}
        >
          <div className={styles.card}>
            <img className={styles.cardBg} src={PayOutImg} alt={"currencies"} />
            <h4 className={styles.cardTitle}>Массовые выплаты</h4>
            <div className={styles.textContainer}>
              <Paragraph>
                Предоставляйте своим клиентам возможность получать выплаты в
                нужных им валютах через эквайринговый счет или другими
                доступными способами, такими как пополнение баланса. 
              </Paragraph>
            </div>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_ACCENT_HOVER, ...getLayoutAnimation(4) }}
        >
          <div className={styles.card}>
            <img className={styles.cardBg} src={ApiImg} alt={"currencies"} />
            <h4 className={styles.cardTitle}>Гибкий API</h4>
            <div className={styles.textContainer}>
              <Paragraph>
                Вы можете подключить наше платежное решение с помощью API,
                Hosted page или Host to Host всего за несколько часов.
              </Paragraph>
            </div>
          </div>
        </Paper>
      </div>
    </Section>
  );
}
