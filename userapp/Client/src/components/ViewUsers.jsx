import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
const ViewUsers = () => {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState(null);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: 'student'
    });
    
    useEffect(()=>{
        fetchUsers();

    },[])
    const fetchUsers=async()=>{
        try{
            const res=await axios.get("https://userapp6.onrender.com/users");
            setUsers(res.data);
        }
        catch(err){
            console.log("users Fetching Error",err.message);
            setError(err.message);
        }
    }
    const handleDelete=(email)=>{
        try{
            axios.delete(`https://userapp6.onrender.com/removeuser/${email}`)
            alert("user deleted successfully");
            fetchUsers();
        }
        catch(err){
            console.log("user deleting error",err.message)
            setError(err.message);
        }
    }
    const handleAdd=async()=>{
        try{
            await axios.post(`https://userapp6.onrender.com/adduser`,newUser)
            alert("user added successfully");
            setNewUser({name: '',email:'',role: 'student'})
            fetchUsers();
        }
        catch(err){
            console.log("user creation error",err.message)
            setError(err.message);
        }
    }
  return (
    <div className='content'>
      <h1>List of Users</h1>
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>#</td>
            <td><input type="text" 
            placeholder="Enter Name of User" 
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}/></td>
            <td><input type="email" 
            placeholder="Enter User Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/></td>
            <td><select value={newUser.role}
  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option></select></td>
            <td>
                <button className='btn btn-primary' onClick={(e)=>handleAdd(e)}>Add User</button>
                
            </td>
           </tr>  
        {error && <tr><td colSpan="5" className="text-danger">{error}</td></tr>} 
        {users.map((user,index)=>(
           <tr>
            <td>{++index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>&nbsp;
                <button className='btn btn-danger' onClick={()=>handleDelete(user.email)}>Delete</button>
            </td>
           </tr> 
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
