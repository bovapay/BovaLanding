import * as React from "react";

import styles from "./styles.module.scss";

import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle/MenuToggle";
import { Navigation } from "./Navigation/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.nav}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {
        <>
          <motion.div
            className={styles.background}
            variants={sidebar}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          />
          <Navigation toggleOpen={toggleOpen} />
        </>
      }
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
