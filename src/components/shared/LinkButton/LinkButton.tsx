import React from "react";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";
import { IWrapComponent } from "../../../utils/styles/types/shared";

export default function LinkButton({ children }: IWrapComponent) {
  return (
    <a>
      <motion.div
        className={styles.container}
        whileHover={{ backgroundColor: "#4A57FF" }}
        whileTap={{ backgroundColor: "#1D236E" }}
      >
        {children}
      </motion.div>
    </a>
  );
}
