import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";
import classNames from "classnames";

interface IPaper extends IWrapComponent {
  motionProps?: HTMLMotionProps<"div">;
  className?: string;
}

export default function Paper({ children, motionProps, className }: IPaper) {
  return (
    <motion.div
      {...motionProps}
      className={classNames(styles.paper, className)}
    >
      {children}
    </motion.div>
  );
}
