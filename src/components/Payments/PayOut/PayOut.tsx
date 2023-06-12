import React from "react";

import styles from "../styles.module.scss";

import Paper from "../../shared/Paper/Paper";
import QiwiImg from "../../../assets/images/qiwi.svg";
import QiwiLightImg from "../../../assets/images/qiwi-light.svg";
import CardImg from "../../../assets/images/card.svg";
import CardLightImg from "../../../assets/images/card-light.svg";
import EthImg from "../../../assets/images/eth.png";
import EthLightImg from "../../../assets/images/eth-light.svg";
import UsdtImg from "../../../assets/images/USDT.svg";
import UsdtLightImg from "../../../assets/images/USDT-light.svg";
import getLayoutAnimation from "../../../utils/helpers/getLayoutAnimation";

export default function PayOut() {
  return (
    <>
      <Paper
        motionProps={{
          whileHover: {
            backgroundColor: "#FFD6A6",
            color: "#080808",
          },
          ...getLayoutAnimation(1),
        }}
        className={styles.cardContainer}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={QiwiImg} alt="qiwi" className={styles.dark} />
            <img src={QiwiLightImg} alt="qiwi" className={styles.light} />
          </div>
          <p>QIWI</p>
        </div>
      </Paper>
      <Paper
        motionProps={{
          whileHover: {
            backgroundColor: "#A1ABFF",
            color: "#080808",
          },
          ...getLayoutAnimation(2),
        }}
        className={styles.cardContainer}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={CardImg} alt="card" className={styles.dark} />
            <img src={CardLightImg} alt="card" className={styles.light} />
          </div>
          <p>Банковские карты</p>
        </div>
      </Paper>
      <Paper
        motionProps={{
          whileHover: {
            backgroundColor: "#9FECD5",
            color: "#080808",
          },
          ...getLayoutAnimation(3),
        }}
        className={styles.cardContainer}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={UsdtImg} alt="usdt" className={styles.dark} />
            <img src={UsdtLightImg} alt="usdt" className={styles.light} />
          </div>
          <p>USDT</p>
        </div>
      </Paper>
    </>
  );
}
