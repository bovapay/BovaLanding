import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";

interface ISection extends IWrapComponent {
  id?: string;
}

export default function Section({ children, id }: ISection) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}
