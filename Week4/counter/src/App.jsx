import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseBtn = () => {
    setCount(count + 1);
  };

  const decreaseBtn = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseBtn}>+1</button>
      <button onClick={decreaseBtn}>-1</button>
    </>
  );
}

export default App;
