import React, {useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {

    const[users, setUsers]= useState([]);

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers= async ()=>{
        const results= await axios.get("http://localhost:8080/users");
        setUsers(results.data)
    };



  return (
    <div className='container'>
        <div className='py-5'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {users.map((user, key)=>(
    <tr >
      <th scope="row" key={key}>{key+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn btn-primary mx-2'>View</button>
        <button className='btn btn-outline-primary mx-2'>Edit</button>
        <button className='btn btn-danger mx-2'>Delete</button>
      </td>
    </tr>
    ))}

  </tbody>
</table>
        </div>    
    </div>
  )
}
