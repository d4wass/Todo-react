import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";

const ListItem = (props) => (
  <div className={styles.wrapper}>
    <li className={styles.item}>
      <div className={styles.input}>
        <label className={styles.radio} id={props.item.id}>
          <input
            id={props.item.id}
            type="radio"
            className={styles.radioInput}
            onChange={(e) => props.changeStatus(e)}
            checked={props.item.completed}
          />
          <div className={styles.radioButton}></div>
          {props.item.description}
        </label>
      </div>
    </li>
    <Button task>edit task</Button>
    {/* <div className={styles.line}></div> */}
  </div>
);

export default ListItem;
