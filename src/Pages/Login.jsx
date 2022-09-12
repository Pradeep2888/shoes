import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {

  const [email,setEmail]=useState('eve.holt@reqres.in')
  const [password,setPassword]=useState('cityslika')
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const location=useLocation()
  const comingForm=location.state?.data || "/";

  const handleSubmit=(e)=>{
   
      e.preventDefault()
      if(email && password){
          dispatch(login({email,password})) 
     
          navigate(comingForm,{replace:true})
      }
  }



  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" onChange={(e)=>setEmail(e.target.value)}  type="email" value={email}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
