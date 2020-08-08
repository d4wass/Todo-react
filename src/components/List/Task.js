import React from "react";
import styles from "./Task.module.scss";

const Task = ({ description, completed, changeStatusFn, id }) => (
  <li className={styles.item}>
    <div className={styles.input}>
      <label className={styles.radio} id={id}>
        <input
          id={id}
          type="radio"
          className={styles.radioInput}
          onChange={(e) => changeStatusFn(e)}
          checked={completed}
        />
        <div className={styles.radioButton}></div>
        <span className={styles.label}>{description}</span>
      </label>
    </div>
  </li>
);

export default Task;
