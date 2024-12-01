import React from "react";
import { Box, Typography, Container, Paper, IconButton } from "@mui/material";
import { ExitToApp } from '@mui/icons-material';
import Grid2 from "@mui/material/Grid2"; // Correct import for Grid2 in Material-UI v6+
import SpiderChart from "./SpiderChart";
import ProfileAvatar from "./ProfileAvatar";

const HomePage = ({ user, onBack}) => {
  return (
    <Container
      maxWidth="lg" // Increased max width for more balanced centering
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginX: "auto", // Ensures the container is horizontally centered
        paddingX: { xs: 2, md: 4 }, // Adds padding for smaller screens
        marginTop: 4,
      }}
    >
      {/* Main Content */}
      <Box sx={{ width: "100%", backgroundColor: "#e6e6e6", borderRadius: 2, padding: 2, position:"relative" }}>
        {/* Logout Button */}
        <IconButton
          onClick={onBack}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
          }}
        >
          <ExitToApp fontSize="large"/>
        </IconButton>

        <Grid2 container spacing={10} justifyContent="center" alignItems="center">
          {/* Avatar and User Info */}
          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#66b3b3",
              borderRadius: 2,
              padding: 2,
              boxShadow: 2,
            }}
          >
            <Box textAlign="center">
              <ProfileAvatar seed={user.avatar_seed} />
              <Typography variant="h3" sx={{ mt: 1 }}>
                {user.name}
              </Typography>
              <Typography variant="h5">{user.position}</Typography>
            </Box>
          </Grid2>

          {/* Spider Chart */}
          <Grid2
            size={{ xs: 12, md: 8 }}
            sx={{
              padding: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SpiderChart skills={user.skills} />
          </Grid2>
        </Grid2>
      </Box>

      {/* Experience and Awards */}
      <Box sx={{ width: "100%", marginTop: 6 }}>
        <Grid2 container spacing={6} justifyContent="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper elevation={5} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {user.experience || "Details about the user's experience go here."}
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper elevation={5} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Awards
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {user.awards || "List of awards or recognitions go here."}
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default HomePage;