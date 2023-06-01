import React from "react";

import styles from "./styles.module.scss";

import { IWrapComponent } from "../../../utils/styles/types/shared";
import classNames from "classnames";

interface ISubTitle extends IWrapComponent {
  className?: string;
}

export default function SubTitle({ children, className }: ISubTitle) {
  return <h2 className={classNames(styles.subTitle, className)}>{children}</h2>;
}
