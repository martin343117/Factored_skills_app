import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    // Replace this with your backend API call
    const response = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      {user ? (
        <HomePage user={user} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;