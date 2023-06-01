import React from "react";

import styles from "../styles.module.scss";

import Paper from "../../shared/Paper/Paper";
import QiwiImg from "../../../assets/images/qiwi.png";
import QiwiLightImg from "../../../assets/images/qiwi-light.png";
import CardImg from "../../../assets/images/card.png";
import CardLightImg from "../../../assets/images/card-light.png";
import EthImg from "../../../assets/images/eth.png";
import EthLightImg from "../../../assets/images/eth-light.png";
import UsdtImg from "../../../assets/images/USDT.png";
import UsdtLightImg from "../../../assets/images/USDT-light.png";
import getLayoutAnimation from "../../../utils/helpers/getLayoutAnimation";

export default function PayIn() {
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
            backgroundColor: "#92B7FF",
            color: "#080808",
          },
          ...getLayoutAnimation(3),
        }}
        className={styles.cardContainer}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={EthImg} alt="eth" className={styles.dark} />
            <img src={EthLightImg} alt="eth" className={styles.light} />
          </div>
          <p>Bitcoin, Ethereum, Litecoin, Bitcoin Cash, Dash, Zcash</p>
        </div>
      </Paper>
      <Paper
        motionProps={{
          whileHover: {
            backgroundColor: "#9FECD5",
            color: "#080808",
          },
          ...getLayoutAnimation(4),
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
