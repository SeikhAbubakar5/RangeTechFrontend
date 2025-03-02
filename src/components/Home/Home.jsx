import React from "react";

const Home = () => {
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
    const params = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      redirect_uri: "http://localhost:7001/api/linkedin/callback",
      scope: "openid email profile",
    });

    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  };

  return (
    <div>
      <h1>LinkedIn Login</h1>
      <button onClick={handleLogin}>Sign In With LinkedIn</button>
    </div>
  );
};

export default Home;
