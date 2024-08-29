import React, { useState } from 'react'

const Home = () => {
  let [user,setUser]=useState({email:"",password:"",DOB:""})

  
  let updatedHandler = (event)=>{
    setUser({...user, [event.target.name]:event.target.value})
  }
  let submitHandler  = (event)=>{
    event.preventDefault();
    console.log(user)
  }
 return <>
 <div className="container">
 <h3>Logi Details</h3>
  <pre>{JSON.stringify(user)}</pre>
  <div className="row">
  
    <div className="col-5">
    <form onSubmit={submitHandler}>
        <div className='form-group'>
           <label >Email Id:</label> 
           <input  className='form-control' type="text" onChange={updatedHandler} name='email'/> 
        </div>
        <div className='form-group'>
          <label >Password:</label>
          <input className='form-control' type="password" onChange={updatedHandler} name='password' />
        </div>
        <label>DOB:</label>
        <input className='form-control' type="Date" onChange={updatedHandler} name='Date'/><br />
        <input type="submit" value="Login"  className='btn btn-warning'/>      
      </form>
    </div>
  </div>
 </div>
     
     
      </>
}

export default Home