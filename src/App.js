import React, { useState } from 'react';
import './App.css';
function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <h1>{Count}</h1>
      <button className='incdec r1' onClick={() => setCount(Count + 1)}>+</button>
      <button className='incdec r2' onClick={() => setCount(Count < 1 ? 0 : Count - 1)}>-</button>
      <button className='reset' onClick={() => setCount(0)}>RESET</button>
    </>
  );
}
export default App;