import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "./store";
import { FaCheck, FaTrash } from "react-icons/fa";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className={`task ${task.completed ? "completed" : ""}`}>
        <span className={task.completed ? "completed-text" : ""}>{task.text}</span>
        <div className="icon">
          <FaCheck
            style={{ color: task.completed ? "green" : "gray" }}
            onClick={() => dispatch(toggleTask(task.id))}
          />
          <FaTrash
            style={{ color: "red" }}
            onClick={() => dispatch(removeTask(task.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
