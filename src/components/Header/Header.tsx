import React from "react";

import styles from "./styles.module.scss";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { motion } from "framer-motion";
import NavItem from "./NavItem/NavItem";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <motion.div
          className={styles.link}
          whileHover={{ color: "#3744F5" }}
          whileTap={{ color: "#1D236E" }}
        >
          <AnchorLink href="#connectUsForm" offset={180}>
            Стать клиентом
          </AnchorLink>
        </motion.div>
      </div>
      <nav className={styles.bottom}>
        <ul>
          <li>
            <NavItem href="#about" offset={100}>
              Что такое BOVA
            </NavItem>
          </li>
          <li>
            <NavItem href="#clients" offset={100}>
              Кто наши клиенты
            </NavItem>
          </li>
          <li>
            <NavItem href="#order" offset={100}>
              Что мы можем предложить
            </NavItem>
          </li>
          <li>
            <NavItem href="#advantages">Преимущества работы с нами</NavItem>
          </li>
          <li>
            <NavItem href="#connectUs">Как подключиться</NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
}
