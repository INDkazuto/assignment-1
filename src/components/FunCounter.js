import React, { useState } from "react";
import "../css/FunCounter.css";

function FunCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="fun-counter-card">
      <div className="fun-counter-heading">Function Component</div>
      <div className="fun-counter-value">{count}</div>
      <div className="fun-counter-buttons">
        <button
          className="fun-counter-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="fun-counter-button"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default FunCounter;
