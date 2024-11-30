import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid2, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const RegisterPage = ({ onBack, onRegister }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setWorkExperience] = useState('');
  const [awards, setAwards] = useState('');
  const [skills, setSkills] = useState([{ skill_name: '', proficiency: '' }]);
  const avatar_seed=1

  // Handle adding a new skill input
  const handleAddSkill = () => {
    setSkills([...skills, { skill_name: '', proficiency: '' }]);
  };

  // Handle removing a skill input
  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  // Handle skill input change
  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  // Handle form submission
  const handleSubmit = () => {
    const formData = {
      name,
      password,
      position,
      experience,
      awards,
      skills,
      avatar_seed,
    };
    // Call the parent onRegister function to send the data
    console.log("Form data to be submitted:", formData); // Log form data
    onRegister(formData)
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
          Register
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
        <TextField
          label="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Work Experience"
          value={experience}
          onChange={(e) => setWorkExperience(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Awards"
          value={awards}
          onChange={(e) => setAwards(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        {/* Skill inputs */}
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Skills
        </Typography>
        {skills.map((skill, index) => (
          <Grid2 container spacing={2} key={index}>
            <Grid2 item xs={5}>
              <TextField
                label="Skill Name"
                value={skill.skill_name}
                onChange={(e) => handleSkillChange(index, 'skill_name', e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid2>
            <Grid2 item xs={5}>
              <TextField
                label="Proficiency"
                value={skill.proficiency}
                onChange={(e) => handleSkillChange(index, 'proficiency', e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid2>
            <Grid2 item xs={2}>
              <IconButton onClick={() => handleRemoveSkill(index)} color="error">
                <Remove />
              </IconButton>
            </Grid2>
          </Grid2>
        ))}
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={handleAddSkill}
        >
          Add Skill
        </Button>

        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={onBack}
        >
          Back to Login
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage;