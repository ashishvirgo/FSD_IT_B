import {Routes,Route} from 'react-router-dom'
import Refex from './Components/Refex'
const App=()=>{
return(
  <div>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}></Route>
      <Route path="/counter" element={<h1>Counter App</h1>}></Route>
      <Route path="/refex" element={<Refex/>}></Route>
      <Route path="/stopwatch" element={<h1>StopWatch App</h1>}></Route>
      <Route path="*" element={<h1>No Page Available</h1>}></Route>
    </Routes>
  </div>
)
}
export default App;