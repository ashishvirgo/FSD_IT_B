import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/counter">Counter App</Link></li>
        <li><Link to="/stopwatch">StopWatch App</Link></li>
      </ul>
    </div>
  )
}

export default Home
