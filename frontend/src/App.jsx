import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

const App = () => {
  const [user, setUser] = useState(null);
   const [currentPage, setCurrentPage] = useState('login'); // State to manage current page

  const handleLogin = async (credentials) => {
    const response = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
      setCurrentPage('home')
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async (userData) => {
    const response = await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const data = await response.json();
      setCurrentPage('login')
    } else {
      alert("Registration failed. Please try a different name.");
    }
  }

  const handleToRegister = () => {
    setCurrentPage('register'); // Switch to the register page
  };

  const handleBackToLogin = () => {
    setCurrentPage('login'); // Switch back to the login page
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onRegister={handleToRegister} />;
      case 'home':
        return <HomePage user={user} />;
      case 'register':
        return <RegisterPage onBack={handleBackToLogin} onRegister={handleRegister} />;
      default:
        return <LoginPage onLogin={handleLogin} onRegister={handleToRegister} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;