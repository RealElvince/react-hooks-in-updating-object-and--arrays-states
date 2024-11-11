import React, { useState } from 'react'

function HookObject() {
    const [name,setName] = useState({firstName:"",lastName:""})
  return (
    <div>
        <h1>Use state to update object!</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">First Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter first name." value={name.firstName}  onChange={e => setName({...name,firstName:e.target.value})} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter last name." value={name.lastName}  onChange={e => setName({...name ,lastName:e.target.value})} />
        </div>
        <h2>{JSON.stringify(name)}</h2>
    </div>


  );
}

export default HookObject;