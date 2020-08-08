import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({
  children,
  link,
  menu,
  task,
  icon,
  item,
  remove,
  showMenu,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!isOpen));
  return (
    <>
      {link ? (
        <NavLink to={link} className={styles.btn}>
          {children}
        </NavLink>
      ) : menu ? (
        <button
          className={isOpen ? styles.active : styles.menuBtn}
          onClick={() => {
            showMenu();
            toggle();
          }}
          {...props}
        >
          <span className={styles.box}>
            <span className={styles.inner}></span>
          </span>
        </button>
      ) : task ? (
        <button className={styles.task} {...props}>
          {children}
        </button>
      ) : item ? (
        <button className={styles.item} {...props}>
          {children}
        </button>
      ) : remove ? (
        <button className={styles.remove} {...props}>
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
