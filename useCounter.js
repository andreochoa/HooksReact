import { useState } from "react"

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }
    const reset = () => {
        setCounter(0);
    }
    const decrement = () => {
        if(counter <= 0) return;
        setCounter(counter - 1);
    }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default useCounter
