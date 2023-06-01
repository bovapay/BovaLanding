import React, { useState } from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle/SubTitle";
import classNames from "classnames";
import { motion } from "framer-motion";
import PayIn from "./PayIn/PayIn";
import PayOut from "./PayOut/PayOut";

export default function Payments() {
  const [isPayIn, setIsPayIn] = useState(true);
  return (
    <Section>
      <SubTitle className={styles.title}>Методы приема и вывода</SubTitle>
      <div className={styles.tabs}>
        <motion.button
          onClick={() => setIsPayIn(true)}
          className={classNames(isPayIn && styles.active)}
          animate={
            isPayIn
              ? {
                  color: "#f3f5f7",
                  borderBottom: "2px solid #3744f5",
                }
              : {
                  color: "#4a4a4a",
                  borderBottom: "2px solid transparent",
                }
          }
        >
          Принимаем
        </motion.button>
        <motion.button
          onClick={() => setIsPayIn(false)}
          className={classNames(!isPayIn && styles.active)}
          animate={
            !isPayIn
              ? {
                  color: "#f3f5f7",
                  borderBottom: "2px solid #3744f5",
                }
              : {
                  color: "#4a4a4a",
                  borderBottom: "2px solid transparent",
                }
          }
        >
          Выплачиваем
        </motion.button>
      </div>
      <div className={styles.grid}>{isPayIn ? <PayIn /> : <PayOut />}</div>
    </Section>
  );
}
