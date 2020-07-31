import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const CompletedTasksView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List
        tasks={context.tasks.filter((item) => item.completed)}
        menuOpened={context.isMenuOpen}
        changeStatusFn={context.changeStatusTask}
        editTaskFn={context.editTaskFn}
        isEditedTask={context.isEditedTask}
      />
    )}
  </AppContext.Consumer>
);

export default CompletedTasksView;
