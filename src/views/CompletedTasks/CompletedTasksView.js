import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const CompletedTasksView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List
        tasks={context.tasks.filter((item) => item.completed)}
        menuOpened={context.isMenuOpen}
        changeStatus={context.statusTask}
      />
    )}
  </AppContext.Consumer>
);

export default CompletedTasksView;
