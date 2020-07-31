import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ children, link, menu, task, icon, ...props }) => {
  return (
    <>
      {link ? (
        <NavLink to={link} className={styles.btn}>
          {children}
        </NavLink>
      ) : menu ? (
        <button className={styles.menuBtn} {...props}>
          <span className={styles.box}>
            <span className={styles.inner}></span>
          </span>
        </button>
      ) : task ? (
        <button className={styles.task} {...props}>
          {children}
        </button>
      ) : (
        <button className={styles.btn} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
