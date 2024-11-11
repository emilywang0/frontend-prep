import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  const handleCount = () => {
    setCounter(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Increase Counter</button>
      <p> Count: {count} </p>
    </div>
  );
}

export default Counter;
