import React, { useState, useCallback } from "react";
import styles from "./EditTask.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import AppContext from "../../context";

const EditTask = ({ isOpen, taskId, taskDescription, taskDate }) => {
  const [description, setDescription] = useState(taskDescription);
  const [date, setDate] = useState(taskDate);
  const handleInput = useCallback((e) => setDescription(e.target.value));
  const handleDate = useCallback((e) => setDate(e.target.value));

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.editWrapper}>
            <Input
              tag="textarea"
              onChange={(e) => handleInput(e)}
              value={description}
            />
            <Input type="date" value={date} onChange={(e) => handleDate(e)}>
              Data
            </Input>
          </div>
          <div className={styles.btnWrapper}>
            <Button
              task
              onClick={() => {
                context.editTask(taskId, description, date);
                isOpen();
              }}
            >
              Save
            </Button>
            <Button task onClick={isOpen}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default EditTask;
