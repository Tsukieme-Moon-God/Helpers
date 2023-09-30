import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./store";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
