// LoginPage.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Link } from '@mui/material';

const LoginPage = ({ onLogin, onRegister }) => {
  console.log("Rendering LoginPage");
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate(); // Hook to navigate between pages

  const handleSubmit = () => {
    onLogin({ name, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        {/* Register Link */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link
              onClick={onRegister}  // Trigger the onRegister function passed as a prop
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;