import React, { useEffect, useState } from 'react';
import api from '../../api';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await api.get('/users/profile/');
        setProfileData(response.data);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="profile-container">
      {profileData ? (
        <>
          <h1>Welcome, {profileData.user.username}!</h1>
          <p>First Name: {profileData.user.first_name}</p>
          <p>Last Name: {profileData.user.last_name}</p>
          <p>Phone Number: {profileData.user.phone_number}</p>
          <p>Total Purchases: {profileData.purchases_count}</p>
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
