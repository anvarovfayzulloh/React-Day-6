import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifySuccess = () => toast.success("Login successfully");
  const notifyError = () => toast.error("Login failed. Please check your credentials");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios.post("auth/login/", { email, password })
      .then(response => {
        if (response.status === 201 && response.data.access_token) {
          notifySuccess();
          navigate("/profile");
          localStorage.setItem("token", response.data.access_token);
        }
      })
      .catch(error => {
        notifyError();
      });
  };

  return (
    <div className='login'>
      <div className="container">
        <div className="login__wrapper">
          <form onSubmit={handleSubmitLogin} className='login__form'>
            <input
              type="email"
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='login__text'>
              Don't have an account? <Link to={"/register"}>Register</Link>
            </p>
            <button className='login__btn'>Login</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
