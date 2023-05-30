import React from "react";

import styles from "./styles.module.scss";
import { IWrapComponent } from "../../../utils/styles/types/shared";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

interface IPaper extends IWrapComponent {
  motionProps?: HTMLMotionProps<"div">;
}

export default function Paper({ children, motionProps }: IPaper) {
  return (
    <motion.div {...motionProps} className={styles.paper}>
      {children}
    </motion.div>
  );
}
