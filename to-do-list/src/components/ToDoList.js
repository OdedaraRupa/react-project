import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodoContext } from "../context/ToDoContext";
const ToDoList = () => {
 
  const {todos} = useContext(TodoContext);
  let isEmpty = true;
  isEmpty = Object.keys(todos).length === 0;
  return (
    <>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo}></ToDoItem>
      ))}
      <div
        className={`empty-state ${isEmpty ? "show" : "hidden"}`}
        id="empty-state"
      >
        <div>📝</div>
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    </>
  );
};
export default ToDoList;
