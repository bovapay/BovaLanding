import * as React from "react";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen }: { toggleOpen(): void }) => (
  <motion.ul variants={variants} className={styles.ul}>
    {navigation.map((i, index) => (
      <MenuItem toggleOpen={toggleOpen} i={i} key={index} />
    ))}
  </motion.ul>
);

const navigation = [
  { title: "Что такое BOVA", href: "#about", offset: 100 },
  { title: "Кто наши клиенты", href: "#clients", offset: 100 },
  { title: "Что мы можем предложить", href: "#order", offset: 100 },
  { title: "Преимущества работы с нами", href: "#advantages", offset: 0 },
  { title: "Как подключиться", href: "#connectUs", offset: 0 },
  { title: "Стать клиентом", href: "#connectUsForm", offset: 180 },
];
