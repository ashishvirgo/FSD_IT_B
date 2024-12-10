import React from 'react'
import {useRef} from 'react'
const Refex = () => {
    console.log("Object Rendered")
    const refcount=useRef(0);
    function handleIncrement(){
        refcount.current++
        if(refcount.current==5)
            alert("current refcount="+refcount.current)
        console.log("refcount=",refcount.current)
    }
  return (
    <div>
      <h1>UseRef Example</h1>
      <h2>RefCount:{refcount.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Refex
