import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count,setCountValue] = useState(initialValue);
  const increment=()=>setCountValue(count+1);
  const decrement=()=>setCountValue(count-1);
  const reset=()=>setCountValue(initialValue);
  const setCount=(number)=>setCountValue(number);
  return {count,increment,decrement,reset,setCount}
  throw 'Not implemented!';
}

export default function Component() {
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}