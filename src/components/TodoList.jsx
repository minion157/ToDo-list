import React from "react";
import InputElement from "./InputElement";
import TodoElement from "./TodoElement";
import { useEasybase } from "easybase-react";
import { useEffect } from "react";

const TodoList = () => {
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "TASKS", limit: 10 });
    sync();
  }, []);

  const addTask = (title) => {
    Frame().push({
      id: Frame().length + 1,
      title: title,
      completed: false,
    });
    sync();
  };

  const completeTask = (index) => {
    const newTasks = [...Frame()];
    newTasks[index].completed = true;
    sync();
  };

  const deleteTask = (index) => {
    Frame().splice(index, 1);
    sync();
  };
  return (
    <div className="todo-container">
      <div className="tasks">
        {Frame().map((taskk, index) => (
          <TodoElement
            task={taskk}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <InputElement addTask={addTask} />
      </div>
    </div>
  );
};
export default TodoList;
