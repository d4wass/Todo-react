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
    tasks: [],
    filteredTasks: [],
    searchValue: "",
    isMenuOpen: false,
    isModalOpen: false,
  };

  handleSearch = (e) => {
    const value = e.target.value;
    const filteredTasks = this.state.tasks.filter((task) =>
      task.description.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      searchValue: value,
      filteredTasks: filteredTasks,
    });
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

  addTask = (e, task) => {
    e.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    this.handleShowModal();
  };

  deleteTask = (id) => {
    console.log("usuwam taksa");
    let copyTasks = [...this.state.tasks];
    copyTasks = copyTasks.filter((task) => task.id !== id);

    this.setState({
      tasks: copyTasks,
    });
  };

  changeStatusTask = (e) => {
    const taskIndex = this.state.tasks.findIndex(
      (task) => task.id === e.target.id
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

  editTask = (id, value, date) => {
    const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
    let copyTasks = [...this.state.tasks];
    copyTasks[taskIndex] = {
      ...copyTasks[taskIndex],
      description: value,
      date: date,
    };

    this.setState({
      tasks: copyTasks,
    });
  };

  render() {
    const contextElement = {
      ...this.state,
      showMenu: this.handleShowMenu,
      showModal: this.handleShowModal,
      addTask: this.addTask,
      changeStatusTask: this.changeStatusTask,
      editTask: this.editTask,
      deleteTask: this.deleteTask,
      handleSearch: this.handleSearch,
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
