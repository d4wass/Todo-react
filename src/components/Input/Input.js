import React from "react";
import styles from "./Input.module.scss";
import PropsTypes from "prop-types";

const Input = ({ tag: Tag, children, type, ...props }) => (
  <>
    {type !== "date" ? (
      <div className={styles.inputWrapper}>
        <Tag
          type={type ? type : "text"}
          id={children}
          placeholder=" "
          className={Tag !== "input" ? styles.textarea : styles.input}
          {...props}
        />
        <label htmlFor={children} className={styles.label}>
          {children}
        </label>
      </div>
    ) : (
      <input
        type={type ? type : "text"}
        id={children}
        className={styles.dataInput}
        {...props}
      />
    )}
  </>
);

Input.propTypes = {
  tag: PropsTypes.string,
};

Input.defaultProps = {
  tag: "input",
};

export default Input;
