import React from 'react';

const ProfileAvatar = ({ seed }) => {
  const avatarUrl = `https://avataaars.io/?avatarStyle=Circle&seed=${seed}`;

  return <img src={avatarUrl} alt="User Avatar" />;
};

export default ProfileAvatar;