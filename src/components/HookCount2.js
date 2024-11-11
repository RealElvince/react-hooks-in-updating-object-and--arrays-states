import React, { useState } from 'react'

function HookCount2() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount);


    const increment10 = () =>{
        
            setCount(previousCount => previousCount + 1)
    
    }
    
  return (
    <div>
        <h1>Updating state based on previous state.</h1>
        <h2>Count: {count}</h2>
        <button className='btn btn-primary btn-lg'onClick={()=>setCount(initialCount)}>Reset</button>
        <button className='btn btn-success tb-lg'onClick={()=>setCount(previousCount =>previousCount - 1)}> Decrease</button>
        <button className='btn btn-warning btn-lg'onClick={()=>setCount(previousCount =>previousCount + 1)}>Increase</button>
        <button className='btn btn-secondary btn-lg' onClick={increment10}>Increment</button>
    </div>
  );
}

export default HookCount2;