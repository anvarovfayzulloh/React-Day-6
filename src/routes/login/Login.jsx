import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmitLogin = (e) => {
    e.preventDefault()

    axios.post("auth/login/", { email, password })
      .then(response => {
        if (response.status === 201 && response.data.access_token) {
          alert("Login successfully")
          navigate("/profile")
          localStorage.setItem("token", response.data.access_token)
        }
      })
  }

  return (
    <div className='login' >
      <div className="container">
        <div className="login__wrapper">
          <form onSubmit={handleSubmitLogin} className='login__form'>
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            <p className='login__text' >
              Don't have an account? <Link to={"/register"}>Register</Link>
            </p>
            <button className='login__btn' >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login