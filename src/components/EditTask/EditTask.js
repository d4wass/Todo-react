import React, { useState, useCallback } from "react";
import styles from "./EditTask.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import AppContext from "../../context";

const EditTask = ({ isOpen, taskId, taskValue }) => {
  const [value, setValue] = useState(taskValue);
  const handleInput = useCallback((e) => setValue(e.target.value));
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.editWrapper}>
            <Input
              tag="textarea"
              onChange={(e) => handleInput(e)}
              value={value}
            />
            <Button style={{ width: "20%" }} task>
              Data
            </Button>
          </div>
          <div className={styles.btnWrapper}>
            <Button task onClick={(e) => context.editTask(e, taskId, value)}>
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
