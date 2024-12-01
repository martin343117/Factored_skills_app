import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Link, Paper, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const LoginPage = ({ onLogin, onRegister }) => {
  console.log("Rendering LoginPage");
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onLogin({ name, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Paper
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 400,
            boxShadow: 3, // Adds a subtle shadow
            backgroundColor: '#f7f7f7', // Light background color
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
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
            <Typography variant="body2" align="center">
              New user?{' '}
              <Link
                onClick={onRegister}  // Trigger the onRegister function passed as a prop
                sx={{ cursor: 'pointer', color: 'primary.main' }}
              >
                Create your profile here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;