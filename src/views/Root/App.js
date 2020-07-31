import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./App.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Modal from "../../components/Modal/Modal";
import AllTasksView from "../AllTasksView/AllTasksView";
import TodayTaskView from "../TodayTaskView/TodayTaskView";
import AppContext from "../../context";
import CompletedTasksView from "../CompletedTasks/CompletedTasksView";
import UpcomingTasksView from "../UpcomingTasksView/UpcomingTasksView";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1596018601067,
        completed: false,
        date: "2020-07-29",
        description: "test",
      },
      {
        id: 1596018628228,
        completed: false,
        date: "2020-07-29",
        description: "test 2",
      },
    ],
    isMenuOpen: false,
    isModalOpen: false,
    isEditedTask: false,
  };

  handleShowMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleShowModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addTask = (e, task) => {
    e.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    this.handleCloseModal();
  };

  changeStatusTask = (e) => {
    const taskIndex = this.state.tasks.findIndex(
      (task) => task.id === Number(e.target.id)
    );

    let copyTasks = [...this.state.tasks];
    copyTasks[taskIndex] = {
      ...copyTasks[taskIndex],
      completed: !copyTasks[taskIndex].completed,
    };

    this.setState({
      tasks: copyTasks,
    });
  };

  editTask = (e, showInput) => {
    console.log("coś tam działam");
    console.log(e.target);
    this.setState((prevState) => ({
      editTask: showInput ? !prevState.editTask : prevState.editTask,
    }));
  };

  render() {
    const contextElement = {
      ...this.state,
      showMenu: this.handleShowMenu,
      showModal: this.handleShowModal,
      closeModal: this.handleCloseModal,
      addTask: this.addTask,
      changeStatusTask: this.changeStatusTask,
      editTaskFn: this.editTask,
    };
    const { isMenuOpen, isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElement}>
          <Header />
          <div className={styles.wrapper}>
            <Navigation active={isMenuOpen} />

            <Switch>
              <Route exact path="/" component={AllTasksView} />
              <Route path="/today" component={TodayTaskView} />
              <Route path="/upcoming" component={UpcomingTasksView} />
              <Route path="/completed" component={CompletedTasksView} />
            </Switch>
          </div>
          {isModalOpen && <Modal />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
