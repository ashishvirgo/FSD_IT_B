import React from 'react'
import {useRef} from 'react'
const Refex = () => {
    let a=5;
    const refcount=useRef(0);
    console.log("object Rendered");
    function handleIncrement(){
        refcount.current++;
        console.log("refcount=",refcount.current);
        if(refcount.current==a)
            alert("refcount="+refcount.current)
    }
  return (
    <div>
      <h1>UseRef Example</h1>
      <h2>RefCount={refcount.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Refex
