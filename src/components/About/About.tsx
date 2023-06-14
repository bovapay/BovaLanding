import React from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import Paper from "../shared/Paper/Paper";
import LinkButton from "../shared/LinkButton/LinkButton";
import Paragraph from "../shared/Paragraph/Paragraph";
import RatesImg from "../../assets/images/rates.png";
import SupportImg from "../../assets/images/support.png";
import CurrenciesImg from "../../assets/images/currencies.png";
import PaymentsImg from "../../assets/images/payments.png";
import { PAPER_DEFAULT_HOVER } from "../../utils/constants/settings";
import getLayoutAnimation from "../../utils/helpers/getLayoutAnimation";

export default function About() {
  return (
    <Section id="about">
      <div className={styles.cards}>
        <Paper
          motionProps={{
            ...PAPER_DEFAULT_HOVER,
            ...getLayoutAnimation(1),
          }}
        >
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <img src={RatesImg} className={styles.cardIcon} alt="тарифы" />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Удобные тарифы</h4>
                <Paragraph>
                  Мы поможем вам выбрать наилучшие тарифные ставки, которые
                  способствуют быстрому развитию вашего бизнеса. 
                </Paragraph>
              </div>
            </div>
            <LinkButton href="#connectUsForm" offset={180}>
              Выбрать тариф
            </LinkButton>
          </div>
        </Paper>
        <Paper
          motionProps={{
            ...PAPER_DEFAULT_HOVER,
            ...getLayoutAnimation(2),
          }}
        >
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <img src={SupportImg} className={styles.cardIcon} alt="поможем" />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Поможем вам 24/7</h4>
                <Paragraph>
                  Наша команда <br /> поддержки всегда готова <br /> помочь вам
                  и быстро <br /> решить все возникающие <br /> проблемы.
                </Paragraph>
              </div>
            </div>
            <LinkButton href="#connectUsForm" offset={180}>
              Задать вопрос
            </LinkButton>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_DEFAULT_HOVER, ...getLayoutAnimation(3) }}
        >
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <img
                src={CurrenciesImg}
                className={styles.cardIcon}
                alt="валюта"
              />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Примем любую валюту</h4>
                <Paragraph>
                  Мы готовы принимать множество валют и автоматически подбираем
                  нужную валюту для вашего плательщика.  
                </Paragraph>
              </div>
            </div>
            <LinkButton href="#payments">Открыть список валют</LinkButton>
          </div>
        </Paper>
        <Paper
          motionProps={{ ...PAPER_DEFAULT_HOVER, ...getLayoutAnimation(4) }}
        >
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <img src={PaymentsImg} className={styles.cardIcon} alt="оплата" />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Платёжные решения</h4>
                <Paragraph>
                  Мы предоставляем готовые к использованию способы оплаты, чтобы
                  вы точно смогли найти удобное для себя решение.
                </Paragraph>
              </div>
            </div>
            <LinkButton href="#payments">Доступные решения</LinkButton>
          </div>
        </Paper>
      </div>
    </Section>
  );
}
