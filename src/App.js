import React, { useState } from 'react';
import './App.css';
function App() {
  const [Count, setCount] = useState(0);
  function increment() {
    setCount(function (n) {
      return n += 1
    })
  }
  function decrement() {
    setCount(function (n) {
      if (n > 0) {
        return (n -= 1);
      } else {
        return (n = 0);
      }
    })
  }
  function submit() {
    alert(Count)
  }
  return (
    <>
      <h1>{Count}</h1>
      <button className='incdec' onClick={() => increment()}>+</button>
      <button className='incdec' onClick={() => decrement()}>-</button>
      <button className='submit' onClick={() => submit()}>Submit</button>
    </>
  );
}
export default App;