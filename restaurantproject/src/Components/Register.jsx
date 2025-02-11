import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Register = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
  return (
    <div>
      <h1>Registration Page</h1>
      <form>
    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPass(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register
