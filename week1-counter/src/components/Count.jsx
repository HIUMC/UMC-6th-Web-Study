import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 id="number">{count}</h2>
      <div>
        <button
          id="increase"
          onClick={() => {
            setCount(count + 1);
            console.log("increase 가 클릭됨");
          }}
        >
          +1
        </button>

        <button
          id="decrease"
          onClick={() => {
            setCount(count - 1);
            console.log("decrease 가 클릭됨");
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Count;
