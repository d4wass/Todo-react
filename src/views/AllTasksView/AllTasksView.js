import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const AllTaskView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List
        tasks={context.tasks.filter((item) => !item.completed)}
        menuOpened={context.isMenuOpen}
        changeStatusFn={context.changeStatusTask}
        deleteTaskFn={context.deleteTask}
      />
    )}
  </AppContext.Consumer>
);

export default AllTaskView;
