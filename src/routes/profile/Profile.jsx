import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({}); 

  useEffect(() => {
    axios.get("auth/profile")
      .then(response => setUser(response.data))
      .catch(error => {
        console.error("Error fetching profile:", error);
        if (error.response && error.response.status === 401) {
          navigate('/register');
        }
      });
  }, [navigate]);

  return (
    <section className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <p>Loading...</p>
          )}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
