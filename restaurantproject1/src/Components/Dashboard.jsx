import React from 'react'
import { useState,useEffect } from 'react';
const Dashboard = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        const url='https://dummyjson.com/recipes';
        const res=fetch(url);
        res.then((res)=>res.json())
        .then((data)=>{
            console.log(data.recipes)
           setRecipes(data.recipes);
        })
    },[])
  return (
    <div >
      <h1>Restaurant Menu</h1>
      <div style={{display:'flex',justifyContent: 'center'}}>
      <table>
        <tr>
            <th>&nbsp;</th>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        {
            recipes.map((r)=>(
                <tr>
                    <td><img src={r.image} width="100" height="50"/></td>
                    <td>{r.name}</td>
                    <td>{r.cuisine}</td>
                    <td>{r.rating}</td>
                    <td>120/-</td>
                    <td><button>Add to Cart</button></td>
                </tr>
            ))
        }
      </table>
      </div>
    </div>
  )
}

export default Dashboard
