import React from "react";
import "../Todo.css";

const TodoElement = ({ task, index, completeTask, deleteTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button className="btn-danger" onClick={() => deleteTask(index)}>
        X
      </button>
      <button
        className="btn btn-primary btn-success"
        onClick={() => completeTask(index)}
      >
        Complete
      </button>
    </div>
  );
};

export default TodoElement;
