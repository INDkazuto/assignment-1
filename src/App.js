import React from "react";
// import FunCounter from "./components/FunCounter";
// import ClassCounter from "./components/ClassCounter";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <div className="counter-row">
          {/* <ClassCounter /> */}
          {/* <FunCounter /> */}
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
