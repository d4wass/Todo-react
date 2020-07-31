import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import AppContext from "../../context";
import nextId from "react-id-generator";

const today = new Date().toISOString().slice(0, 10);

class Modal extends React.Component {
  state = {
    id: nextId(),
    description: "",
    date: today,
    completed: false,
    descriptionError: "",
  };

  handleInput = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  formValidation = () => {
    let descriptionError = "";

    if (!this.state.description) {
      descriptionError = "your description is empty";
      this.setState({ descriptionError });
      return false;
    }

    return true;
  };

  keySubmitting = (e, validation, submit) => {
    if (e.keyCode === 13) {
      validation() ? submit(e, this.state) : alert("your description is empty");
    }
  };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.modalBackground}>
            <div className={styles.wrapper}>
              <div className={styles.heading}>
                <h2 className={styles.title}>Adding task</h2>
                <Button task onClick={context.showModal}>
                  Close
                </Button>
              </div>
              <form
                onKeyDown={(e) =>
                  this.keySubmitting(e, this.formValidation, context.addTask)
                }
                onSubmit={(e) =>
                  this.formValidation()
                    ? context.addTask(e, this.state)
                    : alert("your description is empty")
                }
              >
                <div className={styles.textarea}>
                  <Input
                    tag="textarea"
                    value={this.state.description}
                    onChange={this.handleInput}
                  >
                    Description
                  </Input>
                  <Input
                    type="date"
                    placeholder={this.state.date}
                    value={this.state.date}
                    onChange={this.handleDate}
                  />
                </div>
                <div className={styles.confirmTask}>
                  <Button task>Add Task</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Modal;
