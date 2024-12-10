import React from 'react'
import Child3 from './Child3'

const Child2 = ({student}) => {
  return (
    <div>
      <h1>Child2 Component</h1>
      <Child3 student={student}/>
    </div>
  )
}

export default Child2
