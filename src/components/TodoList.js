import { useState } from "react";
import "../css/style.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo() {
    if (task.trim() === "") {
      alert("Enter Task before adding");
    } else {
      setTodo([...todo, { id: Date.now(), text: task, complete: false }]);
      alert("Task Added successfully");
      setTask("");
    }
  }
  function toggleComplete(id) {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  return (
    <div className="conatiner">
      <h1>Assignment -2 TODO APP</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}> Add </button>

      <h3> List of task</h3>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => toggleComplete(item.id)}
            />
            <span
              style={{
                textDecoration: item.complete ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
