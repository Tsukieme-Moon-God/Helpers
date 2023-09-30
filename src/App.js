import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import  './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Планировщик задач</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
