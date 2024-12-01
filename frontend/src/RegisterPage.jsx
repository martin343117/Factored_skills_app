import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid2, IconButton } from '@mui/material';
import { ChangeCircle, Remove } from '@mui/icons-material';
import ProfileAvatar from "./ProfileAvatar";

const RegisterPage = ({ onBack, onRegister }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setWorkExperience] = useState('');
  const [awards, setAwards] = useState('');
  const [skills, setSkills] = useState([{ skill_name: '', proficiency: '' }]);
  const [avatar_seed, setSeed] = useState(1);

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

  // change the avatar seed to a new random one
  const randomizeSeed = () => {
    const randomInt = Math.floor(Math.random() * 1000000); // Generates an integer between 0 and 1e6
    setSeed(randomInt);
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
    onRegister(formData);
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

        {/* Avatar and randomize button */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
          <Box sx={{ mr: 2 }}>
            <ProfileAvatar seed={avatar_seed} />
          </Box>
          <IconButton onClick={randomizeSeed} color="error">
            <ChangeCircle fontSize="large"/>
          </IconButton>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ flex: 1, mr: 2 }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{ flex: 1 }}
          >
            Back to Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;