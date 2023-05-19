import React, { useEffect, useState } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';


export default function Loginprof() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-box">
      <form className="form">
          <h1 className="title">login</h1>
          <span className="subtitle">welcome back !</span>
          <div className="form-container">
                  <input type="email" class="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type="password" class="input" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <input type='button' className='button'  value="Sign up"/>
      </form>
      <div class="form-section">
        <p>didn't Have an account? <Link to="/S'inscrire">create account</Link> </p>
      </div>
    </div>
  )
}
