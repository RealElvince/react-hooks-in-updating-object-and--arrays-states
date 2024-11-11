import React, { useState } from 'react'

function HookArrays() {
    const [items, setItems] =useState([]);
 

  const addItem = () =>{
    setItems([...items,
        {id:items.length,
        value:Math.floor(Math.random()*10) +1}
    ])
  }
  return (
    <div>
        <h1>Using useState to update state of an array</h1>
        <ul>
            {items.map(item =><li key={item.id}>{item.value}</li>)}  
        </ul>
        <button className='btn btn-success btn-lg' onClick={addItem}>Add Item</button>
    </div>
  )
}

export default HookArrays