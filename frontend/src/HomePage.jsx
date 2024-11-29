import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText, Avatar } from '@mui/material';
import SpiderChart from './SpiderChart';
import ProfileAvatar from './ProfileAvatar';

const HomePage = ({ user }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Typography variant="h6">Position: {user.position}</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Skills:
        </Typography>
        <List>
          {user.skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${skill.skill_name} (Proficiency: ${skill.proficiency})`}
              />
            </ListItem>
          ))}
        </List>
        <SpiderChart skills={user.skills} />
        <ProfileAvatar seed={user.avatar_seed} />
      </Box>
    </Container>
  );
};

export default HomePage;
