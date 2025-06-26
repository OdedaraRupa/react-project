import React,{useContext} from "react";
import { TodoContext } from "../context/ToDoContext";

const ToDoItem = ({todo}) => {
 
  const { onItemToggle, onItemDelete } = useContext(TodoContext);
  return (
    <>
      <div className="tasks-container">
        <ul className="task-list">
          <li className="task-item " style={{
      textDecoration: todo.completed ? 'line-through' : 'none',
      display: 'flex', justifyContent: 'space-between', marginBottom: '8px'
    }}>
            <input type="checkbox" className="task-checkbox" checked={todo.completed} onChange={() => onItemToggle(todo.id)}   />
            <span className="task-content" onClick={() => onItemToggle(todo.id) } style={{ cursor: 'pointer' }}>{todo.text}</span>
            <button className="delete-btn" onClick={() => onItemDelete(todo.id)} >×</button>
          </li>
        </ul>
       
      </div>
    </>
  );
};
export default ToDoItem;
