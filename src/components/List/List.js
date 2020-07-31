import React from "react";
import styles from "./List.module.scss";
import ListItem from "./ListItem";
import Button from "../Button/Button";
import { ReactComponent as Add } from "../../assets/plus-solid.svg";
import EditTask from "../EditTask/EditTask";

const List = ({
  tasks,
  menuOpened,
  changeStatusFn,
  editTaskFn,
  isEditedTask,
}) => (
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
              editTaskFn={editTaskFn}
              isEditTask={isEditedTask}
            />
          ))}
          {/* <Button></Button> */}
          {/* <EditTask /> */}
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
