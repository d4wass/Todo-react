import React from "react";
import styles from "./List.module.scss";
import ListItem from "./ListItem";
import { ReactComponent as Add } from "../../assets/plus-solid.svg";

const List = ({ tasks, menuOpened, changeStatusFn, deleteTaskFn }) => (
  <>
    {tasks.length ? (
      <div className={menuOpened ? styles.wrapperActive : styles.wrapper}>
        <h1>Today tasks</h1>
        <ul className={styles.listWrapper}>
          {tasks.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              id={item.id}
              changeStatusFn={changeStatusFn}
              deleteTaskFn={deleteTaskFn}
            />
          ))}
        </ul>
      </div>
    ) : (
      <div className={menuOpened ? styles.wrapperActive : styles.wrapper}>
        <h1>There nothing to do today. Add new task</h1>
      </div>
    )}
  </>
);

export default List;
