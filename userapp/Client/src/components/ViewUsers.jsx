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
  return (
    <div className='content'>
      <h1>List of Users</h1>
      <table>
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
                <button>Delete</button>
            </td>
           </tr> 
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
