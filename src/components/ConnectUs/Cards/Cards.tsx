import React from "react";

import styles from "./styles.module.scss";
import Paper from "../../shared/Paper/Paper";
import Paragraph from "../../shared/Paragraph/Paragraph";
import getLayoutAnimation from "../../../utils/helpers/getLayoutAnimation";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Paper className={styles.card} motionProps={{ ...getLayoutAnimation(1) }}>
        <div className={styles.number}>1</div>
        <h4 className={styles.cardTitle}>Оставьте заявку</h4>
        <Paragraph>
          Вы можете сделать это на нашем сайте или в{" "}
          <a className={styles.link} href="#">
            Telegram боте
          </a>{" "}
          за 3 минуты
        </Paragraph>
      </Paper>

      <Paper className={styles.card} motionProps={{ ...getLayoutAnimation(2) }}>
        <div className={styles.number}>2</div>
        <h4 className={styles.cardTitle}>Коммерческое предложение</h4>
        <Paragraph>
          Наша команда менеджеров сделает вам лучшее предложение на рынке
        </Paragraph>
      </Paper>

      <Paper className={styles.card} motionProps={{ ...getLayoutAnimation(3) }}>
        <div className={styles.number}>3</div>
        <h4 className={styles.cardTitle}>Проведите интеграцию</h4>
        <Paragraph>
          Подключите наши API уже сегодня и начните принимать платежи{" "}
        </Paragraph>
      </Paper>
    </div>
  );
}
