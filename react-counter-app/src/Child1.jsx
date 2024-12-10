import React from 'react'
import Child2 from './Child2'
const Child1 = ({student}) => {
  return (
    <div>
      <h1>Child1 Component</h1>
      <Child2 student={student}/>
    </div>
  )
}

export default Child1
