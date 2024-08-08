import React, { useState } from 'react';
import './register.css';
import axios from "../../api/axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const notify = () => toast.error("Invalid Registration");

  console.log({ name, email, password, avatar });

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    axios.post("users", { name, email, password, avatar })
      .then((response) => {
        if (response.status === 201) {
          toast.success("User created");
          navigate("/login");
        } else if (response.status === 400) {
          notify();
        }
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.");
      });
  }

  return (
    <div className='register'>
      <div className="container">
        <div className="register__wrapper">
          <form onSubmit={handleSubmitRegister} className='register__form'>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            <input type="url" placeholder='Enter avatar URL' onChange={(e) => setAvatar(e.target.value)} />
            <p className='register__text'>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
            <button className='register__btn'>Register</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Register;
