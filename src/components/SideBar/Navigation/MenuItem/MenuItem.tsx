import * as React from "react";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";
import NavItem from "../../../Header/NavItem/NavItem";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  i,
  toggleOpen,
}: {
  i: {
    title: string;
    href: string;
    offset: number;
  };
  toggleOpen(): void;
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.item}
      onClick={toggleOpen}
    >
      <NavItem href={i.href} offset={i.offset}>
        {i.title}
      </NavItem>
    </motion.li>
  );
};
