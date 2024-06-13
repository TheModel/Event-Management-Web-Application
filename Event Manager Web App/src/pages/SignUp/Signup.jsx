import { useState } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Signup = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = {
      username:name,
      email:email,
      password:password
    }

    console.log(formData)
    if(formData.username !== "" && formData.password !=="" && formData.email !==""){
    await axios.post('http://localhost:3000/api/auth/signup',formData).then((res)=>{
      console.log(res.status,res.data,res.headers)
      toast.success('Account Successfully Created')
    }).catch((err) => {
      console.log(err.message);
      toast.error("Error: " + err.message)
    })
  }
  }
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} >
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input htmlFor="name" type="text" id="name" name="name" required onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input htmlFor="email" type="email" id="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input htmlFor="password" type="password" id="password" name="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type='submit'>Create Account</button>
      </form>
      
      <span>{"Already have an account?"}</span>
      <NavLink className={'nav-link'} to={'/signin'}>Login</NavLink>
    </div>
  );
};

export default Signup;