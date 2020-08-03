import React, { useState, useCallback } from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import EditTask from "../EditTask/EditTask";
import Task from "../List/Task";
import { ReactComponent as Trash } from "../../assets/trash-alt-regular.svg";
import { ReactComponent as Edit } from "../../assets/edit-regular.svg";

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
        <>
          <Task
            id={id}
            description={description}
            completed={completed}
            changeStatusFn={changeStatusFn}
          />
          <div className={styles.btnWrapper}>
            <Button task onClick={toggle}>
              <Edit />
            </Button>
            <Button task onClick={() => deleteTaskFn(id)}>
              <Trash />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
