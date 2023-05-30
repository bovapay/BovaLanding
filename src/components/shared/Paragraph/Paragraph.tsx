import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";

export default function Paragraph({ children }: IWrapComponent) {
  return <p className={styles.paragraph}>{children}</p>;
}
