import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json"

const TaskApp = () => {

  const [todo, setTodo] = React.useState(data);
	const [value, setValue] = React.useState("");
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask todo={todo} setTodo={setTodo} value={value} setValue={setValue}/>
      {/* Tasks */}
      <Tasks todo={todo}/>
    </div>
  );
};

export default TaskApp;
