import React, { useState, useEffect } from 'react';

function CandidateProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:7001/api/linkedin/get-user', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      }
    };

    getData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Candidate Profile</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Avatar:</strong></p>
          {user?.avatar && <img src={user.avatar} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />}
          <p><strong>Experience:</strong> {user?.experience} years</p>
          <p><strong>Skills:</strong> {user?.skills?.join(', ') || 'N/A'}</p>
          <p><strong>Location:</strong> {user?.location || 'N/A'}</p>
          <p><strong>Preferred Job Roles:</strong> {user?.preferredJobRoles?.join(', ') || 'N/A'}</p>
          
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default CandidateProfile;

