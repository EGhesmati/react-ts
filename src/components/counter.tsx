import { useState, useEffect } from "react";

type CounterProps = {
  initialValue?: number;
};

function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Interval with cleanup
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  // Fetch example
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);

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

      <hr />

      {loading && <p>Loading...</p>}
      {data && <p>Fetched title: {data.title}</p>}
    </div>
  );
}

export default Counter;
