import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({todo,setTodo,value,setValue}) => {

	// NOTE: do not delete `data-cy` key value pair
	return (
		<div className={styles.todoForm}>
			<input
				data-cy="add-task-input"
				value={value}
				type="text"
				onChange={(e) => {
          setValue(e.target.value);
          // console.log(value)
				}}
				placeholder="Add task..."
			/>
			<button
				data-cy="add-task-button"
				onClick={() => {
					if (value == "") {
						return;
					}
					setTodo([...todo, {id:Date.now(),text:value,done:false,count:1}]);
          // console.log(todo)
					setValue("");
				}}
			>
				+
			</button>
		</div>
	);
};

export default AddTask;
