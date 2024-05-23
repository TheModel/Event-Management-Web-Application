import axios from 'axios';
import { useState,useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const {setloggedIn} = useContext(StoreContext)
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = {
      email:email,
      password:password
    }

    console.log(formData)
    if( formData.password !=="" && formData.email !==""){
    await axios.post('http://localhost:3000/api/auth/login',formData).then((res)=>{
      console.log(res.status,res.data,res.headers)
      alert('Login Successfull: ' + formData.email)
      localStorage.setItem('token',res.data.token)
      setloggedIn(true)
      navigate('/')
    }).catch((err) => {
      console.log(err.message)
      alert("Could not log in , please check your credentials")
    })
  }
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input htmlFor="email" type="text" id="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input htmlFor="password" type="password" id="password" name="password" required onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <button type="submit">Login</button>
      </form>
      <span>{"Dont't have an account?"}</span>
      <NavLink className={'nav-link'} to={'/signup'}>SignUp</NavLink>
    </div>
  );
};

export default Login;