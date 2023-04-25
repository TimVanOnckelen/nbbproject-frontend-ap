import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';

interface ProfilePageProps {
  username: string;
  bio: string;
  avatarUrl: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username, bio, avatarUrl }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Avatar alt={`${username}'s avatar`} src={avatarUrl} sx={{ width: 150, height: 150, mb: 2 }} />
      <Typography variant="h4" sx={{ mb: 1 }}>{username}</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>{bio}</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>Edit Profile</Button>
      <Button variant="outlined" sx={{ mb: 2 }}>Logout</Button>
    </Box>
  );
}

export default ProfilePage;
