import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  function handleIncreament() {
    setCounter((count) => count + 1);
  }
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {handleIncreament(); }}
      >
        Increament
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCounter((count) => (count = count - 1))}
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;