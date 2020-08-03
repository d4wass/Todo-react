import React from "react";
import styles from "./List.module.scss";
import ListItem from "./ListItem";

const location = window.location.pathname;
const List = ({ tasks, menuOpened, changeStatusFn, deleteTaskFn }) => (
  <>
    {tasks.length ? (
      <div className={menuOpened ? styles.wrapperActive : styles.wrapper}>
        <h1 className={styles.title}>Today tasks</h1>
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
        {window.location.pathname === "/completed" ? (
          <h1 className={styles.title}>You're done for now</h1>
        ) : window.location.pathname === "/today" ? (
          <h1 className={styles.title}>Nothing to do today, add new tasks.</h1>
        ) : window.location.pathname === "/upcoming" ? (
          <h1 className={styles.title}>Nothing comming up, make some plans.</h1>
        ) : (
          <h1 className={styles.title}>Nothing here yet, make some plans.</h1>
        )}
      </div>
    )}
  </>
);

export default List;
