import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const today = new Date().toISOString().slice(0, 10);
const UpcomingTasksView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List
        tasks={context.tasks.filter(
          (item) =>
            item.date !== today &&
            !item.completed &&
            Date.parse(today) < Date.parse(item.date)
        )}
        menuOpened={context.isMenuOpen}
        changeStatusFn={context.changeStatusTask}
        deleteTaskFn={context.deleteTask}
        filtered={context.filteredTasks}
        searchValue={context.searchValue}
      />
    )}
  </AppContext.Consumer>
);

export default UpcomingTasksView;
