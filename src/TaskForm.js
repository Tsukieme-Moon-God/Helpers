import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./store";
import './TaskForm.css'

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TaskForm;
