import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const LoginPage = ({ onLogin }) => {
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
      </Box>
    </Container>
  );
};

export default LoginPage;
