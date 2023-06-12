import React from "react";

import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { ReactComponent as CheckMark } from "../../../assets/icons/check-mark.svg";

export default function ProgressBar({ step }: { step: number }) {
  function getProgressWidth() {
    if (step === 2) {
      return "50%";
    }
    if (step === 3) {
      return "100%";
    }
    return 0;
  }
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={{ width: getProgressWidth() }}
        />
        <div className={styles.circleOuter}>
          <motion.div
            animate={step > 1 && { width: "100%", height: "100%" }}
            transition={{
              type: "spring",
            }}
            className={styles.circleInner}
            style={{ backgroundColor: step >= 1 ? "#3744f5" : "#1B2067" }}
          >
            {step > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                }}
              >
                <CheckMark className={styles.checkMark} />
              </motion.div>
            )}
          </motion.div>
        </div>
        <motion.div
          animate={{ borderColor: step >= 2 ? "#3744f5" : "#1B2067" }}
          className={styles.circleOuter}
        >
          <motion.div
            initial
            animate={
              step > 2 && {
                width: "100%",
                height: "100%",
              }
            }
            style={{ backgroundColor: step >= 2 ? "#3744f5" : "#1B2067" }}
            transition={{
              type: "spring",
            }}
            className={styles.circleInner}
          >
            {step > 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                <CheckMark className={styles.checkMark} />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ borderColor: step >= 3 ? "#3744f5" : "#1B2067" }}
          className={styles.circleOuter}
        >
          <motion.div
            animate={step > 2 && { width: "100%", height: "100%" }}
            transition={{
              type: "spring",
            }}
            className={styles.circleInner}
            style={{ backgroundColor: step >= 3 ? "#3744f5" : "#1B2067" }}
          >
            {step > 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  backgroundColor: step >= 3 ? "#3744f5" : "#1B2067",
                }}
                transition={{
                  type: "spring",
                }}
              >
                <CheckMark className={styles.checkMark} />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.titles}>
        <div className={styles.item}>
          <h4 className={styles.title}>Контактная информация</h4>
          <p className={styles.description}>1 минута</p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.title}>Заполнение анкеты</h4>
          <p className={styles.description}>5 минут</p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.title}>Подтверждение</h4>
          <p className={styles.description}>30 секунд</p>
        </div>
      </div>
    </div>
  );
}
