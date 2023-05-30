import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";

export default function Section({ children }: IWrapComponent) {
  return <section className={styles.section}>{children}</section>;
}
