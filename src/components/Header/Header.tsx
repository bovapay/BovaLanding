import React from "react";

import styles from "./styles.module.scss";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { motion } from "framer-motion";
import NavItem from "./NavItem/NavItem";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <motion.a
          className={styles.link}
          whileHover={{ color: "#3744F5" }}
          whileTap={{ color: "#1D236E" }}
        >
          Стать клиентом
        </motion.a>
      </div>
      <nav className={styles.bottom}>
        <ul>
          <li>
            <NavItem>Что такое BOVA</NavItem>
          </li>
          <li>
            <NavItem>Кто наши клиенты</NavItem>
          </li>
          <li>
            <NavItem>Что мы можем предложить</NavItem>
          </li>
          <li>
            <NavItem>Преимущества работы с нами</NavItem>
          </li>
          <li>
            <NavItem>Как подключиться</NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
}