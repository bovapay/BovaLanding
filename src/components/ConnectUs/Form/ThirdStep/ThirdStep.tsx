import React from "react";

import styles from "./styles.module.scss";

import SuccessImg from "../../../../assets/images/success.png";

export default function ThirdStep({ isSendError }: { isSendError: boolean }) {
  if (isSendError) {
    return (
      <div className={styles.container}>
        <h4>Извините!</h4>
        <p>Произошла непредвиденная ошибка. Повторите попытку позже.</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <img src={SuccessImg} alt="success" />
      <h4>Вы успешно оставили заявку!</h4>
      <p>
        Мы проверим информацию <br /> и свяжемся с вами в ближайшее время
      </p>
    </div>
  );
}
