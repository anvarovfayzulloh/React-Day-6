import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__wrapper">
            <ul className="nav__links">
              <li><Link to={"/products"}>Products</Link></li>
              <li><Link to={"/login"}>Login</Link></li>
              <li><Link to={"/register"}>Register</Link></li>
              <li><Link to={"/profile"}>Profile</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Home;
