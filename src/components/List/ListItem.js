import React, { useState, useCallback } from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import EditTask from "../EditTask/EditTask";

const ListItem = (props) => {
  const [isEdit, setEdit] = useState(false);
  const toggle = useCallback(() => setEdit(!isEdit));

  return (
    <div className={styles.wrapper}>
      {isEdit ? (
        <li className={styles.item}>
          <EditTask isOpen={toggle} />
        </li>
      ) : (
        <div>
          <li className={styles.item}>
            <div className={styles.input}>
              <label className={styles.radio} id={props.item.id}>
                <input
                  id={props.item.id}
                  type="radio"
                  className={styles.radioInput}
                  onChange={(e) => props.changeStatusFn(e)}
                  checked={props.item.completed}
                />
                <div className={styles.radioButton}></div>
                {props.item.description}
              </label>
            </div>
          </li>
          <Button task onClick={toggle}>
            edit task
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
