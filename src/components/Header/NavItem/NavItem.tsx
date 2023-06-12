import React from "react";

import styles from "./styles.module.scss";

import { IWrapComponent } from "../../../utils/styles/types/shared";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface INavItem extends IWrapComponent {
  href: string;
  offset?: number;
}

export default function NavItem({ children, href, offset }: INavItem) {
  return (
    <AnchorLink href={href} offset={offset}>
      <motion.span
        className={styles.link}
        whileHover={{ color: "#3744F5" }}
        whileTap={{ color: "#1D236E" }}
      >
        {children}
      </motion.span>
    </AnchorLink>
  );
}
