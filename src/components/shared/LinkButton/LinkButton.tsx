import React from "react";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";
import { IWrapComponent } from "../../../utils/styles/types/shared";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ILinkButton extends IWrapComponent {
  href?: string;
  offset?: number;
}

export default function LinkButton({ children, href, offset }: ILinkButton) {
  return (
    <AnchorLink href={href} offset={offset}>
      <motion.div
        className={styles.container}
        whileHover={{ backgroundColor: "#4A57FF" }}
        whileTap={{ backgroundColor: "#1D236E" }}
      >
        {children}
      </motion.div>
    </AnchorLink>
  );
}
