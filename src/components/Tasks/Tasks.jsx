import React from "react";
import styles from "./tasks.module.css";
import image from "../../assets/empty.svg";
import Task from "../Task/Task"

const Tasks = ({todo}) => {
  // console.log(todo)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          todo.map(ele=>
            <Task task={ele} key={ele.id}/>
          )
        }
      </ul>
      
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <img src={image} alt="" />
        <h3>Empty list</h3>
        <p>Add a new task above</p>
      </div>
    </>
  );
};

export default Tasks;
