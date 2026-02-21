import {useState} from 'react';

function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

export default useCounter;