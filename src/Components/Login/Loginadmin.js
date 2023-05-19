import React, { useEffect, useState } from 'react'
import "./Login.css";
import back from "../img/Background.jpg" 
import { Link } from 'react-router-dom';


export default function Loginadmin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
    <img src={back} alt="" className='backimage' />
        <div className="form-box">
      <form className="form">
          <h1 className="title">Login</h1>
          <span className="subtitle">welcome back !</span>
          <div className="form-container">
                  <input type="email" class="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type="password" class="input" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <input type='button' className='button'  value="Sign up"/>
      </form>
    </div>
    </>
  )
}
