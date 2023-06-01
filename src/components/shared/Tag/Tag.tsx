import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";

export default function Tag({ children }: IWrapComponent) {
  return <span className={styles.tag}>{children}</span>;
}
