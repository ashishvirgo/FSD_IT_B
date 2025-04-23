import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
const ViewUsers = () => {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState(null);
    const [editemail,setEditemail]=useState(null);
    const [edituser,setEdituser]=useState({name:'',role:''})
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
            setError('Failed to fetch user. Please try again.');
        }
    }
    const handleDelete=(email)=>{
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
        try{
            axios.delete(`https://userapp6.onrender.com/removeuser/${email}`)
            alert("user deleted successfully");
            fetchUsers();
        }
        catch(err){
            console.log("user deleting error",err.message)
            setError('Failed to delete user. Please try again.');
        }
    }
    else{
        console.log("cancel user deletion")
    }
    }
    const handleAdd=async()=>{
        if (!newUser.name || !newUser.email) {
            setError('Name and Email are required.');
            return;
        }
        try{
            await axios.post(`https://userapp6.onrender.com/adduser`,newUser)
            alert("user added successfully");
            setNewUser({name: '',email:'',role: 'student'})
            setError(null);
            fetchUsers();
            
        }
        catch(err){
            console.log("user creation error",err.message)
            setError('Failed to add user. Please try again.');
        }
    }
    const handleEdit=(email)=>{
        const userToEdit = users.find((user) => user.email === email);
    if (userToEdit) {
      setEdituser({ name: userToEdit.name, role: userToEdit.role });
    }
              setEditemail(email);
    }
    const handleCancel=()=>{
        setEditemail(null);
    }
    const handleSave=async(email)=>{
        try{
            await axios.put(`https://userapp6.onrender.com/updateuser/${email}`,edituser)
            alert("user edited successfully");
            setEditemail(null);
            setEdituser({name: '',role:''});
            fetchUsers();
        }
        catch(err){
            console.log("user editing error",err.message)
            setError('Failed to edit user. Please try again.');
        }
    }
  return (
    <div className='content'>
      <h3>List of Users</h3>
      <table className='table table-hover'>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>User Email</th>
                <th>User Name</th>
                <th>User Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>#</td>
            <td><input type="email" 
            placeholder="Enter User Email" 
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/></td>
            <td><input type="text" 
            placeholder="Enter Name of User"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}/></td>
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
            <td>{user.email}</td>
            <td>{editemail===user.email?<input type="text" 
            placeholder="Enter Name of User" 
            value={edituser.name}
            onChange={(e) => setEdituser({ ...edituser, name: e.target.value })}/>:(user.name)}</td>
            <td>{editemail===user.email?(<select value={edituser.role}
  onChange={(e) => setEdituser({ ...edituser, role: e.target.value })}>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option></select>): (user.role)}</td>
            <td>{editemail===user.email ? (<><button className='btn btn-success'onClick={()=>handleSave(user.email)}>Save</button>&nbsp;
                <button className='btn btn-danger' onClick={()=>handleCancel()}>Cancel</button></>):
                (<><button className='btn btn-success'onClick={()=>handleEdit(user.email)}>Edit</button>&nbsp;
                <button className='btn btn-danger' onClick={()=>handleDelete(user.email)}>Delete</button></>)
                }
            </td>
           </tr> 
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
