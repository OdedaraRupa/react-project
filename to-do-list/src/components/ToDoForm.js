import React, { useState } from "react";
const ToDoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };
  return (
    <>
      <div className="form-container">
        <form className="task-form" id="task-form" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="task-input"
            id="task-input"
            placeholder="Add a new task..."
            required=""
          />
          <button type="submit" className="add-btn">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};
export default ToDoForm;
