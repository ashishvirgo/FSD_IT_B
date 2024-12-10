import React from 'react'

const Child3 = ({student}) => {
  return (
    <div>
      <h1>Child3 Component</h1>
      <h2>Name={student.name}</h2>
      <h2>Age={student.age}</h2>
    </div>
  )
}

export default Child3
