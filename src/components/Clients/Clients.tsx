import React from "react";

import styles from "./styles.module.scss";

import SubTitle from "../shared/SubTitle/SubTitle";
import Section from "../shared/Section/Section";
import Paper from "../shared/Paper/Paper";
import Tag from "../shared/Tag/Tag";
import Paragraph from "../shared/Paragraph/Paragraph";
import {
  CLIENTS_AMOUNT,
  LEVITATE_ANIMATION,
  PAPER_DEFAULT_HOVER,
  UPDATE_DATE,
} from "../../utils/constants/settings";
import { AnimatedCounter } from "../shared/AnimatedCounter/AnimatedCounter";
import GamblingImg from "../../assets/images/gambling.png";
import PaymentImg from "../../assets/images/payment-xl.png";
import CryptoImg from "../../assets/images/crypto.png";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Clients() {
  return (
    <Section id="clients">
      <SubTitle className={styles.title}>Кто наши клиенты</SubTitle>
      <div className={styles.grid}>
        <Paper motionProps={PAPER_DEFAULT_HOVER}>
          <motion.img
            src={GamblingImg}
            alt="gambling"
            className={styles.blockBg}
            {...LEVITATE_ANIMATION}
          />
          <div className={styles.cardTop}>
            <div>
              <Tag>Весь гемблинг бизнес</Tag>
            </div>
            <h3 className={styles.blockTitle}>Казино и букмекеры</h3>
            <div className={styles.blockText}>
              <Paragraph>
                Мы гарантируем высокую конверсиюи стабильность платежных шлюзов
                для вашего гэмблинг-бизнеса, что обеспечивает его развитие и
                уверенность в будущем.
              </Paragraph>
              <Paragraph>
                Наша технология «локальный эквайринг» включает более 20
                банков-эквайеров из разных стран в 5 валютах, что увеличивает
                конверсию на 45%. Плательщикам не нужно конвертировать валюту,
                что снижает риски мерчанта. 
              </Paragraph>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomLeft}>
              <div>Подключено клиентов</div>
              <div>
                <AnimatedCounter from={0} to={CLIENTS_AMOUNT} />
              </div>
            </div>
            <div className={styles.cardBottomRight}>
              <div>Обновлено</div>
              <div>{UPDATE_DATE}</div>
            </div>
          </div>
        </Paper>
        <Paper motionProps={PAPER_DEFAULT_HOVER}>
          <motion.img
            src={CryptoImg}
            alt="Crypto"
            className={styles.blockBg}
            {...LEVITATE_ANIMATION}
            transition={{ ...LEVITATE_ANIMATION.transition, delay: 0.5 }}
          />
          <div className={styles.cardTop}>
            <div>
              <Tag>Криптовалютный бизнес</Tag>
            </div>
            <h3 className={styles.blockTitle}>Крипто-проекты</h3>
            <div className={styles.blockText}>
              <Paragraph>
                BOVA — решение для приема платежей <br /> и конвертации фиатных
                средств и криптовалют, имеющее криптовалютные лицензии и
                надежных партнеров в сфере процессинга крипто-проектов.
              </Paragraph>
              <Paragraph>
                Для обменников без лицензии, Bova Pay предоставляет легальную
                юридическую оболочку и KYC-инфраструктуру, что позволяет
                принимать платежи с карт простым и 100% легальным способом.
              </Paragraph>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomLeft}>
              <div>Подключено клиентов</div>
              <div>
                <AnimatedCounter from={0} to={CLIENTS_AMOUNT} />
              </div>
            </div>
            <div className={styles.cardBottomRight}>
              <div>Обновлено</div>
              <div>{UPDATE_DATE}</div>
            </div>
          </div>
        </Paper>
      </div>
      <Paper motionProps={PAPER_DEFAULT_HOVER} className={styles.lastCard}>
        <motion.img
          src={PaymentImg}
          alt="Payment"
          className={classNames(styles.blockBg, styles.full)}
          {...LEVITATE_ANIMATION}
          transition={{ ...LEVITATE_ANIMATION.transition, delay: 0.5 }}
        />
        <div className={classNames(styles.cardTop, styles.full)}>
          <div>
            <Tag>Интернет-эквайринг</Tag>
          </div>
          <h3 className={styles.blockTitle}>Платёжные системы</h3>
          <div className={classNames(styles.blockText, styles.full)}>
            <Paragraph>
              Мы предлагаем готовые решения для электронных <br /> платежей с
              10-летним опытом работы. Наша компания может <br /> удовлетворить
              потребности как крупных компаний,
              <br /> так и начинающих бизнесов, предоставляя White-label решения
              <br />
              или создавая полноценный необанк, включая получение лицензий{" "}
              <br /> и прохождение аудита PCI DSS.
            </Paragraph>
          </div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomLeft}>
            <div>Подключено клиентов</div>
            <div>
              <AnimatedCounter from={0} to={CLIENTS_AMOUNT} />
            </div>
          </div>
          <div className={styles.cardBottomRight}>
            <div>Обновлено</div>
            <div>{UPDATE_DATE}</div>
          </div>
        </div>
      </Paper>
    </Section>
  );
}
