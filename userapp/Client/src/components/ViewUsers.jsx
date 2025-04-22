import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
const ViewUsers = () => {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState(null);
    
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
            console.log("deleting error",err.message)
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
        {error || users.map((user,index)=>(
           <tr>
            <td>{++index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <button>Edit</button>&nbsp;
                <button onClick={()=>handleDelete(user.email)}>Delete</button>
            </td>
           </tr> 
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
