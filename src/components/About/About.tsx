import React from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import Paper from "../shared/Paper/Paper";
import LinkButton from "../shared/LinkButton/LinkButton";
import Paragraph from "../shared/Paragraph/Paragraph";
import RatesImg from "../../assets/icons/rates.png";
import SupportImg from "../../assets/icons/support.png";
import CurrenciesImg from "../../assets/icons/currencies.png";
import PaymentsImg from "../../assets/icons/payments.png";

export default function About() {
  return (
    <Section>
      <div className={styles.cards}>
        <Paper motionProps={{ whileHover: { backgroundColor: "#141725" } }}>
          <div className={styles.card}>
            <img src={RatesImg} className={styles.cardIcon} alt="тарифы" />
            <div className={styles.cardContent}>
              <h4>Удобные тарифы</h4>
              <Paragraph>
                Мы поможем вам выбрать наилучшие тарифные ставки, которые
                способствуют быстрому развитию вашего бизнеса. 
              </Paragraph>
              <LinkButton>Выбрать тариф</LinkButton>
            </div>
          </div>
        </Paper>
        <Paper motionProps={{ whileHover: { backgroundColor: "#141725" } }}>
          <div className={styles.card}>
            <img src={SupportImg} className={styles.cardIcon} alt="поможем" />
            <div className={styles.cardContent}>
              <h4>Поможем вам 24/7</h4>
              <Paragraph>
                Наша команда <br /> поддержки всегда готова <br /> помочь вам и
                быстро <br /> решить все возникающие <br /> проблемы.
              </Paragraph>
              <LinkButton>Задать вопрос</LinkButton>
            </div>
          </div>
        </Paper>
        <Paper motionProps={{ whileHover: { backgroundColor: "#141725" } }}>
          <div className={styles.card}>
            <img src={CurrenciesImg} className={styles.cardIcon} alt="валюта" />
            <div className={styles.cardContent}>
              <h4>Примем любую валюту</h4>
              <Paragraph>
                Мы готовы принимать множество валют и автоматически подбираем
                нужную валюту для вашего плательщика.  
              </Paragraph>
              <LinkButton>Открыть список валют</LinkButton>
            </div>
          </div>
        </Paper>
        <Paper motionProps={{ whileHover: { backgroundColor: "#141725" } }}>
          <div className={styles.card}>
            <img src={PaymentsImg} className={styles.cardIcon} alt="оплата" />

            <div className={styles.cardContent}>
              <h4>Платёжные решения</h4>
              <Paragraph>
                Мы предоставляем готовые к использованию способы оплаты, чтобы
                вы точно смогли найти удобное для себя решение.
              </Paragraph>
              <LinkButton>Доступные решения</LinkButton>
            </div>
          </div>
        </Paper>
      </div>
    </Section>
  );
}
