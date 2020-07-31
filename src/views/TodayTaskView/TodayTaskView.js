import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const today = new Date().toISOString().slice(0, 10);
const TodayTaskView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List
        tasks={context.tasks.filter(
          (item) => item.date === today && !item.completed
        )}
        menuOpened={context.isMenuOpen}
        changeStatusFn={context.changeStatusTask}
        editTaskFn={context.editTaskFn}
        isEditedTask={context.isEditedTask}
      />
    )}
  </AppContext.Consumer>
);

export default TodayTaskView;
