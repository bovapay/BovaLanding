import React from "react";

import styles from "./styles.module.scss";

import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle/SubTitle";
import Cards from "./Cards/Cards";

export default function ConnectUs() {
  return (
    <Section>
      <SubTitle className={styles.title}>Всего 3 шага для подключения</SubTitle>
      <Cards />
    </Section>
  );
}
