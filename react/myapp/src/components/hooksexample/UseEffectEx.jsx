import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
        setCount(100);
    },4000)
    document.title ="MRU";
  },[count]);

  return (
    <div>UseEffectEx
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectEx;