import React from "react";

import styles from "./styles.module.scss";

import { IWrapComponent } from "../../../utils/styles/types/shared";
import { motion } from "framer-motion";

export default function NavItem({ children }: IWrapComponent) {
  return (
    <a>
      <motion.span
        className={styles.link}
        whileHover={{ color: "#3744F5" }}
        whileTap={{ color: "#1D236E" }}
      >
        {children}
      </motion.span>
    </a>
  );
}
