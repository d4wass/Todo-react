import React, { useState, useCallback } from "react";
import styles from "./EditTask.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import AppContext from "../../context";

const EditTask = (props) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <div className={styles.editWrapper}>
          <Input tag="textarea" />
          <Button style={{ width: "20%" }} task>
            Data
          </Button>
        </div>
        <div className={styles.btnWrapper}>
          <Button task>Save</Button>
          <Button task onClick={props.isOpen}>
            Cancel
          </Button>
        </div>
      </div>
    )}
  </AppContext.Consumer>
);

export default EditTask;
