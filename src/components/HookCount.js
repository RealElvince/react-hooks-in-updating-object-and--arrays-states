import React, { useState } from 'react'



function HookCount() {
  const [count, setCount] =useState(0);


  return (
    <div>
        <h1>This is button clicked!</h1>
        <h2>Number of counts so far is:{count} .</h2>
        <button className='btn btn-success btn-lg' onClick={()=>setCount(count + 5)}> Updated:{count} .</button>

    </div>
  )
}

export default HookCount;