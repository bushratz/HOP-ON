import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();

  const handleLogin = () => {
    // Trigger email authentication using Auth0
    loginWithRedirect({
      redirectUri: window.location.origin,
      email: email, // We pass the email as metadata or as query param to Auth0
    });
  };

  return (
    <div className="login-form">
      <h2>Welcome to Hop On</h2>
      <p>Please log in with your student email:</p>
      <input
        type="email"
        placeholder="Enter your school email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login with Email</button>
    </div>
  );
}

export default LoginForm;
