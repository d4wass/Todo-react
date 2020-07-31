import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { ReactComponent as Inbox } from "../../assets/paper-plane-regular.svg";
import { ReactComponent as Today } from "../../assets/calendar-regular.svg";
import { ReactComponent as Completed } from "../../assets/check-solid.svg";
import { ReactComponent as Upcoming } from "../../assets/calendar-alt-regular.svg";

const Navigation = ({ active }) => (
  <nav className={active ? styles.wrapperActive : styles.wrapper}>
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink
          exact
          to="/"
          className={styles.navItem}
          activeClassName={styles.navItemActive}
        >
          <div className={styles.icon}>
            <Inbox />
          </div>
          <p>Inbox</p>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/today"
          className={styles.navItem}
          activeClassName={styles.navItemActive}
        >
          <div className={styles.icon}>
            <Today />
          </div>
          <p>Today</p>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/upcoming"
          className={styles.navItem}
          activeClassName={styles.navItemActive}
        >
          <div className={styles.icon}>
            <Upcoming />
          </div>
          <p>Upcoming</p>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/completed"
          className={styles.navItem}
          activeClassName={styles.navItemActive}
        >
          <div className={styles.icon}>
            <Completed />
          </div>
          <p>Completed</p>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
