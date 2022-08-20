import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const title = `Welcome ${counter}`;

  const addCounter = () => {
    setCounter((c) => c + 1)
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={addCounter}>Click!</button>
    </div>
  );
}

export default Counter;
