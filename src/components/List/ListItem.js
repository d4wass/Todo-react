import React, { useState, useCallback } from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import EditTask from "../EditTask/EditTask";
import Task from "../List/Task";

const ListItem = ({
  item: { id, description, completed, date },
  changeStatusFn,
  deleteTaskFn,
}) => {
  const [isEdit, setEdit] = useState(false);
  const toggle = useCallback(() => setEdit(!isEdit));

  return (
    <div className={styles.wrapper}>
      {isEdit ? (
        <li className={styles.item}>
          <EditTask
            isOpen={toggle}
            taskId={id}
            taskDescription={description}
            taskDate={date}
          />
        </li>
      ) : (
        <div>
          <Task
            id={id}
            description={description}
            completed={completed}
            changeStatusFn={changeStatusFn}
          />
          <Button task onClick={toggle}>
            edit task
          </Button>
          <Button task onClick={() => deleteTaskFn(id)}>
            delete task
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
