import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import Header from "../components/Header";
import { TodoContext } from "../context/ToDoContext";
const HomePage = () => {
  const [todos, setToDos] = useState([]);

  const addTodo = (text) => {
    const newToDo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setToDos([newToDo, ...todos]);
  };
  const onItemToggle = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const onItemDelete = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Header></Header>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      <TodoContext.Provider value={{todos,onItemDelete,onItemToggle}}>
        <ToDoList />
      </TodoContext.Provider>
    </>
  );
};
export default HomePage;
