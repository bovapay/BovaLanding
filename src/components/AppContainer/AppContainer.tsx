import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../utils/styles/types/shared";

export default function AppContainer({ children }: IWrapComponent) {
  return <div className={styles.container}>{children}</div>;
}
