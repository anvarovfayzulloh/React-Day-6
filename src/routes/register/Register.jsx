import React, { useState } from 'react'
import './register.css'
import axios from "../../api/axios"
import  {Link, useNavigate} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")

  console.log({name, email, password, avatar})

  const handleSubmitRegister = (e)  => {
    e.preventDefault()
    axios.post("users", {name, email, password, avatar})
    .then((responce) => {
      if(responce.status === 201){
        alert("User created")
        navigate("/login")
      }
    })
  }
  
  return (
    <div className='register' >
      <div className="container">
        <div className="register__wrapper">
          <form onClick={handleSubmitRegister} className='register__form'>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            <input type="url" placeholder='Enter avatar URL' onChange={(e) => setAvatar(e.target.value)} />
            <p className='register__text' >
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
            <button className='register__btn' >Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register