import { useState } from "react";

type CounterProps = {
  initialValue?: number;
};

function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
